import { Metadata } from "next";

import ForgotPasswordForm from "./form";

export const metadata: Metadata = {
  title: "Widgetjoy | Forgot password",
  description: "The 'Swiss Army Knife' of Widgets",
};

export default function Page() {
  return <ForgotPasswordForm />;
}
