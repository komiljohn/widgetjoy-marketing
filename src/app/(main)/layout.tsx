import { Metadata } from "next";

import { GlobalToastRegion } from "@/providers/ToastProvider";

import Footer from "./ui/Footer";
import Header from "./ui/Header";

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
    <div>
      <GlobalToastRegion />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
