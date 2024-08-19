import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "selector",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "login-card-title": "#121212",
        "login-card-subtitle": "#9C9FA8",
        "border-error": "#FDA29B",
        "ring-error-shadow-xs": "#F044383D",
        "text-disabled": "#667085",
        "primary-900": "#101828",
        "primary-dark-900": "#F5F5F6",
        "border-primary": "#D0D5DD",
        "brand-500": "#FF4F18",
        "brand-600": "#F02E06",
        "secondary-light": "#F9F9F9",
        "secondary-dark": "#161B26",
        disabled: "#F9FAFB",
        "border-disabled_subtle": "#EAECF0",
        "bg-disabled": "#F2F4F7",
        "fg-disabled": "#98A2B3",
        "tertiary-600": "#475467",
        "tertiary-dark-600": "#94969C",
        "bg-primary-dark": "#0C111D",
        "border-dark-primary": "#333741",
        "border-brand": "#FFA170",
        "button-secondary-fg": "#344054",
        "button-secondary-bg_hover": "#F9FAFB",
        "error-primary": "#D92D20",
        "fg-success-primary": "#079455",
      },
      boxShadow: {
        input: "0px 2px 2px 0px #E2E2EC33",
        xs: "0px 1px 2px 0px #1018280D",
        "button-ring": "0px 0px 0px 4px #FF4F183D",
      },
      backgroundImage: {
        "login-light-bg": "url(/icons/login-light-bg.svg)",
        "login-dark-bg": "url(/icons/login-dark-bg.svg)",
      },
    },
  },
  plugins: [],
};
export default config;
