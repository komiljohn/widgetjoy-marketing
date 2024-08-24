"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="grid grid-cols-3 gap-4">
      <div
        role="button"
        className="border border-border-secondary dark:border-secondary-dark rounded-lg py-[7px] px-[11px]"
      >
        <button onClick={() => setTheme("light")}>Light Mode</button>
      </div>
      <div
        role="button"
        className="border border-border-secondary dark:border-secondary-dark rounded-lg py-[7px] px-[11px]"
      >
        <button onClick={() => setTheme("dark")}>Dark Mode</button>
      </div>
      <div
        role="button"
        className="border border-border-secondary dark:border-secondary-dark rounded-lg py-[7px] px-[11px]"
      >
        <button onClick={() => setTheme("system")}>System</button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
