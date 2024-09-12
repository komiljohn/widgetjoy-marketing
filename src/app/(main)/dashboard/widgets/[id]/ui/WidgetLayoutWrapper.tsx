"use client";

import { useParams, usePathname } from "next/navigation";
import React, { ReactNode } from "react";

import Routes from "@/utils/routes";

import WidgetBottombarMobile from "./WidgetBottombarMobile";
import WidgetHeader from "./WidgetHeader";
import WidgetHeaderMobile from "./WidgetHeaderMobile";
import WidgetSidebar from "./WidgetSidebar";

export default function WidgetLayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { id } = useParams();

  const isSubmissionsPage =
    pathname === Routes.widget_detail_submission(id as string) || pathname.includes("/faq/content");

  return isSubmissionsPage ? (
    <>
      <WidgetHeader />
      <div className="py-8 xl:px-[112px] md:px-10 px-6">{children}</div>
    </>
  ) : (
    <div className="flex flex-col">
      <WidgetHeader />
      <WidgetHeaderMobile />
      <div className="flex max-sm:flex-col max-sm:justify-between bg-white dark:bg-bg-primary-dark grow overflow-auto min-h-[calc(100dvh-146px)] max-sm:min-h-[calc(100dvh-209px)]">
        <WidgetSidebar />
        <div className="w-full bg-dots flex justify-center items-center grow">{children}</div>
        <WidgetBottombarMobile />
      </div>
    </div>
  );
}
