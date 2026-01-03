"use client";

import * as React from "react";
import { useFormContext } from "../form-context";
import { StepWrapper, StepQuestion } from "../step-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, Loader2 } from "lucide-react";
import { emailSchema } from "@/lib/validations";

export function StepEmail() {
    const { formData, updateField, submitForm, isSubmitting, error: formError } = useFormContext();
    const [error, setError] = React.useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateField("email", e.target.value);
        setError(null);
    };

    const handleSubmit = async () => {
        const result = emailSchema.safeParse(formData.email || "");
        if (!result.success) {
            setError(result.error.issues[0].message);
            return;
        }
        await submitForm();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleSubmit();
        }
    };

    const isValid = formData.email && formData.email.includes("@");
    const displayError = error || formError;

    return (
        <StepWrapper>
            <StepQuestion
                question="What is your email address?"
                subtext="We'll send your quote details here"
            />
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                        <Input
                            id="email"
                            type="email"
                            inputMode="email"
                            placeholder="you@example.com"
                            value={formData.email || ""}
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                            error={!!displayError}
                            className="pl-12 text-lg"
                            autoComplete="email"
                        />
                    </div>
                    {displayError && (
                        <p className="text-sm text-error">{displayError}</p>
                    )}
                </div>

                <Button
                    onClick={handleSubmit}
                    className="w-full"
                    size="lg"
                    disabled={!isValid || isSubmitting}
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                            Submitting...
                        </>
                    ) : (
                        "Get My Free Quote"
                    )}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                    By submitting, you agree to receive calls and texts about insurance
                    products at the number provided. Consent is not a condition of purchase.
                </p>
            </div>
        </StepWrapper>
    );
}
