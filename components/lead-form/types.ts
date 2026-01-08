import type { LeadFormData as ValidatedLeadFormData } from "@/lib/validations";

// Form state is partial because user fills it step by step
export type LeadFormData = Partial<ValidatedLeadFormData>;

export interface FormStep {
    id: number;
    name: string;
    field: keyof LeadFormData;
    autoAdvance: boolean;
}

export const FORM_STEPS: FormStep[] = [
    { id: 1, name: "Insurance", field: "has_insurance", autoAdvance: true },
    { id: 2, name: "Gender", field: "gender", autoAdvance: true },
    { id: 3, name: "Coverage", field: "coverage_amount", autoAdvance: true },
    { id: 4, name: "Payment", field: "mortgage_payment", autoAdvance: true },
    { id: 5, name: "Birthday", field: "date_of_birth", autoAdvance: false },
    { id: 6, name: "Tobacco", field: "tobacco_use", autoAdvance: true },
    { id: 7, name: "Zip Code", field: "zip_code", autoAdvance: false },
    { id: 8, name: "Phone", field: "phone", autoAdvance: false },
    { id: 9, name: "Name", field: "first_name", autoAdvance: false },
    { id: 10, name: "Email", field: "email", autoAdvance: false },
];

export const TOTAL_STEPS = FORM_STEPS.length;

export interface FormContextType {
    formData: LeadFormData;
    currentStep: number;
    isSubmitting: boolean;
    isComplete: boolean;
    error: string | null;
    updateField: <K extends keyof LeadFormData>(field: K, value: LeadFormData[K]) => void;
    nextStep: () => void;
    prevStep: () => void;
    goToStep: (step: number) => void;
    submitForm: () => Promise<void>;
    resetForm: () => void;
}
