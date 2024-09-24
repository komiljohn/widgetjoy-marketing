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
import Routes from "@/utils/routes";
import { requiredEmailField } from "@/utils/validationFields";

import { LogoSvg } from "../../../../public/icons";

export default function Footer() {
  return (
    <footer className="bg-bg-primary-dark px-12 max-sm:px-6">
      <div className="pt-20 pb-12 flex justify-between items-center max-md:gap-12 max-md:flex-col">
        <LogoSvg className="fill-white" />
        <EmailForm />
      </div>
      <div className="bg-gray-light-800 h-px" />
      <div className="flex gap-8 mt-12 mb-[47px] max-md:justify-center max-sm:flex-wrap max-sm:items-center max-sm:gap-4 max-sm:mt-6 max-sm:mb-5">
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
      <div className="flex items-center justify-between gap-6 font-medium pb-8 pt-[47px] max-md:flex-col-reverse max-sm:pb-5 max-sm:pt-6">
        <SimpleText color="quaternary-500" className="text-lg">
          &copy; 2024 All rights reserved
        </SimpleText>
        <div className="flex max-md:gap-3 gap-8 max-sm:flex-col max-sm:items-center">
          <NavItem href={Routes.privacy} className="text-text-disabled text-lg">
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
      <form className="flex gap-4 max-sm:flex-col max-sm:w-full" onSubmit={methods.handleSubmit(onSubmit)}>
        <FormTextInput
          isDark
          name="email"
          placeholder="Enter email address"
          inputClassName="w-[280px] py-2.5 px-[15px] bg-gray-light-800 max-sm:w-full"
        />
        <Button type="submit" isLoading={isPending} className="py-[11px] px-4 max-sm:w-full">
          Subscribe
        </Button>
      </form>
    </FormProvider>
  );
};
