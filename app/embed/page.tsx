"use client";

import * as React from "react";
import { FormProvider } from "@/components/lead-form/form-context";
import { LeadForm } from "@/components/lead-form/lead-form";
import { Shield } from "lucide-react";

export default function EmbedPage() {
    return (
        <div className="min-h-screen bg-background p-4 flex items-center justify-center">
            <div className="w-full max-w-md bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
                {/* Header */}
                <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 border-b border-border">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-primary-hover flex items-center justify-center shadow-md">
                            <Shield className="w-5 h-5 text-white" />
                        </div>
                        <div>
                            <h1 className="text-xl font-serif font-bold text-foreground">
                                Get Your Free Quote
                            </h1>
                            <p className="text-xs text-muted-foreground">
                                Takes less than 2 minutes
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <div className="p-6">
                    <FormProvider leadSource="external">
                        <LeadForm />
                    </FormProvider>
                </div>
            </div>
        </div>
    );
}
