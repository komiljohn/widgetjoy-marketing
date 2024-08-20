import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

import MainLayout from "@/layouts/MainLayout";
import ToastProvider from "@/providers/ToastProvider";

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
    <html lang="en">
      <body className={inter.className}>
        <ToastProvider />
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
