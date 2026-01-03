import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes with clsx
 */
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

/**
 * Format phone number as (XXX) XXX-XXXX
 */
export function formatPhoneNumber(value: string): string {
    // Remove all non-digits
    const digits = value.replace(/\D/g, "");

    // Limit to 10 digits
    const limited = digits.slice(0, 10);

    // Format based on length
    if (limited.length <= 3) {
        return limited;
    } else if (limited.length <= 6) {
        return `(${limited.slice(0, 3)}) ${limited.slice(3)}`;
    } else {
        return `(${limited.slice(0, 3)}) ${limited.slice(3, 6)}-${limited.slice(6)}`;
    }
}

/**
 * Strip phone number formatting to get just digits
 */
export function stripPhoneFormatting(value: string): string {
    return value.replace(/\D/g, "");
}

/**
 * Calculate age from date of birth
 */
export function calculateAge(dateOfBirth: string): number {
    const today = new Date();
    const birthDate = new Date(dateOfBirth);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

/**
 * Format date for display (MM/DD/YYYY)
 */
export function formatDateDisplay(date: string): string {
    if (!date) return "";
    const d = new Date(date);
    return d.toLocaleDateString("en-US", {
        month: "2-digit",
        day: "2-digit",
        year: "numeric",
    });
}

/**
 * Get UTM parameters from URL
 */
export function getUTMParams(): Record<string, string> {
    if (typeof window === "undefined") return {};

    const params = new URLSearchParams(window.location.search);
    return {
        utm_source: params.get("utm_source") || "",
        utm_medium: params.get("utm_medium") || "",
        utm_campaign: params.get("utm_campaign") || "",
    };
}

/**
 * Generate a unique lead ID
 */
export function generateLeadId(): string {
    return `lead_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}
