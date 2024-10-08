import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import ProgressBarProvider from "@/providers/ProgressBarProvider";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en" className="light" suppressHydrationWarning>
      <body className={inter.className}>
        <ProgressBarProvider />
        {children}
      </body>
    </html>
  );
}
