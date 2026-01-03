"use client";

import { Progress } from "@/components/ui/progress";
import { useFormContext } from "./form-context";
import { TOTAL_STEPS } from "./types";

export function ProgressBar() {
    const { currentStep, isComplete } = useFormContext();

    const progressPercentage = isComplete
        ? 100
        : ((currentStep - 1) / TOTAL_STEPS) * 100;

    return (
        <div className="w-full mb-6">
            <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-muted-foreground font-medium">
                    {isComplete ? "Complete!" : `Step ${currentStep} of ${TOTAL_STEPS}`}
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                    {Math.round(progressPercentage)}%
                </span>
            </div>
            <Progress value={progressPercentage} className="h-2" />
        </div>
    );
}
