import React from "react";

import FadeInWhenVisible from "@/components/animation/FadeInWhenVisible";

export default function PrivacyBanner() {
  return (
    <section className="pt-[99px]">
      <div className="mx-auto max-w-[724px] text-center mb-[103px]">
        <FadeInWhenVisible>
          <h1 className="text-bg-primary-dark font-bold text-[60px] leading-[72px] mb-6 tracking-tight">
            Privacy Policy
          </h1>
        </FadeInWhenVisible>
        <FadeInWhenVisible delay={0.1}>
          <h2 className="text-button-secondary-fg text-[20px] leading-[30px] mb-10 max-w-[494px] mx-auto">
            We're committed to protecting your data and ensuring transparency in how we handle your information.
          </h2>
        </FadeInWhenVisible>
      </div>
    </section>
  );
}
