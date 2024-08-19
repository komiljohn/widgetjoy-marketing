import { Metadata } from "next";

import RegisterForm from "./form";
import LoginLayout from "@/layouts/LoginLayout";

export const metadata: Metadata = {
  title: "Widgetjoy | Register",
  description: "The 'Swiss Army Knife' of Widgets",
};

export default function Page() {
  return (
    <LoginLayout>
      <RegisterForm />
    </LoginLayout>
  );
}
