import React from "react";

import ThemeSwitcher from "@/components/ui/theme-switcher";
import { SimpleText } from "@/components/ui/typography";

export default function ProfilePreferences() {
  return (
    <div>
      <div className="max-w-[864px] mx-auto bg-white dark:bg-bg-primary-dark shadow-xs border border-bg-disabled dark:border-border-dark-primary rounded-lg p-6 mb-6">
        <div className="border-b dark:border-border-dark-primary border-border-secondary pb-5 mb-6">
          <SimpleText color="primary-900" weight="font-semibold" className="text-lg">
            Preferences
          </SimpleText>
          <SimpleText color="tertiary-600" className="text-sm">
            Update general settings.
          </SimpleText>
        </div>
        <div className="flex max-md:flex-col justify-between xl:gap-8 gap-4 sm:min-h-[140px]">
          <div className="max-w-[280px]">
            <SimpleText color="secondary-700" weight="font-semibold" className="text-sm">
              Appearance
            </SimpleText>
            <SimpleText color="tertiary-600" className="text-sm">
              Choose day / night mode or set it as system preference.
            </SimpleText>
          </div>
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
}
