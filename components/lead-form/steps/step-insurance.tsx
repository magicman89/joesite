"use client";

import { useFormContext } from "../form-context";
import { StepWrapper, StepQuestion } from "../step-wrapper";
import { SelectionButton } from "@/components/ui/radio-group";

const options = [
    { value: "yes", label: "Yes, I have a mortgage" },
    { value: "no", label: "No, I don't have a mortgage" },
    { value: "unsure", label: "I'm not sure" },
];

export function StepInsurance() {
    const { formData, updateField, nextStep } = useFormContext();

    const handleSelect = (value: "yes" | "no" | "unsure") => {
        updateField("has_insurance", value);
        // Auto-advance after selection
        setTimeout(nextStep, 300);
    };

    return (
        <StepWrapper>
            <StepQuestion
                question="Do you have a mortgage?"
                subtext="This helps us find the best options for you"
            />
            <div className="space-y-3">
                {options.map((option) => (
                    <SelectionButton
                        key={option.value}
                        value={option.value}
                        label={option.label}
                        selected={formData.has_insurance === option.value}
                        onClick={() => handleSelect(option.value as "yes" | "no" | "unsure")}
                    />
                ))}
            </div>
        </StepWrapper>
    );
}
