import React, { ReactNode } from "react";

import { SimpleText } from "@/components/ui/typography";

import { LogoIconSvg } from "../../../../public/icons";

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
    <div className="bg-white dark:bg-bg-primary-dark rounded-2xl sm:px-8 py-8 px-[11px] login-shadow sm:w-[432px] mx-5">
      <div className="text-center mb-8">
        <LogoIconSvg className="mx-auto mb-4" />
        <SimpleText color="text-login-card-title" className="mb-2 dark:text-primary-dark-900">
          {title}
        </SimpleText>
        <SimpleText color="text-login-card-subtitle" className="dark:text-tertiary-dark-600">
          {subtitle}
        </SimpleText>
      </div>
      {children}
    </div>
  );
}
