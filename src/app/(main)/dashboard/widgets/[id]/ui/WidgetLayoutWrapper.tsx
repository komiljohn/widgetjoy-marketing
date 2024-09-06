"use client";

import { useParams, usePathname } from "next/navigation";
import React, { ReactNode } from "react";

import Routes from "@/utils/routes";

import WidgetHeader from "./WidgetHeader";
import WidgetSidebar from "./WidgetSidebar";

export default function WidgetLayoutWrapper({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const { id } = useParams();

  const isSubmissionsPage = pathname === Routes.widget_detail_submission(id as string);

  return isSubmissionsPage ? (
    <>
      <WidgetHeader />
      <div className="py-8 px-[112px]">{children}</div>
    </>
  ) : (
    <div className="flex flex-col">
      <WidgetHeader />
      <div className="flex bg-white dark:bg-bg-primary-dark grow overflow-auto min-h-[calc(100dvh-146px)]">
        <WidgetSidebar />
        <div className="w-full bg-dots flex justify-center items-center">{children}</div>
      </div>
    </div>
  );
}
