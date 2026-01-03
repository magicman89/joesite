import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-xl text-base font-semibold ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    {
        variants: {
            variant: {
                default:
                    "bg-gradient-to-r from-primary to-primary-hover text-white shadow-lg hover:shadow-xl hover:-translate-y-0.5",
                secondary:
                    "bg-secondary text-white hover:bg-secondary-light shadow-md hover:shadow-lg hover:-translate-y-0.5",
                outline:
                    "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
                ghost:
                    "hover:bg-muted hover:text-foreground",
                link:
                    "text-primary underline-offset-4 hover:underline",
                white:
                    "bg-white dark:bg-card text-secondary dark:text-foreground shadow-md hover:shadow-lg hover:-translate-y-0.5",
            },
            size: {
                default: "h-12 px-8 py-3",
                sm: "h-10 rounded-lg px-4 text-sm",
                lg: "h-14 rounded-xl px-10 py-4 text-lg",
                xl: "h-16 rounded-xl px-12 py-5 text-xl",
                icon: "h-10 w-10",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
