import { ChevronRight, CircleHelp, Code, Link2, Trash2, X } from "lucide-react";
import { Menu, MenuItem } from "react-aria-components";

import BottomSheet from "@/components/ui/bottom-sheet";
import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";
import { toastQueue } from "@/providers/ToastProvider";
import { useBottomSheetStore } from "@/store/useBottomSheetStore";
import { useModalStore } from "@/store/useModalStore";
import { Modals, Sheets } from "@/utils/constants";
import Routes from "@/utils/routes";

export default function WidgetActionsSheet() {
  const { activeSheet, setActiveSheet } = useBottomSheetStore();
  const { setActiveModal } = useModalStore();

  const isOpen = activeSheet === Sheets.widget_actions;
  const closeHandler = () => setActiveSheet(null);

  const handleCopy = () => {
    closeHandler();
    navigator.clipboard.writeText(
      '<script src="https://widgetjoy-app.9s2mqv.easypanel.host/widgets/emailList/36b5bc26-82f0-4bc7-8709-0b3051f2f598/embed"></script>'
    );
    toastQueue.add({ title: "Copied" }, { timeout: 2000 });
  };

  const handleDelete = () => {
    toastQueue.add({
      title: "Widget deleted",
      description: "The 'Email audience' widget has been removed. You can no longer access to this widget.",
      type: "warn",
    });
  };

  return (
    <BottomSheet isOpen={isOpen} setIsOpen={closeHandler}>
      <div className="py-6 px-5 bg-white dark:bg-secondary-dark rounded-t-3xl">
        <div className="flex items-center justify-between mb-6">
          <SimpleText className="text-xl leading-[30px]" weight="font-medium">
            Actions
          </SimpleText>
          <Button
            variant="link"
            onPress={closeHandler}
            className="p-[9px] hover:bg-secondary-light dark:hover:bg-secondary-dark"
          >
            <X className="text-tertiary-600" />
          </Button>
        </div>
        <Menu className="outline-none space-y-2">
          <MenuItem
            onAction={() => {
              setActiveModal(Modals.embed_code);
              closeHandler();
            }}
            className="outline-none bg-transparent rounded-md cursor-pointer flex items-center gap-2 py-[11px] relative"
          >
            <Code size={20} className="text-text-disabled dark:text-white" />
            <SimpleText tag="span" color="primary-900" className="mr-2" weight="font-medium">
              Get embed code
            </SimpleText>
            <ChevronRight className="absolute right-0 top-[11px] text-fg-disabled" />
          </MenuItem>
          <MenuItem
            onAction={handleCopy}
            className="outline-none bg-transparent rounded-md cursor-pointer flex items-center gap-2 py-[11px] relative"
          >
            <Link2 size={20} className="text-text-disabled dark:text-white -rotate-45" />
            <SimpleText tag="span" color="primary-900" className="mr-2" weight="font-medium">
              Copy widget link
            </SimpleText>
            <ChevronRight className="absolute right-0 top-[11px] text-fg-disabled" />
          </MenuItem>
          <MenuItem className="outline-none bg-transparent rounded-md cursor-pointer flex items-center gap-2 py-[11px] relative">
            <CircleHelp size={20} className="text-text-disabled dark:text-white" />
            <SimpleText tag="span" color="primary-900" className="mr-2" weight="font-medium">
              Usage guide
            </SimpleText>
            <ChevronRight className="absolute right-0 top-[11px] text-fg-disabled" />
          </MenuItem>
          <MenuItem
            href={Routes.dashboard}
            onAction={() => {
              handleDelete();
              closeHandler();
            }}
            className="outline-none bg-transparent rounded-md cursor-pointer flex items-center gap-2 py-[11px] relative"
          >
            <Trash2 size={20} className="text-text-disabled dark:text-white" />
            <SimpleText tag="span" color="primary-900" className="mr-2" weight="font-medium">
              Delete widget
            </SimpleText>
            <ChevronRight className="absolute right-0 top-[11px] text-fg-disabled" />
          </MenuItem>
        </Menu>
      </div>
    </BottomSheet>
  );
}
