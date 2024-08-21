import "../globals.css";

import type { Metadata } from "next";

import Header from "@/components/ui/header";

export const metadata: Metadata = {
  title: "Widgetjoy",
  description: "The 'Swiss Army Knife' of Widgets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
}
