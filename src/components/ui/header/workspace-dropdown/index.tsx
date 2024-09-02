import { Building2, Check, ChevronDown, Plus, Settings2 } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button, Header, Menu, MenuItem, MenuTrigger, Popover, Section } from "react-aria-components";
import { twMerge } from "tailwind-merge";

import Routes from "@/utils/routes";

import { SimpleText } from "../../typography";
import { workspaces } from "../fakeData";

export default function WorkspaceDropdown() {
  const [selectedWorkspace, setSelectedWorkspace] = useState<string>();

  return (
    <MenuTrigger>
      <Button
        aria-label="Menu"
        className="w-[216px] flex items-center py-[7px] px-[13px] border border-border-primary rounded-md text-text-disabled font-medium dark:border-border-dark-primary justify-between focus-ring"
      >
        <span className="flex gap-2 items-center">
          <Building2 size={20} className="min-w-5 dark:text-tertiary-dark-600 text-text-disabled" />
          <SimpleText
            tag="span"
            className={twMerge(
              "mr-2",
              selectedWorkspace
                ? "text-button-secondary-fg dark:text-secondary-700"
                : "text-text-disabled dark:text-tertiary-dark-600"
            )}
            weight="font-semibold"
          >
            {selectedWorkspace ?? "Workspace"}
          </SimpleText>
        </span>
        <ChevronDown size={20} className="text-tertiary-dark-600" />
      </Button>
      <Popover
        placement="bottom right"
        className="w-[267px] bg-white dark:bg-bg-primary-dark outline-none border border-border-secondary dark:border-border-dark-primary rounded-md px-2 py-[7px] shadow-popup entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out"
      >
        <Menu className="outline-none">
          <Section className="border-b border-border-secondary dark:border-secondary-dark pb-[3px]">
            <Header>
              <SimpleText color="quaternary-500" className="py-3 px-4 text-sm mb-1" weight="font-semibold">
                Manage Team
              </SimpleText>
            </Header>
            <MenuItem className="outline-none bg-transparent rounded-md cursor-pointer focus:bg-disabled focus:dark:bg-active-dark mb-1">
              <Link href={Routes.settings_team} className="flex items-center gap-2 p-4">
                <Settings2 className="text-text-secondary dark:text-white" />
                <SimpleText tag="span" color="primary-900" weight="font-semibold">
                  Manage Team
                </SimpleText>
              </Link>
            </MenuItem>
            <MenuItem className="outline-none bg-transparent rounded-md cursor-pointer focus:bg-disabled focus:dark:bg-active-dark">
              <Link href={`${Routes.settings_team}?invite-modal=true`} className="flex items-center gap-2 p-4">
                <Plus className="text-text-secondary dark:text-white" />
                <SimpleText tag="span" color="primary-900" weight="font-semibold">
                  Create new Team
                </SimpleText>
              </Link>
            </MenuItem>
          </Section>
          <Section className="pt-1">
            <Header>
              <SimpleText color="quaternary-500" className="py-3 px-4 text-sm mb-1" weight="font-semibold">
                Switch Teams
              </SimpleText>
            </Header>
            {workspaces.map((item) => (
              <MenuItem
                key={item.id}
                onAction={() => setSelectedWorkspace(item.name)}
                className="flex items-center justify-between gap-2 p-4 outline-none bg-transparent rounded-md cursor-pointer focus:bg-disabled focus:dark:bg-active-dark mb-1"
              >
                <span className="flex items-center gap-2">
                  <Building2 className="text-text-secondary dark:text-white" />
                  <SimpleText tag="span" color="primary-900" weight="font-semibold">
                    {item.name}
                  </SimpleText>
                </span>
                {item.name === selectedWorkspace && (
                  <Check size={20} className="dark:text-tertiary-dark-600 text-text-disabled min-w-5" />
                )}
              </MenuItem>
            ))}
          </Section>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
