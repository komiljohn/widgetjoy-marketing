import React from "react";

import Banner from "./ui/Banner";
import FounderWords from "./ui/FounderWords";
import ReadyWidgetsCTA from "./ui/ReadyWidgetsCTA";
import SaveHours from "./ui/SaveHours";
import TrasnformExperience from "./ui/TrasnformExperience";

export default function Page() {
  return (
    <main>
      <Banner />
      <TrasnformExperience />
      <FounderWords />
      <SaveHours />
      <ReadyWidgetsCTA />
    </main>
  );
}
