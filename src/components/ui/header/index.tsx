"use client";

import { Building2, LayoutGrid, Menu, Plus, Settings, User, Zap } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Key } from "react-aria-components";

import { MyListBoxItem, Select } from "@/components/form/select";
import { Button } from "@/components/ui/button";
import { useBottomSheetStore } from "@/store/useBottomSheetStore";
import { Sheets } from "@/utils/constants";
import Routes from "@/utils/routes";

import { LogoSvg } from "../../../../public/icons";
import MenuDropdown from "../menu-dropdown";
import { NavItem } from "../nav-item";
import { SimpleText } from "../typography";
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
            <Link href="/" className="focus-ring rounded-sm">
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
                href={Routes.settings_team}
                leftIcon={<Settings className="text-text-disabled dark:text-tertiary-dark-600" size={20} />}
              >
                Settings
              </NavItem>
            </div>
          </div>
          <Button
            className="lg:hidden"
            variant="link"
            textColor="text-disabled"
            onPress={() => setActiveSheet(Sheets.menu)}
          >
            <Menu className="cursor-pointer" size={20} />
          </Button>
          <div className="flex items-center gap-4 max-lg:hidden">
            {isSettingsPage ? (
              <Link href={Routes.dashboard_new} tabIndex={-1}>
                <Button variant="secondary" leftIcon={<Plus size={20} />}>
                  Add new widget
                </Button>
              </Link>
            ) : (
              <Button leftIcon={<Zap size={20} />}>Upgrade now</Button>
            )}
            <Select
              options={teamOptions}
              icon={<Building2 size={20} className="min-w-5 dark:text-tertiary-dark-600 text-text-disabled" />}
              selectedKey={selectedKey}
              onSelectionChange={setSelectedKey}
              className="w-[216px]"
            >
              {teamOptions.map((item) => (
                <MyListBoxItem key={item.id} textValue={item.username} className="gap-2 flex justify-normal">
                  <User size={20} className="min-w-5 dark:text-tertiary-dark-600 text-text-disabled" />
                  <SimpleText color="primary-900" weight="font-medium" tag="span" className="truncate w-fit">
                    {item.name}
                  </SimpleText>
                  <SimpleText color="tertiary-600" tag="span">
                    {item.username}
                  </SimpleText>
                </MyListBoxItem>
              ))}
            </Select>
            <MenuDropdown />
          </div>
        </div>
      </header>
      <MenuSheet />
    </>
  );
}
