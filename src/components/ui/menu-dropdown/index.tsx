import { ChevronDown, CircleUserRound, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
import { Button, Menu, MenuItem, MenuTrigger, Popover } from "react-aria-components";

import Routes from "@/utils/routes";

import { SimpleText } from "../typography";

export default function MenuDropdown() {
  const router = useRouter();

  return (
    <MenuTrigger>
      <Button aria-label="Menu" className="flex items-center outline-none focus:shadow-button-ring rounded-md">
        <CircleUserRound size={40} />
        <SimpleText className="ml-3 mr-2 text-button-secondary-fg dark:text-secondary-700" weight="font-semibold">
          User
        </SimpleText>
        <ChevronDown size={20} />
      </Button>
      <Popover
        placement="bottom right"
        className="w-[200px] bg-white dark:bg-active-dark outline-none border border-border-secondary dark:border-border-dark-primary rounded-md py-1.5 px-1.5 shadow-popup"
      >
        <Menu className="outline-none">
          <MenuItem
            onAction={() => router.push(Routes.login)}
            className="px-3 py-2 flex items-center outline-none focus:shadow-[0_0_0_4px_#98A2B324] rounded-md cursor-pointer"
          >
            <LogOut size={20} color="red" />
            <SimpleText
              className="ml-3 mr-2 text-button-secondary-fg dark:text-primary-dark-900"
              weight="font-semibold"
            >
              Logout
            </SimpleText>
          </MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
