"use client";

import { LayoutGrid, Settings, Zap } from "lucide-react";
import React from "react";

import { Button } from "@/components/ui/button";
import Routes from "@/utils/routes";

import { LogoSvg } from "../../../../public/icons";
import { NavItem } from "../nav-item";

export default function Header() {
  return (
    <header className="border-b border-border-disabled_subtle bg-white">
      <div className="container px-4 mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <LogoSvg />
          <div className="flex gap-1">
            <NavItem href={Routes.dashboard} leftIcon={<LayoutGrid className="text-text-disabled" size={20} />}>
              Dashboard
            </NavItem>
            <NavItem href={Routes.settings} leftIcon={<Settings className="text-text-disabled" size={20} />}>
              Settings
            </NavItem>
          </div>
        </div>
        <div>
          <Button leftIcon={<Zap size={20} />}>Upgrade now</Button>
        </div>
      </div>
    </header>
  );
}
