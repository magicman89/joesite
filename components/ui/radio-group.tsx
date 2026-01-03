"use client";

import * as React from "react";
import * as RadioGroupPrimitive from "@radix-ui/react-radio-group";
import { Circle, Check } from "lucide-react";
import { cn } from "@/lib/utils";

const RadioGroup = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Root>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Root
            className={cn("grid gap-3", className)}
            {...props}
            ref={ref}
        />
    );
});
RadioGroup.displayName = RadioGroupPrimitive.Root.displayName;

const RadioGroupItem = React.forwardRef<
    React.ElementRef<typeof RadioGroupPrimitive.Item>,
    React.ComponentPropsWithoutRef<typeof RadioGroupPrimitive.Item>
>(({ className, ...props }, ref) => {
    return (
        <RadioGroupPrimitive.Item
            ref={ref}
            className={cn(
                "aspect-square h-5 w-5 rounded-full border-2 border-muted-foreground text-primary ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:border-primary",
                className
            )}
            {...props}
        >
            <RadioGroupPrimitive.Indicator className="flex items-center justify-center">
                <Circle className="h-2.5 w-2.5 fill-primary text-primary" />
            </RadioGroupPrimitive.Indicator>
        </RadioGroupPrimitive.Item>
    );
});
RadioGroupItem.displayName = RadioGroupPrimitive.Item.displayName;

// Custom styled radio button for form selections
interface SelectionButtonProps {
    value: string;
    label: string;
    selected?: boolean;
    onClick?: () => void;
    className?: string;
}

const SelectionButton = React.forwardRef<HTMLButtonElement, SelectionButtonProps>(
    ({ value, label, selected, onClick, className }, ref) => {
        return (
            <button
                ref={ref}
                type="button"
                onClick={onClick}
                className={cn(
                    "w-full px-6 py-4 rounded-lg text-left transition-all duration-200 font-medium flex items-center justify-between",
                    selected
                        ? "bg-primary text-white shadow-lg"
                        : "bg-card border-2 border-border text-foreground hover:border-primary hover:bg-primary-light dark:hover:bg-primary/20",
                    "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
                    className
                )}
                data-value={value}
            >
                <span>{label}</span>
                <span
                    className={cn(
                        "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all duration-200",
                        selected
                            ? "bg-white dark:bg-transparent border-white"
                            : "border-muted-foreground"
                    )}
                >
                    {selected && <Check className="w-4 h-4 text-primary checkmark-animate" />}
                </span>
            </button>
        );
    }
);
SelectionButton.displayName = "SelectionButton";

export { RadioGroup, RadioGroupItem, SelectionButton };
