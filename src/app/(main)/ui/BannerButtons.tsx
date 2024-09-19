"use client";

import React from "react";

import ScaleFadeInWhenVisible from "@/components/animation/ScaleFadeInWhenVisible";
import { Button } from "@/components/ui/button";

export default function BannerButtons() {
  return (
    <div className="flex gap-4 justify-center">
      <ScaleFadeInWhenVisible delay={0.3}>
        <Button size="lg">Start creating</Button>
      </ScaleFadeInWhenVisible>
      <ScaleFadeInWhenVisible delay={0.4}>
        <Button size="lg" variant="secondary">
          See all features
        </Button>
      </ScaleFadeInWhenVisible>
    </div>
  );
}
