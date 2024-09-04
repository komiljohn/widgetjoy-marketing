import { Metadata } from "next";
import React, { ReactNode } from "react";

import WidgetHeader from "./ui/WidgetHeader";
import WidgetSidebar from "./ui/WidgetSidebar";

export const metadata: Metadata = {
  title: "Widgetjoy | Create widget",
  description: "The 'Swiss Army Knife' of Widgets",
};

export default function WidgetLayout({ children }: { children: ReactNode }) {
  return (
    <div className="flex flex-col max-h-[80vh]">
      <WidgetHeader />
      <div className="flex bg-white dark:bg-bg-primary-dark grow overflow-auto min-h-[calc(100dvh-146px)]">
        <WidgetSidebar />
        <div className="w-full bg-dots flex justify-center items-center">{children}</div>
      </div>
    </div>
  );
}
