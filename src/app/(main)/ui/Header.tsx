"use client";

import Link from "next/link";
import React from "react";

import { Button } from "@/components/ui/button";
import { NavItem } from "@/components/ui/nav-item";
import Routes from "@/utils/routes";

import { LogoSvg } from "../../../../public/icons";

export default function Header() {
  return (
    <header className="border-b border-border-secondary">
      <div className="md:px-8 px-4 mx-auto py-[22px] flex items-center justify-between">
        <div className="flex items-center justify-between gap-[65px]">
          <Link href="/" className="focus-ring rounded-sm">
            <LogoSvg className="fill-brand-logo" />
          </Link>
          <div className="flex gap-8 max-lg:hidden">
            <NavItem href="/">Widgets</NavItem>
            <NavItem href={Routes.pricing}>Pricing</NavItem>
            <NavItem href={Routes.explore}>Explore</NavItem>
          </div>
        </div>
        <div className="flex gap-4">
          <Link href={Routes.login} tabIndex={-1}>
            <Button variant="secondary">Sign in</Button>
          </Link>
          <Button>Get started</Button>
        </div>
      </div>
    </header>
  );
}
