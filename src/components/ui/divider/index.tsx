import React from "react";
import { twMerge } from "tailwind-merge";

export default function Divider({ className }: { className?: string }) {
  return <div className={twMerge("h-px w-full dark:bg-border-dark-primary bg-border-secondary", className)} />;
}
