import { CircleHelp, EllipsisVertical, Link2, Trash2 } from "lucide-react";
import React from "react";
import { Menu, MenuItem, MenuTrigger, Popover } from "react-aria-components";

import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";
import { toastQueue } from "@/providers/ToastProvider";
import Routes from "@/utils/routes";

export default function WidgetDetailsDropdown() {
  const handleDelete = () => {
    toastQueue.add({
      title: "Widget deleted",
      description: "The 'Email audience' widget has been removed. You can no longer access to this widget.",
      type: "warn",
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(
      '<script src="https://widgetjoy-app.9s2mqv.easypanel.host/widgets/emailList/36b5bc26-82f0-4bc7-8709-0b3051f2f598/embed"></script>'
    );
    toastQueue.add({ title: "Copied to clipboard" }, { timeout: 1000 });
  };

  return (
    <MenuTrigger>
      <Button variant="secondary" aria-label="Menu" isIcon>
        <EllipsisVertical size={20} />
      </Button>
      <Popover
        placement="bottom right"
        className="w-[231px] bg-white dark:bg-bg-primary-dark outline-none border border-border-secondary dark:border-border-dark-primary rounded-md shadow-popup entering:animate-in entering:fade-in exiting:animate-out exiting:fade-out"
      >
        <Menu className="outline-none">
          <MenuItem
            onAction={handleCopy}
            className="outline-none bg-transparent rounded-md cursor-pointer focus:bg-disabled focus:dark:bg-active-dark flex items-center gap-2 py-2.5 px-[13px]"
          >
            <Link2 size={20} className="text-text-disabled dark:text-white -rotate-45" />
            <SimpleText tag="span" color="primary-900" className="mr-2" weight="font-semibold">
              Copy widget link
            </SimpleText>
          </MenuItem>
          <MenuItem className="outline-none bg-transparent rounded-md cursor-pointer focus:bg-disabled focus:dark:bg-active-dark flex items-center gap-2 py-2.5 px-[13px]">
            <CircleHelp size={20} className="text-text-disabled dark:text-white" />
            <SimpleText tag="span" color="primary-900" className="mr-2" weight="font-semibold">
              Usage guide
            </SimpleText>
          </MenuItem>
          <MenuItem
            href={Routes.dashboard}
            onAction={handleDelete}
            className="outline-none bg-transparent rounded-md cursor-pointer focus:bg-disabled focus:dark:bg-active-dark flex items-center gap-2 py-2.5 px-[13px]"
          >
            <Trash2 size={20} className="text-text-disabled dark:text-white" />
            <SimpleText tag="span" color="primary-900" className="mr-2" weight="font-semibold">
              Delete widget
            </SimpleText>
          </MenuItem>
        </Menu>
      </Popover>
    </MenuTrigger>
  );
}
