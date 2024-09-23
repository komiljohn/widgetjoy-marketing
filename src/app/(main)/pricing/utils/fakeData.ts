import SourceLinkedInImg from "../images/linkedin.png";
import SourceTwitterImg from "../images/twitter.png";
import UserMaleImg from "../images/user-m.png";
import UserFemaleImg from "../images/user-w.png";

const sample = [
  {
    name: "Olivia Rhye",
    position: "Developer",
    comment:
      "WidgetJoy has completely transformed the way I manage my website. The widgets are incredibly easy to customize, and the intuitive interface makes it accessible for anyone. I couldn't be happier!",
    stars: 5,
    date: "16 June, 2024",
    sourcePic: SourceTwitterImg,
    profilePic: UserFemaleImg,
  },
  {
    name: "Brooklyn Simmons",
    position: "Designer",
    comment:
      "I was looking for a tool to add dynamic content to my site, and WidgetJoy delivered beyond my expectations. The variety of widgets and the simplicity of the setup process are unmatched. Highly recommend it!",
    stars: 5,
    date: "16 June, 2024",
    sourcePic: SourceLinkedInImg,
    profilePic: UserMaleImg,
  },
];

export const testimonials = Array.from({ length: 6 }, (_, i) => ({
  id: i + 1,
  ...(i % 2 === 0 ? sample[0] : sample[1]),
}));

export const accordionData = [
  {
    id: "1",
    question: "Do I need coding skills to use Widgetjoy?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste odit repellat quasi! Reprehenderit debitis beatae rerum nam.",
  },
  {
    id: "2",
    question: "Can I use Widgetjoy on multiple websites?",
    answer:
      "Yes, depending on your plan, you can use Widgetjoy on multiple websites. Our Pro and Enterprise plans offer multi-site support.",
  },
  {
    id: "3",
    question: "Can I cancel my subscription?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste odit repellat quasi! Reprehenderit debitis beatae rerum nam.",
  },
  {
    id: "4",
    question: "Can I turn off my auto-renewal?",
    answer:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio iste odit repellat quasi! Reprehenderit debitis beatae rerum nam.",
  },
];
