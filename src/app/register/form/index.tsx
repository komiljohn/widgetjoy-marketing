"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormPasswordInput } from "@/components/form/password-input";
import { FormTextInput } from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import LinkButton from "@/components/ui/button/link-button";
import { SimpleText } from "@/components/ui/typography";

import { RegisterFormType, RegisterSchema } from "./registerValidation";
import LoginCard from "@/app/login/ui/LoginCard";

export default function RegisterForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<RegisterFormType>({
    defaultValues: {
      full_name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    resolver: valibotResolver(RegisterSchema),
  });

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/login");
    }, 1000);
  };

  return (
    <LoginCard title="Grab your widgets" subtitle="Please fill out the form below for registration">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="max-sm:px-[13px]">
          <div className="space-y-4">
            <FormTextInput label="Full name" placeholder="Enter full name" name="full_name" />
            <FormTextInput label="Email" placeholder="Enter email address" name="email" />
            <FormPasswordInput label="Password" placeholder="Enter your password" name="password" />
            <FormPasswordInput label="Confirm password" placeholder="Confirm your password" name="confirm_password" />
          </div>
          <Button isLoading={isLoading} type="submit" className="mt-4">
            Register
          </Button>
          <div className="flex gap-3 justify-center mt-6">
            <SimpleText className="text-sm dark:text-primary-dark-900" weight="font-medium">
              Already have an account?
            </SimpleText>
            <LinkButton href="login">Login</LinkButton>
          </div>
        </form>
      </FormProvider>
    </LoginCard>
  );
}
