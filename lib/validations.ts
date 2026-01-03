import { z } from "zod";

// Calculate age from date string
function calculateAge(dateString: string): number {
    const today = new Date();
    const birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }

    return age;
}

// Individual field schemas
export const hasInsuranceSchema = z.enum(["yes", "no", "unsure"], {
    message: "Please select an option",
});

export const genderSchema = z.enum(["woman", "man"], {
    message: "Please select your gender",
});

export const coverageAmountSchema = z.enum([
    "under_10000",
    "10001_25000",
    "25001_50000",
    "50001_100000",
    "100001_250000",
    "250001_plus",
], {
    message: "Please select a coverage amount",
});

export const dateOfBirthSchema = z.string()
    .min(1, "Date of birth is required")
    .refine((date) => {
        const parsed = new Date(date);
        return !isNaN(parsed.getTime());
    }, "Please enter a valid date")
    .refine((date) => {
        const age = calculateAge(date);
        return age >= 18;
    }, "You must be at least 18 years old")
    .refine((date) => {
        const age = calculateAge(date);
        return age <= 85;
    }, "Age must be 85 or under");

export const tobaccoUseSchema = z.enum(["yes", "no"], {
    message: "Please select an option",
});

export const zipCodeSchema = z.string()
    .min(5, "Zip code must be 5 digits")
    .max(5, "Zip code must be 5 digits")
    .regex(/^\d{5}$/, "Please enter a valid 5-digit zip code");

export const phoneSchema = z.string()
    .min(10, "Phone number must be 10 digits")
    .regex(/^\d{10}$/, "Please enter a valid 10-digit phone number");

export const firstNameSchema = z.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters")
    .regex(/^[a-zA-Z\s\-']+$/, "Name can only contain letters, spaces, hyphens, and apostrophes");

export const emailSchema = z.string()
    .min(1, "Email is required")
    .email("Please enter a valid email address");

// Lead source schema
export const leadSourceSchema = z.enum([
    "life_insurance",
    "mortgage_protection",
    "external",
]);

// Complete lead form schema
export const leadFormSchema = z.object({
    // Form fields
    has_insurance: hasInsuranceSchema,
    gender: genderSchema,
    coverage_amount: coverageAmountSchema,
    date_of_birth: dateOfBirthSchema,
    tobacco_use: tobaccoUseSchema,
    zip_code: zipCodeSchema,
    phone: phoneSchema,
    first_name: firstNameSchema,
    email: emailSchema,

    // Auto-captured fields
    lead_source: leadSourceSchema,
    page_url: z.string().optional(),
    utm_source: z.string().optional(),
    utm_medium: z.string().optional(),
    utm_campaign: z.string().optional(),
});

// Type inference
export type LeadFormData = z.infer<typeof leadFormSchema>;
export type HasInsurance = z.infer<typeof hasInsuranceSchema>;
export type Gender = z.infer<typeof genderSchema>;
export type CoverageAmount = z.infer<typeof coverageAmountSchema>;
export type TobaccoUse = z.infer<typeof tobaccoUseSchema>;
export type LeadSource = z.infer<typeof leadSourceSchema>;

// Coverage amount display labels
export const coverageAmountLabels: Record<CoverageAmount, string> = {
    under_10000: "Under $10,000",
    "10001_25000": "$10,001 - $25,000",
    "25001_50000": "$25,001 - $50,000",
    "50001_100000": "$50,001 - $100,000",
    "100001_250000": "$100,001 - $250,000",
    "250001_plus": "$250,001+",
};
