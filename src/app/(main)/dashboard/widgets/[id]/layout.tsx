import { Metadata } from "next";
import React from "react";

import WidgetHeader from "./ui/WidgetHeader";
import WidgetSidebar from "./ui/WidgetSidebar";

export const metadata: Metadata = {
  title: "Widgetjoy | Create widget",
  description: "The 'Swiss Army Knife' of Widgets",
};

export default function WidgetLayout() {
  return (
    <div className="flex flex-col max-h-[80vh]">
      <WidgetHeader />
      <WidgetSidebar />
    </div>
  );
}
