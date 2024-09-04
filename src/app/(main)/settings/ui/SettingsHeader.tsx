"use client";

import React from "react";

import { NavItem } from "@/components/ui/nav-item";
import Routes from "@/utils/routes";

export default function SettingsHeader() {
  return (
    <div className="border-b border-border-secondary py-3 bg-white dark:bg-bg-primary-dark dark:border-border-dark-primary">
      <div className="mx-auto md:px-8 px-4 flex gap-1">
        <NavItem href={Routes.settings_team}>Team settings</NavItem>
        <NavItem href={Routes.settings_billing}>Billing</NavItem>
        <NavItem href={Routes.settings_profile}>Profile</NavItem>
      </div>
    </div>
  );
}
