"use client";

import * as React from "react";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/sections/hero";
import { CoverageOptions } from "@/components/sections/coverage-options";
import { LivingBenefits } from "@/components/sections/living-benefits";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Testimonials } from "@/components/sections/testimonials";
import { LeadFormModal } from "@/components/lead-form/lead-form-modal";
import type { LeadSource } from "@/lib/validations";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [leadSource, setLeadSource] = React.useState<LeadSource>("life_insurance");

  const openForm = (source: LeadSource = "life_insurance") => {
    setLeadSource(source);
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen bg-background">
      <Header onGetStarted={() => openForm("life_insurance")} />

      <Hero
        onLifeInsurance={() => openForm("life_insurance")}
        onMortgageProtection={() => openForm("mortgage_protection")}
      />

      <CoverageOptions
        onLifeInsurance={() => openForm("life_insurance")}
        onMortgageProtection={() => openForm("mortgage_protection")}
      />

      <LivingBenefits />

      <HowItWorks />

      <Testimonials onGetStarted={() => openForm("life_insurance")} />

      <Footer />

      <LeadFormModal
        open={isModalOpen}
        onOpenChange={setIsModalOpen}
        leadSource={leadSource}
      />
    </main>
  );
}
