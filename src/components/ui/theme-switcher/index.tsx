"use client";

import { Check } from "lucide-react";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { SimpleText } from "../typography";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      {themes.map((item) => (
        <button
          key={item.key}
          className="border border-border-secondary dark:border-secondary-dark rounded-lg overflow-hidden focus:shadow-button-ring outline-none"
          onClick={() => setTheme(item.key)}
        >
          <div className="w-[157px] h-[104px] relative">
            <Image src={`/images/${item.key}-mode.png`} fill alt="light mode" />
          </div>
          <div className="py-[7px] px-[11px] flex items-center justify-between">
            <SimpleText color="tertiary-600" className="text-sm" weight="font-medium">
              {item.title}
            </SimpleText>
            {item.key === theme && (
              <div className="size-5 rounded-full bg-brand-500 flex items-center justify-center">
                <Check color="white" size={12} />
              </div>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

const themes = [
  { key: "light", title: "Light" },
  { key: "dark", title: "Dark" },
  { key: "system", title: "System" },
];
