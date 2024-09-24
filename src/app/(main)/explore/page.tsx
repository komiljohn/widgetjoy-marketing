import React from "react";

import ReadyWidgetsCTA from "../ui/ReadyWidgetsCTA";
import ExploreBanner from "./ui/ExploreBanner";
import ExploreWidgets from "./ui/ExploreWidgets";
import NoCodeToolWidget from "./ui/NoCodeToolWidget";

export default function Page() {
  return (
    <main>
      <ExploreBanner />
      <ExploreWidgets />
      <NoCodeToolWidget />
      <ReadyWidgetsCTA />
    </main>
  );
}
