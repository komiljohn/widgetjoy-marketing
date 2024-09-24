"use client";

import React from "react";

import ScaleFadeInWhenVisible from "@/components/animation/ScaleFadeInWhenVisible";
import { Button } from "@/components/ui/button";

export default function ReadyWidgetsButtons() {
  return (
    <div className="flex gap-4 justify-center max-sm:flex-col max-md:gap-3">
      <ScaleFadeInWhenVisible delay={0.3}>
        <Button className="max-sm:w-full" size="lg">
          Start creating
        </Button>
      </ScaleFadeInWhenVisible>
      <ScaleFadeInWhenVisible delay={0.4}>
        <Button className="max-sm:w-full" variant="secondary" size="lg">
          Discover widgets
        </Button>
      </ScaleFadeInWhenVisible>
    </div>
  );
}
