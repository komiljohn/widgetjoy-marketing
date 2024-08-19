import { Metadata } from "next";

import LoginLayout from "@/layouts/LoginLayout";
import ForgotPasswordForm from "./form";

export const metadata: Metadata = {
  title: "Widgetjoy | Login",
  description: "The 'Swiss Army Knife' of Widgets",
};

export default function Page() {
  return (
    <LoginLayout>
      <ForgotPasswordForm />
    </LoginLayout>
  );
}
