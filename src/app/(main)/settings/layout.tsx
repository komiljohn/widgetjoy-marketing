import React, { ReactNode } from "react";

import SettingsHeader from "./ui/SettingsHeader";

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <SettingsHeader />
      {children}
    </div>
  );
}
