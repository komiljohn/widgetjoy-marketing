import React from "react";

import ReadyWidgetsCTA from "../ui/ReadyWidgetsCTA";
import PrivacyBanner from "./ui/PrivacyBanner";
import PrivacyContent from "./ui/PrivacyContent";

export default function Page() {
  return (
    <main className="px-4">
      <PrivacyBanner />
      <PrivacyContent />
      <ReadyWidgetsCTA />
    </main>
  );
}
