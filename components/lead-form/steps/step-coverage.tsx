"use client";

import { useFormContext } from "../form-context";
import { StepWrapper, StepQuestion } from "../step-wrapper";
import { SelectionButton } from "@/components/ui/radio-group";
import { coverageAmountLabels, type CoverageAmount } from "@/lib/validations";

const options: { value: CoverageAmount; label: string }[] = [
    { value: "under_10000", label: coverageAmountLabels.under_10000 },
    { value: "10001_25000", label: coverageAmountLabels["10001_25000"] },
    { value: "25001_50000", label: coverageAmountLabels["25001_50000"] },
    { value: "50001_100000", label: coverageAmountLabels["50001_100000"] },
    { value: "100001_250000", label: coverageAmountLabels["100001_250000"] },
    { value: "250001_plus", label: coverageAmountLabels["250001_plus"] },
];

export function StepCoverage() {
    const { formData, updateField, nextStep } = useFormContext();

    const handleSelect = (value: CoverageAmount) => {
        updateField("coverage_amount", value);
        // Auto-advance after selection
        setTimeout(nextStep, 300);
    };

    return (
        <StepWrapper>
            <StepQuestion
                question="What level of coverage are you looking for?"
                subtext="Choose the amount that best fits your needs"
            />
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {options.map((option) => (
                    <SelectionButton
                        key={option.value}
                        value={option.value}
                        label={option.label}
                        selected={formData.coverage_amount === option.value}
                        onClick={() => handleSelect(option.value)}
                        className="text-center justify-center"
                    />
                ))}
            </div>
        </StepWrapper>
    );
}
