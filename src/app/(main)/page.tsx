import React from "react";

import Banner from "./ui/Banner";
import FounderWords from "./ui/FounderWords";
import ReadyWidgetsCTA from "./ui/ReadyWidgetsCTA";
import TrasnformExperience from "./ui/TrasnformExperience";

export default function Page() {
  return (
    <main>
      <Banner />
      <TrasnformExperience />
      <FounderWords />
      <ReadyWidgetsCTA />
    </main>
  );
}
