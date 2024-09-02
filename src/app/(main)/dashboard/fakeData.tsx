import BannerWidgetPreview from "./new/ui/BannerWidgetPreview";
import ChangelogWidgetPreview from "./new/ui/ChangelogWidgetPreview";
import ContactWidgetPreview from "./new/ui/ContactWidgetPreview";
import CookieWidgetPreview from "./new/ui/CookieWidgetPreview";
import EmailWidgetPreview from "./new/ui/EmailWidgetPreview";
import ExperienceWidgetPreview from "./new/ui/ExperienceWidgetPreview";
import FaqWidgetPreview from "./new/ui/FaqWidgetPreview";
import NpsWidgetPreview from "./new/ui/NpsWidgetPreview";
import PollWidgetPreview from "./new/ui/PollWidgetPreview";

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
