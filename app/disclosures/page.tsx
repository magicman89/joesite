"use client";

import Link from "next/link";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ArrowLeft } from "lucide-react";

export default function DisclosuresPage() {
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
                        Disclosures
                    </h1>

                    <div className="prose prose-lg dark:prose-invert max-w-none">
                        <p className="text-muted-foreground">
                            <strong>Last Updated:</strong> January 3, 2026
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            About Try Family Life
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Try Family Life is a lead generation service that connects consumers with
                            licensed insurance agents and A-rated insurance carriers. We are not an
                            insurance company, agency, or broker. We do not sell, solicit, or negotiate
                            insurance policies.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            Insurance Products
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Life insurance products described on this website are offered through
                            independent licensed insurance agents. Coverage, rates, terms, and conditions
                            vary by carrier, product, and state. Not all products are available in all
                            states.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            Quote Estimates
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Any quotes or rate estimates provided through our service are preliminary
                            estimates only and are subject to change based on the full underwriting
                            process. Final rates will be determined by the insurance carrier based on
                            a complete application and may require a medical exam or health questionnaire.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            Living Benefits
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Living benefits, accelerated death benefits, and other policy riders are
                            subject to specific terms, conditions, and limitations as defined by each
                            insurance carrier. Not all policies include these benefits, and accessing
                            them may reduce the death benefit payable to beneficiaries.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            No Medical Exam Policies
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            &quot;No medical exam&quot; or simplified issue policies may have higher premiums,
                            lower coverage limits, or longer contestability periods compared to fully
                            underwritten policies. Approval is still subject to health questions and
                            underwriting guidelines.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            A-Rated Carriers
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            When we reference &quot;A-rated carriers,&quot; we are referring to insurance companies
                            that have received an A rating or higher from one or more major rating
                            agencies such as AM Best, Standard & Poor&apos;s, Moody&apos;s, or Fitch. These ratings
                            are subject to change and should be verified at the time of application.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            Consent to Contact
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            By submitting your information through our website, you consent to be
                            contacted by Try Family Life and our network of licensed insurance agents
                            via phone, email, or text message. You may opt-out of communications at
                            any time.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            State Disclosures
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            Some states have specific disclosure requirements. Please consult with a
                            licensed insurance agent in your state for state-specific information and
                            requirements.
                        </p>

                        <h2 className="text-2xl font-semibold text-foreground mt-8 mb-4">
                            Contact Information
                        </h2>
                        <p className="text-muted-foreground mb-6">
                            For questions about these disclosures or our services, please contact us at{" "}
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
