import { NextResponse } from "next/server";
import { leadFormSchema } from "@/lib/validations";
import { sendLeadNotification } from "@/lib/email";
import { generateLeadId } from "@/lib/utils";

// Simple in-memory rate limiter (in production use Redis/KV)
const rateLimit = new Map<string, number[]>();
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 10; // 10 requests per hour

export async function POST(request: Request) {
    try {
        const ip = request.headers.get("x-forwarded-for") || "unknown";

        // Rate Limiting Check
        const now = Date.now();
        const timestamps = rateLimit.get(ip) || [];
        const validTimestamps = timestamps.filter(t => now - t < RATE_LIMIT_WINDOW);

        if (validTimestamps.length >= RATE_LIMIT_MAX) {
            return NextResponse.json(
                { success: false, error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        // Update rate limit
        validTimestamps.push(now);
        rateLimit.set(ip, validTimestamps);

        const body = await request.json();

        // Validate form data
        const result = leadFormSchema.safeParse(body);

        if (!result.success) {
            return NextResponse.json(
                {
                    success: false,
                    error: "Invalid form data",
                    field_errors: result.error.flatten().fieldErrors
                },
                { status: 400 }
            );
        }

        const leadData = result.data;
        const leadId = generateLeadId();

        // Send email notification
        // Note: In a real app, you might want to retry this or queue it
        if (process.env.RESEND_API_KEY) {
            await sendLeadNotification(leadData);
        }

        // Here you would typically save to database (Supabase, Postgres, etc)

        return NextResponse.json({
            success: true,
            message: "Lead submitted successfully",
            lead_id: leadId,
        });

    } catch (error) {
        console.error("Lead submission error:", error);
        return NextResponse.json(
            { success: false, error: "Internal server error" },
            { status: 500 }
        );
    }
}
