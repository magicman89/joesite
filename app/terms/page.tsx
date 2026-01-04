"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft } from "lucide-react";

export default function TermsPage() {
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
                        Terms of Service
                    </h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-muted-foreground">
                            <strong>Last Updated:</strong> January 3, 2026
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            1. Acceptance of Terms
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            By accessing and using Try Family Life (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) website
                            and services, you agree to be bound by these Terms of Service. If you do not
                            agree to these terms, please do not use our services.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            2. Services Description
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Try Family Life provides an online platform that connects consumers with
                            licensed insurance agents and A-rated insurance carriers. We are not an
                            insurance company and do not underwrite or issue insurance policies. Our
                            role is to facilitate connections between you and licensed professionals
                            who can assist with your life insurance needs.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            3. No Guarantee of Coverage
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Submitting a quote request through our website does not guarantee approval
                            for life insurance coverage. All coverage decisions are made by the
                            insurance carriers based on their underwriting guidelines. Rates and
                            availability may vary by state and individual circumstances.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            4. User Responsibilities
                        </h2>
                        <p className="text-muted-foreground mb-4">
                            When using our services, you agree to:
                        </p>
                        <ul className="list-disc list-inside text-muted-foreground space-y-2 mb-6">
                            <li>Provide accurate and truthful information in all submissions</li>
                            <li>Be at least 18 years of age</li>
                            <li>Not use our services for any unlawful purpose</li>
                            <li>Consent to being contacted by licensed insurance agents</li>
                        </ul>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            5. Intellectual Property
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            All content on this website, including text, graphics, logos, and images,
                            is the property of Try Family Life or its content suppliers and is protected
                            by copyright and intellectual property laws.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            6. Limitation of Liability
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Try Family Life shall not be liable for any indirect, incidental, special,
                            consequential, or punitive damages resulting from your use of our services.
                            Our maximum liability shall not exceed the amount you paid us for services,
                            if any.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            7. Modifications
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            We reserve the right to modify these Terms of Service at any time. Changes
                            will be effective immediately upon posting. Your continued use of our
                            services constitutes acceptance of the modified terms.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            8. Contact Us
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            If you have any questions about these Terms of Service, please contact us at{" "}
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
