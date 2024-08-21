import { Metadata } from "next";

import LoginLayout from "../layout";
import ForgotPasswordForm from "./form";

export const metadata: Metadata = {
  title: "Widgetjoy | Forgot password",
  description: "The 'Swiss Army Knife' of Widgets",
};

export default function Page() {
  return (
    <LoginLayout>
      <ForgotPasswordForm />
    </LoginLayout>
  );
}
