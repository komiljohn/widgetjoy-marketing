import { ChevronDown, LogOut } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Button, Menu, MenuItem, MenuTrigger, Popover } from "react-aria-components";

import Routes from "@/utils/routes";

import { SimpleText } from "../typography";

export default function MenuDropdown() {
  const router = useRouter();

  return (
    <MenuTrigger>
      <Button aria-label="Menu" className="flex items-center active-ring rounded-md focus-ring">
        <Image src="/images/avatar.png" width={40} height={40} alt="user" />
        <SimpleText className="ml-3 mr-2 text-button-secondary-fg dark:text-secondary-700" weight="font-semibold">
          User
        </SimpleText>
        <ChevronDown size={20} className="text-tertiary-dark-600" />
      </Button>
      <Popover
        placement="bottom right"
        className="w-[150px] bg-white dark:bg-bg-primary-dark outline-none border border-border-secondary dark:border-border-dark-primary rounded-md p-1.5 shadow-popup entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out"
      >
        <Menu className="outline-none">
          <MenuItem
            onAction={() => router.push(Routes.login)}
            className="px-3 py-2 flex items-center outline-none rounded-md cursor-pointer focus:bg-disabled focus:dark:bg-active-dark"
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
