"use client";

import * as React from "react";
import { useFormContext } from "./form-context";
import { ProgressBar } from "./progress-bar";
import { StepInsurance } from "./steps/step-insurance";
import { StepGender } from "./steps/step-gender";
import { StepCoverage } from "./steps/step-coverage";
import { StepDob } from "./steps/step-dob";
import { StepTobacco } from "./steps/step-tobacco";
import { StepZipcode } from "./steps/step-zipcode";
import { StepPhone } from "./steps/step-phone";
import { StepName } from "./steps/step-name";
import { StepEmail } from "./steps/step-email";
import { StepConfirmation } from "./steps/step-confirmation";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

interface LeadFormProps {
    onClose?: () => void;
}

export function LeadForm({ onClose }: LeadFormProps) {
    const { currentStep, prevStep, isComplete } = useFormContext();

    const renderStep = () => {
        if (isComplete) {
            return <StepConfirmation onClose={onClose} />;
        }

        switch (currentStep) {
            case 1:
                return <StepInsurance />;
            case 2:
                return <StepGender />;
            case 3:
                return <StepCoverage />;
            case 4:
                return <StepDob />;
            case 5:
                return <StepTobacco />;
            case 6:
                return <StepZipcode />;
            case 7:
                return <StepPhone />;
            case 8:
                return <StepName />;
            case 9:
                return <StepEmail />;
            default:
                return <StepInsurance />;
        }
    };

    return (
        <div className="w-full">
            {/* Progress Bar */}
            <ProgressBar />

            {/* Back Button */}
            {currentStep > 1 && !isComplete && (
                <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevStep}
                    className="mb-4 -ml-2 text-muted-foreground hover:text-foreground"
                >
                    <ArrowLeft className="w-4 h-4 mr-1" />
                    Back
                </Button>
            )}

            {/* Current Step */}
            <div key={isComplete ? "complete" : currentStep} className="min-h-[300px]">
                {renderStep()}
            </div>
        </div>
    );
}
