"use client";

import { useFormContext } from "../form-context";
import { StepWrapper, StepQuestion } from "../step-wrapper";
import { SelectionButton } from "@/components/ui/radio-group";

const options = [
    { value: "woman", label: "Woman" },
    { value: "man", label: "Man" },
];

export function StepGender() {
    const { formData, updateField, nextStep } = useFormContext();

    const handleSelect = (value: "woman" | "man") => {
        updateField("gender", value);
        // Auto-advance after selection
        setTimeout(nextStep, 300);
    };

    return (
        <StepWrapper>
            <StepQuestion
                question="Excellent, and are you a man or a woman?"
            />
            <div className="space-y-3">
                {options.map((option) => (
                    <SelectionButton
                        key={option.value}
                        value={option.value}
                        label={option.label}
                        selected={formData.gender === option.value}
                        onClick={() => handleSelect(option.value as "woman" | "man")}
                    />
                ))}
            </div>
        </StepWrapper>
    );
}
