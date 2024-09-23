import React from "react";

import ReadyWidgetsCTA from "../ui/ReadyWidgetsCTA";
import FAQ from "./ui/FAQ";
import PricingBanner from "./ui/PricingBanner";
import PricingPlans from "./ui/PricingPlans";
import Testimonials from "./ui/Testimonials";

export default function Page() {
  return (
    <main>
      <PricingBanner />
      <PricingPlans />
      <FAQ />
      <Testimonials />
      <ReadyWidgetsCTA />
    </main>
  );
}
