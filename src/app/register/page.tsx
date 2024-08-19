import { Metadata } from "next";

import LoginLayout from "@/layouts/LoginLayout";

import RegisterForm from "./form";

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
