import { Metadata } from "next";

import LoginForm from "./form";

export const metadata: Metadata = {
  title: "Widgetjoy | Login",
  description: "The 'Swiss Army Knife' of Widgets",
};

export default function Page() {
  return <LoginForm />;
}
