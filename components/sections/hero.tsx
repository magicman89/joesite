"use client";

import { Button } from "@/components/ui/button";
import { Shield, Star, Users, Award, Heart, CheckCircle } from "lucide-react";

interface HeroProps {
    onLifeInsurance?: () => void;
    onMortgageProtection?: () => void;
}

export function Hero({ onLifeInsurance, onMortgageProtection }: HeroProps) {
    return (
        <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary-light opacity-50" />

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-light border border-primary/20 mb-6">
                            <Shield className="w-4 h-4 text-primary" />
                            <span className="text-sm font-medium text-primary">
                                Protection That Works For You
                            </span>
                        </div>

                        {/* Headline */}
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
                            Life Insurance That{" "}
                            <span className="text-primary">Protects Your Future</span> Today
                        </h1>

                        {/* Subheadline */}
                        <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                            Don&apos;t just leave your family protected after you&apos;re gone—get
                            coverage that works for you while you&apos;re still here. Living benefits
                            included at no extra cost.
                        </p>

                        {/* Trust Stats */}
                        <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-10">
                            <div className="flex items-center gap-2">
                                <Users className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium">
                                    <span className="text-foreground font-bold">10,000+</span>{" "}
                                    <span className="text-muted-foreground">Families Helped</span>
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium">
                                    <span className="text-foreground font-bold">A-Rated</span>{" "}
                                    <span className="text-muted-foreground">Carriers</span>
                                </span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5 text-primary" />
                                <span className="text-sm font-medium">
                                    <span className="text-foreground font-bold">4.9/5</span>{" "}
                                    <span className="text-muted-foreground">Rating</span>
                                </span>
                            </div>
                        </div>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                            <Button size="lg" onClick={onLifeInsurance} className="group">
                                <Heart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                                Life Insurance Protection
                            </Button>
                            <Button size="lg" variant="outline" onClick={onMortgageProtection}>
                                Mortgage Protection
                            </Button>
                        </div>

                        {/* Quick Benefits */}
                        <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                                <CheckCircle className="w-4 h-4 text-success" />
                                No medical exam options
                            </span>
                            <span className="flex items-center gap-1">
                                <CheckCircle className="w-4 h-4 text-success" />
                                Coverage in days
                            </span>
                            <span className="flex items-center gap-1">
                                <CheckCircle className="w-4 h-4 text-success" />
                                Rates from $15/mo
                            </span>
                        </div>
                    </div>

                    {/* Right Content - Image/Visual */}
                    <div className="relative hidden lg:block">
                        <div className="relative">
                            {/* Main Image Container */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                                <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                                    {/* Placeholder for family image */}
                                    <div className="text-center p-8">
                                        <div className="w-32 h-32 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-6">
                                            <Shield className="w-16 h-16 text-primary" />
                                        </div>
                                        <p className="text-lg font-medium text-muted-foreground">
                                            Protecting What Matters Most
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Floating Badge */}
                            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-xl p-4 flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                                    <CheckCircle className="w-6 h-6 text-success" />
                                </div>
                                <div>
                                    <p className="font-bold text-foreground">$500K+</p>
                                    <p className="text-sm text-muted-foreground">Average Coverage</p>
                                </div>
                            </div>

                            {/* Floating Stars */}
                            <div className="absolute -top-4 -right-4 bg-card rounded-2xl shadow-xl p-4">
                                <div className="flex items-center gap-1 mb-1">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>
                                <p className="text-sm font-medium text-foreground">Excellent Service</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
