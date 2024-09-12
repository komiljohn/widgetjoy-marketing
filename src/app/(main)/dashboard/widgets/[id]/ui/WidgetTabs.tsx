import { useParams, usePathname } from "next/navigation";
import React from "react";
import { twMerge } from "tailwind-merge";

import { Tab, TabList, Tabs } from "@/components/ui/tabs";
import { SimpleText } from "@/components/ui/typography";
import Routes from "@/utils/routes";

export default function WidgetTabs() {
  const pathname = usePathname();
  const { id } = useParams();

  const isCustomizePage = pathname === Routes.widget_detail_customize(id as string);
  const isSubmissionsPage = pathname === Routes.widget_detail_submission(id as string);
  const showContentTab = pathname.includes("/widgets/faq");
  const isContentPage = pathname === Routes.widget_detail_content(id as string);

  return (
    <Tabs>
      <TabList
        aria-label="Input settings"
        className="flex items-center gap-1 text-sm font-semibold bg-disabled dark:bg-bg-primary-dark border border-border-secondary dark:border-active-dark p-[3px] rounded-lg"
      >
        <Tab
          id="customize"
          href={Routes.widget_detail_customize(id as string)}
          className={twMerge(
            "py-1.5 px-3 focus-ring rounded-md",
            isCustomizePage && "bg-white dark:bg-secondary-dark shadow-sm"
          )}
        >
          <SimpleText color="secondary-700">Customize</SimpleText>
        </Tab>
        <Tab
          href={
            showContentTab ? Routes.widget_detail_content(id as string) : Routes.widget_detail_submission(id as string)
          }
          className={twMerge(
            "py-1.5 px-3 focus-ring rounded-md",
            (isSubmissionsPage || isContentPage) && "bg-white dark:bg-secondary-dark shadow-sm"
          )}
          id="submissions"
        >
          {showContentTab ? "Content" : "Submissions"}
        </Tab>
      </TabList>
    </Tabs>
  );
}
