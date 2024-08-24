import { createElement, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TTextTag = "span" | "p" | "pre";
type TTextWeight = "font-regular" | "font-medium" | "font-semibold" | "font-bold";
interface ISimpleText {
  weight?: TTextWeight;
  className?: string;
  tag?: TTextTag;
  color?: ColorTypes;
  children: ReactNode;
}

type ColorTypes = "primary-900" | "quaternary-500" | "tertiary-600" | "secondary-700";

function getColorVariant(color: ColorTypes) {
  switch (color) {
    case "primary-900":
      return "text-primary-900 dark:text-primary-dark-900";
    case "quaternary-500":
      return "text-text-disabled dark:text-tertiary-dark-600";
    case "tertiary-600":
      return "text-tertiary-600 dark:text-tertiary-dark-600";
    case "secondary-700":
      return "text-button-secondary-fg dark:text-secondary-700";
  }
}

export function SimpleText({
  tag = "p",
  weight = "font-regular",
  color = "primary-900",
  className,
  children,
}: ISimpleText) {
  const colorClass = getColorVariant(color);
  return createElement(tag, { className: twMerge(weight, colorClass, className) }, children);
}
