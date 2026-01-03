"use client";

import { useFormContext } from "../form-context";
import { StepWrapper } from "../step-wrapper";
import { Button } from "@/components/ui/button";
import { CheckCircle, Phone, Shield } from "lucide-react";

interface StepConfirmationProps {
    onClose?: () => void;
}

export function StepConfirmation({ onClose }: StepConfirmationProps) {
    const { formData } = useFormContext();

    const isLifeInsurance = formData.lead_source === "life_insurance";

    const headline = isLifeInsurance
        ? "Your quote request has been received!"
        : "Your mortgage protection request is in!";

    const message = isLifeInsurance
        ? "A licensed agent will call you within 24 hours to discuss your family's protection options and find the best coverage for your needs."
        : "A licensed agent will call you within 24 hours to help make sure your home stays in your family with the right mortgage protection plan.";

    return (
        <StepWrapper>
            <div className="text-center py-6">
                {/* Success Icon */}
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-success/10 flex items-center justify-center">
                    <CheckCircle className="w-10 h-10 text-success checkmark-animate" />
                </div>

                {/* Headline */}
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                    {headline}
                </h3>

                {/* Message */}
                <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                    {message}
                </p>

                {/* What's Next */}
                <div className="bg-muted rounded-xl p-6 mb-8 text-left">
                    <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                        <Phone className="w-5 h-5 text-primary" />
                        What happens next?
                    </h4>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                1
                            </div>
                            <span>
                                A licensed agent will review your information and prepare
                                personalized options
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                2
                            </div>
                            <span>
                                They&apos;ll call you within 24 hours to discuss your coverage needs
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                                3
                            </div>
                            <span>
                                Get your personalized quote—no pressure, just expert guidance
                            </span>
                        </li>
                    </ul>
                </div>

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                    <Shield className="w-4 h-4 text-primary" />
                    <span>Your information is secure and will never be sold</span>
                </div>

                {/* Close Button */}
                <Button onClick={onClose} variant="outline" size="lg">
                    Done
                </Button>
            </div>
        </StepWrapper>
    );
}
