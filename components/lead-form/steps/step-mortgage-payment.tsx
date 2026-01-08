"use client";

import { useFormContext } from "../form-context";
import { StepWrapper, StepQuestion } from "../step-wrapper";
import { SelectionButton } from "@/components/ui/radio-group";
import { mortgagePaymentLabels, type MortgagePayment } from "@/lib/validations";

const options: { value: MortgagePayment; label: string }[] = [
    { value: "under_1500", label: mortgagePaymentLabels.under_1500 },
    { value: "1500_2499", label: mortgagePaymentLabels["1500_2499"] },
    { value: "2500_3499", label: mortgagePaymentLabels["2500_3499"] },
    { value: "3500_4999", label: mortgagePaymentLabels["3500_4999"] },
    { value: "5000_plus", label: mortgagePaymentLabels["5000_plus"] },
];

export function StepMortgagePayment() {
    const { formData, updateField, nextStep } = useFormContext();

    const handleSelect = (value: MortgagePayment) => {
        updateField("mortgage_payment", value);
        // Auto-advance after selection
        setTimeout(nextStep, 300);
    };

    return (
        <StepWrapper>
            <StepQuestion
                question="And what is the approximate monthly mortgage payment?"
                subtext="This helps us understand the level of protection required for your family. Please include your principal, interest, taxes, and insurance"
            />
            <div className="flex flex-col gap-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {options.slice(0, 4).map((option) => (
                        <SelectionButton
                            key={option.value}
                            value={option.value}
                            label={option.label}
                            selected={formData.mortgage_payment === option.value}
                            onClick={() => handleSelect(option.value)}
                            className="text-center justify-center"
                        />
                    ))}
                </div>
                {/* Last option full width */}
                {options.slice(4).map((option) => (
                    <SelectionButton
                        key={option.value}
                        value={option.value}
                        label={option.label}
                        selected={formData.mortgage_payment === option.value}
                        onClick={() => handleSelect(option.value)}
                        className="text-center justify-center w-full"
                    />
                ))}
            </div>
        </StepWrapper>
    );
}
