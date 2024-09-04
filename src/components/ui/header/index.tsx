"use client";

import { LayoutGrid, Menu, Plus, Settings, Zap } from "lucide-react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { Button } from "@/components/ui/button";
import { useBottomSheetStore } from "@/store/useBottomSheetStore";
import { Sheets } from "@/utils/constants";
import Routes from "@/utils/routes";

import { LogoSvg } from "../../../../public/icons";
import { NavItem } from "../nav-item";
import UserMenuDropdown from "./user-menu-dropdown";
import WorkspaceDropdown from "./workspace-dropdown";

const MenuSheet = dynamic(() => import("./MenuSheet"), { ssr: false });

export default function Header() {
  const { setActiveSheet } = useBottomSheetStore();

  const pathname = usePathname();

  const isSettingsPage = pathname.includes(Routes.settings);

  return (
    <>
      <header className="border-b border-border-secondary dark:border-active-dark bg-white dark:bg-bg-primary-dark">
        <div className="md:px-8 px-4 mx-auto py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="focus-ring rounded-sm">
              <LogoSvg />
            </Link>
            <div className="flex gap-1 max-lg:hidden">
              <NavItem
                href={Routes.dashboard}
                lefticon={<LayoutGrid className="text-text-disabled dark:text-tertiary-dark-600" size={20} />}
              >
                Dashboard
              </NavItem>
              <NavItem
                href={Routes.settings}
                lefticon={<Settings className="text-text-disabled dark:text-tertiary-dark-600" size={20} />}
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
                <Button variant="secondary" lefticon={<Plus size={20} />}>
                  Add new widget
                </Button>
              </Link>
            ) : (
              <Button lefticon={<Zap size={20} />}>Upgrade now</Button>
            )}
            <WorkspaceDropdown />
            <UserMenuDropdown />
          </div>
        </div>
      </header>
      <MenuSheet />
    </>
  );
}
