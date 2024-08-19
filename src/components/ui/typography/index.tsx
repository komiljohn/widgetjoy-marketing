import { createElement, ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type TTextTag = "span" | "p" | "pre";
type TTextWeight = "font-regular" | "font-medium" | "font-semibold" | "font-bold";
type TTextColors = "text-primary-900" | "text-login-card-title" | "text-login-card-subtitle";

interface ISimpleText {
  weight?: TTextWeight;
  className?: string;
  tag?: TTextTag;
  color?: TTextColors;
  children: ReactNode;
}

export function SimpleText({
  tag = "p",
  weight = "font-regular",
  color = "text-primary-900",
  className,
  children,
}: ISimpleText) {
  return createElement(tag, { className: twMerge(weight, color, className) }, children);
}
