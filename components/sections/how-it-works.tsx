import { ClipboardList, Users, FileCheck, Shield } from "lucide-react";

export function HowItWorks() {
    const steps = [
        {
            number: "01",
            icon: ClipboardList,
            title: "Share Your Needs",
            description:
                "Answer a few simple questions about your coverage needs and health. It only takes 2 minutes.",
        },
        {
            number: "02",
            icon: Users,
            title: "Connect With an Agent",
            description:
                "A licensed agent will reach out within 24 hours to discuss your options—no pressure, just guidance.",
        },
        {
            number: "03",
            icon: FileCheck,
            title: "Get Your Personalized Plan",
            description:
                "Receive a customized quote from top A-rated carriers, tailored to your budget and coverage needs.",
        },
        {
            number: "04",
            icon: Shield,
            title: "Secure Your Coverage",
            description:
                "Complete your application and get approved—often within days. Your family is now protected.",
        },
    ];

    return (
        <section id="how-it-works" className="py-20 lg:py-28 bg-muted">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                        How It <span className="text-primary">Works</span>
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Getting the right coverage is simple. Here&apos;s how we make protecting
                        your family easy.
                    </p>
                </div>

                {/* Steps - Desktop */}
                <div className="hidden lg:block relative">
                    {/* Connection Line */}
                    <div className="absolute top-20 left-0 right-0 h-0.5 bg-border" />
                    <div className="absolute top-20 left-0 w-1/4 h-0.5 bg-gradient-to-r from-primary to-transparent" />

                    <div className="grid grid-cols-4 gap-8">
                        {steps.map((step, index) => (
                            <div key={index} className="relative text-center">
                                {/* Step Number Badge */}
                                <div className="relative z-10 w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary to-primary-hover text-white flex items-center justify-center shadow-lg">
                                    <step.icon className="w-8 h-8" />
                                </div>

                                {/* Content */}
                                <div className="bg-card rounded-2xl p-6 shadow-lg">
                                    <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                        Step {step.number}
                                    </span>
                                    <h3 className="text-lg font-semibold text-foreground mt-2 mb-3">
                                        {step.title}
                                    </h3>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Steps - Mobile */}
                <div className="lg:hidden space-y-6">
                    {steps.map((step, index) => (
                        <div key={index} className="relative flex gap-4">
                            {/* Timeline */}
                            <div className="flex flex-col items-center">
                                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-primary-hover text-white flex items-center justify-center shadow-lg flex-shrink-0">
                                    <step.icon className="w-6 h-6" />
                                </div>
                                {index < steps.length - 1 && (
                                    <div className="w-0.5 h-full bg-border mt-4" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="bg-card rounded-2xl p-5 shadow-lg flex-1 mb-4">
                                <span className="text-xs font-bold text-primary uppercase tracking-wider">
                                    Step {step.number}
                                </span>
                                <h3 className="text-lg font-semibold text-foreground mt-1 mb-2">
                                    {step.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {step.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
