"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft } from "lucide-react";

export default function PrivacyPage() {
    return (
        <main className="min-h-screen bg-background">
            <Header />

            <div className="pt-24 pb-16">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary hover:text-primary-hover transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>

                    <h1 className="text-4xl font-serif font-bold text-foreground mb-8">
                        Privacy Policy
                    </h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-muted-foreground">
                            <strong>Last Updated:</strong> January 3, 2026
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            1. Information We Collect
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            When you use Try Family Life&apos;s services, we may collect the following information:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                            <li>Personal information (name, email address, phone number)</li>
                            <li>Date of birth and gender for insurance quoting purposes</li>
                            <li>Zip code for regional coverage information</li>
                            <li>Health-related information (tobacco use, existing coverage)</li>
                            <li>Usage data and analytics</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            2. How We Use Your Information
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            We use the information we collect to:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                            <li>Provide you with life insurance quotes from A-rated carriers</li>
                            <li>Connect you with licensed insurance agents in your area</li>
                            <li>Improve our services and user experience</li>
                            <li>Communicate with you about your quote request</li>
                            <li>Comply with legal and regulatory requirements</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            3. Information Sharing
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            We share your information only with licensed insurance agents and carriers
                            for the purpose of providing you with quotes and coverage options. We do not
                            sell your personal information to third parties for marketing purposes.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            4. Data Security
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            We implement appropriate technical and organizational measures to protect
                            your personal information against unauthorized access, alteration, disclosure,
                            or destruction.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            5. Your Rights
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            You have the right to:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                            <li>Access your personal information</li>
                            <li>Correct inaccurate information</li>
                            <li>Request deletion of your information</li>
                            <li>Opt-out of marketing communications</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            6. Contact Us
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            If you have any questions about this Privacy Policy, please contact us at{" "}
                            <a href="mailto:support@tryfamilylife.com" className="text-primary hover:underline">
                                support@tryfamilylife.com
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    );
}
