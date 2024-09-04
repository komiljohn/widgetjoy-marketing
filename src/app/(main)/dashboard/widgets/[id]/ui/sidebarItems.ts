import { CodeSquare, LucideProps, Palette, SquareArrowOutUpRight, TextCursorInput } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

import Routes from "@/utils/routes";

import AppearanceTabItem from "./tabItems/AppearanceTabItem";
import CustomCSSTabItem from "./tabItems/CustomCSSTabItem";
import DetailsTabItem from "./tabItems/DetailsTabItem";

export enum SidebarKeys {
  Details = "details",
  Appearance = "appearance",
  Custom_CSS = "custom_css",
  Preview = "preview",
}

export interface ISidebarItem {
  id: SidebarKeys;
  title: string;
  icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
  element?: () => JSX.Element;
  href?: (id: string) => string;
  target?: "_blank";
}

export const sidebarItems: ISidebarItem[] = [
  {
    id: SidebarKeys.Details,
    title: "Details",
    icon: TextCursorInput,
    element: DetailsTabItem,
  },
  {
    id: SidebarKeys.Appearance,
    title: "Appearance",
    icon: Palette,
    element: AppearanceTabItem,
  },
  {
    id: SidebarKeys.Custom_CSS,
    title: "Custom CSS",
    icon: CodeSquare,
    element: CustomCSSTabItem,
  },
  {
    id: SidebarKeys.Preview,
    title: "Preview",
    icon: SquareArrowOutUpRight,
    href: (id: string) => Routes.widget_preview(id),
    target: "_blank",
  },
];
