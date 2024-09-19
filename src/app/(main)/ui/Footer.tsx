"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as v from "valibot";

import { FormTextInput } from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import { NavItem } from "@/components/ui/nav-item";
import { SimpleText } from "@/components/ui/typography";
import { toastQueue } from "@/providers/ToastProvider";
import { requiredEmailField } from "@/utils/validationFields";

import { LogoSvg } from "../../../../public/icons";

export default function Footer() {
  return (
    <footer className="bg-bg-primary-dark px-12">
      <div className="pt-20 pb-12 flex justify-between items-center">
        <LogoSvg className="fill-white" />
        <EmailForm />
      </div>
      <div className="bg-gray-light-800 h-px" />
      <div className="flex gap-8 mt-12 mb-[47px]">
        <NavItem href="#" className="text-fg-disabled text-lg">
          Features
        </NavItem>
        <NavItem href="#" className="text-fg-disabled text-lg">
          Widgets
        </NavItem>
        <NavItem href="#" className="text-fg-disabled text-lg">
          Pricing
        </NavItem>
        <NavItem href="#" className="text-fg-disabled text-lg">
          FAQ
        </NavItem>
        <NavItem href="#" className="text-fg-disabled text-lg">
          Get Help
        </NavItem>
      </div>
      <div className="bg-gray-light-800 h-px" />
      <div className="flex items-center justify-between font-medium pb-8 pt-[47px]">
        <SimpleText color="quaternary-500" className="text-lg">
          &copy; 2024 All rights reserved
        </SimpleText>
        <div className="flex gap-8">
          <NavItem href="#" className="text-text-disabled text-lg">
            Privacy and Policy
          </NavItem>
          <NavItem href="#" className="text-text-disabled text-lg">
            Terms and Conditions
          </NavItem>
        </div>
      </div>
    </footer>
  );
}

const EmailFormSchema = v.object({
  email: requiredEmailField,
});

type EmailFormType = v.InferOutput<typeof EmailFormSchema>;

const EmailForm = () => {
  const [isPending, setIsPending] = useState(false);

  const methods = useForm<EmailFormType>({
    defaultValues: {
      email: "",
    },
    resolver: valibotResolver(EmailFormSchema),
  });

  const onSubmit = () => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      toastQueue.add({ title: "Successfully logged in" }, { timeout: 2000 });
    }, 1000);
  };
  return (
    <FormProvider {...methods}>
      <form className="flex gap-4" onSubmit={methods.handleSubmit(onSubmit)}>
        <FormTextInput
          name="email"
          isDark
          placeholder="Enter email address"
          inputClassName="w-[280px] py-2.5 px-[15px] bg-gray-light-800"
        />
        <Button type="submit" isLoading={isPending} className="py-[11px] px-4">
          Subscribe
        </Button>
      </form>
    </FormProvider>
  );
};
