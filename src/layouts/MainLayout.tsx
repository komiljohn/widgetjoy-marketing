import React, { ReactNode } from "react";

import Header from "@/components/ui/header";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
