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
    title: "Contact widget",
    subtitle: "Stay connected with your audience",
    component: <ContactWidgetPreview />,
  },
  {
    title: "Feedback widget",
    subtitle: "Gather valuable insights",
    component: <ExperienceWidgetPreview />,
  },
  {
    title: "Email list widget",
    subtitle: "Grow your audience with email subscribers ",
    component: <EmailWidgetPreview />,
  },
  {
    title: "Changelog widget",
    subtitle: "Keep users informed",
    component: <ChangelogWidgetPreview />,
  },
  {
    title: "Poll widget",
    subtitle: "Boost engagement",
    component: <PollWidgetPreview />,
  },
  {
    title: "FAQ widget",
    subtitle: "Simplify information sharing",
    component: <FaqWidgetPreview />,
  },
  {
    title: "NPS widget",
    subtitle: "Measure customer loyalty",
    component: <NpsWidgetPreview />,
    isCentered: true,
  },
  {
    title: "Cookie Consent widget",
    subtitle: "Ensure privacy compliance and user trust",
    component: <CookieWidgetPreview />,
  },
  {
    title: "Banner widget",
    subtitle: "Enhance communication",
    component: <BannerWidgetPreview />,
    isCentered: true,
  },
];
