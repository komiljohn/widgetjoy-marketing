import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { ThemeProvider } from "@/providers/ThemeProvider";
import { GlobalToastRegion } from "@/providers/ToastProvider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <GlobalToastRegion />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
