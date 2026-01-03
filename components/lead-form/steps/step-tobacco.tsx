"use client";

import { useFormContext } from "../form-context";
import { StepWrapper, StepQuestion } from "../step-wrapper";
import { SelectionButton } from "@/components/ui/radio-group";

const options = [
    { value: "no", label: "No, I don't use tobacco" },
    { value: "yes", label: "Yes, I use tobacco or nicotine" },
];

export function StepTobacco() {
    const { formData, updateField, nextStep } = useFormContext();

    const handleSelect = (value: "yes" | "no") => {
        updateField("tobacco_use", value);
        // Auto-advance after selection
        setTimeout(nextStep, 300);
    };

    return (
        <StepWrapper>
            <StepQuestion
                question="Do you use any tobacco or nicotine products?"
                subtext="This includes cigarettes, vaping, chewing tobacco, etc."
            />
            <div className="space-y-3">
                {options.map((option) => (
                    <SelectionButton
                        key={option.value}
                        value={option.value}
                        label={option.label}
                        selected={formData.tobacco_use === option.value}
                        onClick={() => handleSelect(option.value as "yes" | "no")}
                    />
                ))}
            </div>
        </StepWrapper>
    );
}
