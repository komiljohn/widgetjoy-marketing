import dynamic from "next/dynamic";
import { useRouter, useSearchParams } from "next/navigation";
import { Menu, MenuItem } from "react-aria-components";

import { SimpleText } from "@/components/ui/typography";
import { useBottomSheetStore } from "@/store/useBottomSheetStore";
import { Sheets } from "@/utils/constants";

import { ISidebarItem, sidebarItems } from "./sidebarItems";
const WidgetMobileTabsSheet = dynamic(() => import("./tabItems/WidgetMobileTabsSheet"), { ssr: false });

export default function WidgetBottombarMobile() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { setActiveSheet, setSheetData } = useBottomSheetStore();

  const handleUpdateKey = (item: ISidebarItem) => {
    if (!item.href) {
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", item.id);
      router.push(`?${params.toString()}`);
      setActiveSheet(Sheets.widget_tabs);
      setSheetData(item);
    }
  };

  return (
    <div className="sm:hidden">
      <div>
        <Menu aria-label="Sidebar menu" className="flex justify-between px-5 py-2">
          {sidebarItems.map((item) => (
            <MenuItem
              aria-label={item.title}
              key={item.id}
              href={item.href?.(item.id)}
              onAction={() => handleUpdateKey(item)}
              target={item.target ?? "_self"}
              className="cursor-pointer outline-none flex flex-col justify-center items-center gap-2 text-text-tertiary w-[82px] py-4 z-10 rounded-md relative"
            >
              {<item.icon />}
              <SimpleText color="quaternary-500" className="text-xs leading-[18px]" weight="font-semibold">
                {item.title}
              </SimpleText>
            </MenuItem>
          ))}
        </Menu>
      </div>
      <WidgetMobileTabsSheet />
    </div>
  );
}
