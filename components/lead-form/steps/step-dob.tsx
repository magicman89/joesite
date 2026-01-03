"use client";

import * as React from "react";
import { useFormContext } from "../form-context";
import { StepWrapper, StepQuestion } from "../step-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowRight } from "lucide-react";
import { dateOfBirthSchema } from "@/lib/validations";

export function StepDob() {
    const { formData, updateField, nextStep } = useFormContext();
    const [error, setError] = React.useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateField("date_of_birth", e.target.value);
        setError(null);
    };

    const handleNext = () => {
        const result = dateOfBirthSchema.safeParse(formData.date_of_birth || "");
        if (!result.success) {
            setError(result.error.issues[0].message);
            return;
        }
        nextStep();
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            e.preventDefault();
            handleNext();
        }
    };

    return (
        <StepWrapper>
            <StepQuestion
                question="What is your date of birth?"
                subtext="We need this to calculate your rate"
            />
            <div className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="dob">Date of Birth</Label>
                    <Input
                        id="dob"
                        type="date"
                        value={formData.date_of_birth || ""}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        error={!!error}
                        max={new Date().toISOString().split("T")[0]}
                        className="text-center text-lg"
                    />
                    {error && (
                        <p className="text-sm text-error">{error}</p>
                    )}
                </div>

                <Button
                    onClick={handleNext}
                    className="w-full"
                    size="lg"
                    disabled={!formData.date_of_birth}
                >
                    Continue
                    <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
            </div>
        </StepWrapper>
    );
}
