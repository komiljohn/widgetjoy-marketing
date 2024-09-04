import { CodeSquare, LucideProps, Palette, Settings2, SquareArrowOutUpRight, TextCursorInput } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

import Routes from "@/utils/routes";

import AppearanceTabItem from "./tabItems/AppearanceTabItem";
import CustomCSSTabItem from "./tabItems/CustomCSSTabItem";
import FormDetailsTabItem from "./tabItems/FormDetailsTabItem";
import GeneralTabItem from "./tabItems/GeneralTabItem";

export enum SidebarKeys {
  General = "general",
  Form_Details = "form_details",
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
    id: SidebarKeys.General,
    title: "General",
    icon: Settings2,
    element: GeneralTabItem,
  },
  {
    id: SidebarKeys.Form_Details,
    title: "Form details",
    icon: TextCursorInput,
    element: FormDetailsTabItem,
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
