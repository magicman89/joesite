import { Heart, Activity, Clock, Gift, ArrowRight } from "lucide-react";

export function LivingBenefits() {
    const benefits = [
        {
            icon: Heart,
            title: "Critical Illness",
            description:
                "Access a portion of your death benefit if diagnosed with a covered critical illness like heart attack, stroke, or cancer.",
            color: "bg-red-500/10 text-red-500",
        },
        {
            icon: Activity,
            title: "Chronic Illness",
            description:
                "Receive funds if you're unable to perform daily living activities, helping cover long-term care costs.",
            color: "bg-blue-500/10 text-blue-500",
        },
        {
            icon: Clock,
            title: "Terminal Illness",
            description:
                "Access your benefit early if diagnosed with a terminal illness, allowing you to focus on what matters most.",
            color: "bg-purple-500/10 text-purple-500",
        },
        {
            icon: Gift,
            title: "Included Free",
            description:
                "Living benefits are included with your policy at no additional cost—protecting you while you're still alive.",
            color: "bg-primary/10 text-primary",
        },
    ];

    return (
        <section id="benefits" className="py-20 lg:py-28 bg-background">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
                    {/* Left Content */}
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                            <Heart className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">
                                More Than Traditional Coverage
                            </span>
                        </div>

                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                            What Are <span className="text-primary">Living Benefits?</span>
                        </h2>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            Unlike traditional life insurance that only pays out after death,
                            policies with living benefits let you access a portion of your
                            coverage while you&apos;re still alive—when you need it most.
                        </p>

                        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                            If you experience a qualifying critical, chronic, or terminal
                            illness, you can use these funds for medical bills, living expenses,
                            or anything else—<strong className="text-foreground">no restrictions</strong>.
                        </p>

                        <div className="flex items-center gap-2 text-primary font-medium">
                            <span>Learn more about how it works</span>
                            <ArrowRight className="w-4 h-4" />
                        </div>
                    </div>

                    {/* Right Content - Benefits Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {benefits.map((benefit, index) => (
                            <div
                                key={index}
                                className="bg-card rounded-2xl p-6 shadow-lg card-hover"
                            >
                                <div
                                    className={`w-14 h-14 rounded-xl ${benefit.color} flex items-center justify-center mb-4`}
                                >
                                    <benefit.icon className="w-7 h-7" />
                                </div>
                                <h3 className="text-lg font-semibold text-foreground mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-muted-foreground leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
