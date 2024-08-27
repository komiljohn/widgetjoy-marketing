"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import React from "react";

export default function ProgressBarProvider() {
  return <ProgressBar height="4px" color="#F02E06" options={{ showSpinner: false }} shallowRouting />;
}
