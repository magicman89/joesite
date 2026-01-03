"use client";

import * as React from "react";
import {
    Dialog,
    DialogContent,
    DialogTitle,
} from "@/components/ui/dialog";
import { FormProvider } from "./form-context";
import { LeadForm } from "./lead-form";
import { Shield } from "lucide-react";
import type { LeadSource } from "@/lib/validations";

interface LeadFormModalProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    leadSource: LeadSource;
}

export function LeadFormModal({ open, onOpenChange, leadSource }: LeadFormModalProps) {
    const handleClose = () => {
        onOpenChange(false);
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent className="sm:max-w-md max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center">
                        <Shield className="w-5 h-5 text-white" />
                    </div>
                    <DialogTitle className="text-lg font-serif">
                        Get Your Free Quote
                    </DialogTitle>
                </div>

                {/* Form */}
                <FormProvider leadSource={leadSource}>
                    <LeadForm onClose={handleClose} />
                </FormProvider>
            </DialogContent>
        </Dialog>
    );
}
