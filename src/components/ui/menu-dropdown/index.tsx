import { ChevronDown, CircleUserRound, LogOut } from "lucide-react";
import React from "react";
import { Button, Menu, MenuItem, MenuTrigger, Popover } from "react-aria-components";

import { SimpleText } from "../typography";

export default function MenuDropdown() {
  return (
    <MenuTrigger>
      <Button aria-label="Menu" className="flex items-center outline-none focus-within:shadow-button-ring rounded-md">
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
            onAction={() => {}}
            className="px-3 py-2 flex items-center outline-none focus-within:shadow-button-ring rounded-md cursor-pointer"
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
