"use client";

import { Building2, LayoutGrid, Menu, Plus, Settings, Zap } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Key } from "react-aria-components";

import { Select } from "@/components/form/select";
import { Button } from "@/components/ui/button";
import { useBottomSheetStore } from "@/store/useBottomSheetStore";
import { Sheets } from "@/utils/constants";
import Routes from "@/utils/routes";

import { LogoSvg } from "../../../../public/icons";
import MenuDropdown from "../menu-dropdown";
import { NavItem } from "../nav-item";
import { teamOptions } from "./fakeData";

const MenuSheet = dynamic(() => import("./MenuSheet"), { ssr: false });

export default function Header() {
  const { setActiveSheet } = useBottomSheetStore();
  const [selectedKey, setSelectedKey] = useState<Key>("");

  const pathname = usePathname();

  const isSettingsPage = pathname.includes(Routes.settings);

  return (
    <>
      <header className="border-b border-border-secondary dark:border-active-dark bg-white dark:bg-bg-primary-dark">
        <div className="container px-4 mx-auto py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <LogoSvg />
            </Link>
            <div className="flex gap-1 max-lg:hidden">
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
          <Button className="lg:hidden" variant="link" onPress={() => setActiveSheet(Sheets.menu)}>
            <Menu className="cursor-pointer" size={20} />
          </Button>
          <div className="flex items-center gap-4 max-lg:hidden">
            {isSettingsPage ? (
              <Button variant="secondary" leftIcon={<Plus size={20} />}>
                Add new widget
              </Button>
            ) : (
              <Button leftIcon={<Zap size={20} />}>Upgrade now</Button>
            )}
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
      <MenuSheet />
    </>
  );
}
