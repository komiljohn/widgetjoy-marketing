import BannerWidgetPreview from "./WidgetsPreview/BannerWidgetPreview";
import ChangelogWidgetPreview from "./WidgetsPreview/ChangelogWidgetPreview";
import ContactWidgetPreview from "./WidgetsPreview/ContactWidgetPreview";
import CookieWidgetPreview from "./WidgetsPreview/CookieWidgetPreview";
import EmailWidgetPreview from "./WidgetsPreview/EmailWidgetPreview";
import ExperienceWidgetPreview from "./WidgetsPreview/ExperienceWidgetPreview";
import FaqWidgetPreview from "./WidgetsPreview/FaqWidgetPreview";
import NpsWidgetPreview from "./WidgetsPreview/NpsWidgetPreview";
import PollWidgetPreview from "./WidgetsPreview/PollWidgetPreview";

export const widgets = [
  {
    id: "contact",
    title: "Contact widget",
    subtitle: "Stay connected with your audience",
    component: <ContactWidgetPreview />,
  },
  {
    id: "feedback",
    title: "Feedback widget",
    subtitle: "Gather valuable insights",
    component: <ExperienceWidgetPreview />,
  },
  {
    id: "email-list",
    title: "Email list widget",
    subtitle: "Grow your audience with email subscribers ",
    component: <EmailWidgetPreview />,
  },
  {
    id: "changelog",
    title: "Changelog widget",
    subtitle: "Keep users informed",
    component: <ChangelogWidgetPreview />,
  },
  {
    id: "poll",
    title: "Poll widget",
    subtitle: "Boost engagement",
    component: <PollWidgetPreview />,
  },
  {
    id: "faq",
    title: "FAQ widget",
    subtitle: "Simplify information sharing",
    component: <FaqWidgetPreview />,
  },
  {
    id: "nps",
    title: "NPS widget",
    subtitle: "Measure customer loyalty",
    component: <NpsWidgetPreview />,
    isCentered: true,
  },
  {
    id: "cookie-consent",
    title: "Cookie Consent widget",
    subtitle: "Ensure privacy compliance and user trust",
    component: <CookieWidgetPreview />,
  },
  {
    id: "banner",
    title: "Banner widget",
    subtitle: "Enhance communication",
    component: <BannerWidgetPreview />,
    isCentered: true,
  },
];
