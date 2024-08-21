"use client";

import { Building2, LayoutGrid, Settings, Zap } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Key } from "react-aria-components";

import { Select } from "@/components/form/select";
import { Button } from "@/components/ui/button";
import Routes from "@/utils/routes";

import { LogoSvg } from "../../../../public/icons";
import MenuDropdown from "../menu-dropdown";
import { NavItem } from "../nav-item";
import { teamOptions } from "./fakeData";

export default function Header() {
  const [selectedKey, setSelectedKey] = useState<Key>("");

  return (
    <header className="border-b border-border-secondary dark:border-active-dark bg-white dark:bg-bg-primary-dark">
      <div className="container px-4 mx-auto py-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <LogoSvg />
          </Link>
          <div className="flex gap-1">
            <NavItem
              href={Routes.dashboard}
              leftIcon={<LayoutGrid className="text-text-disabled dark:text-tertiary-dark-600" size={20} />}
            >
              Dashboard
            </NavItem>
            <NavItem
              href={Routes.settings}
              leftIcon={<Settings className="text-text-disabled dark:text-tertiary-dark-600" size={20} />}
            >
              Settings
            </NavItem>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button leftIcon={<Zap size={20} />}>Upgrade now</Button>
          <Select
            options={teamOptions}
            icon={<Building2 size={20} />}
            selectedKey={selectedKey}
            onSelectionChange={setSelectedKey}
          />
          <MenuDropdown />
        </div>
      </div>
    </header>
  );
}
