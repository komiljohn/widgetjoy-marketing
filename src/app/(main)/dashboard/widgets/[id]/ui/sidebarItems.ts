import { CodeSquare, Palette, Settings2, SquareArrowOutUpRight, TextCursorInput } from "lucide-react";

import AppearanceTabItem from "./tabItems/AppearanceTabItem";
import CustomCSSTabItem from "./tabItems/CustomCSSTabItem";
import FormDetailsTabItem from "./tabItems/FormDetailsTabItem";
import GeneralTabItem from "./tabItems/GeneralTabItem";
import PreviewTabItem from "./tabItems/PreviewTabItem";

export const sidebarItems = [
  {
    id: "general",
    title: "General",
    icon: Settings2,
    element: GeneralTabItem,
  },
  {
    id: "form_details",
    title: "Form details",
    icon: TextCursorInput,
    element: FormDetailsTabItem,
  },
  {
    id: "appearance",
    title: "Appearance",
    icon: Palette,
    element: AppearanceTabItem,
  },
  {
    id: "custom_css",
    title: "Custom CSS",
    icon: CodeSquare,
    element: CustomCSSTabItem,
  },
  {
    id: "preview",
    title: "Preview",
    icon: SquareArrowOutUpRight,
    element: PreviewTabItem,
  },
];
