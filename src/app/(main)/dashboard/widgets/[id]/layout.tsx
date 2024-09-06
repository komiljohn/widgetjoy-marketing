import { Metadata } from "next";
import React, { ReactNode } from "react";

import WidgetLayoutWrapper from "./ui/WidgetLayoutWrapper";

export const metadata: Metadata = {
  title: "Widgetjoy | Create widget",
  description: "The 'Swiss Army Knife' of Widgets",
};

export default function WidgetLayout({ children }: { children: ReactNode }) {
  return <WidgetLayoutWrapper>{children}</WidgetLayoutWrapper>;
}
