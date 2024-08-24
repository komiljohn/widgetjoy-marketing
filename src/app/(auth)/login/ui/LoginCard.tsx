import React, { ReactNode } from "react";

import { SimpleText } from "@/components/ui/typography";

import { LogoIconSvg } from "../../../../../public/icons";

export default function LoginCard({
  children,
  title,
  subtitle,
}: {
  children: ReactNode;
  title: string;
  subtitle: string;
}) {
  return (
    <div className="bg-white dark:bg-bg-primary-dark rounded-2xl py-8 px-[11px] login-shadow sm:w-[432px]">
      <div className="text-center mb-8">
        <LogoIconSvg className="mx-auto mb-4" />
        <SimpleText color="primary-900" className="mb-2" weight="font-medium">
          {title}
        </SimpleText>
        <SimpleText color="quaternary-500">{subtitle}</SimpleText>
      </div>
      {children}
    </div>
  );
}
