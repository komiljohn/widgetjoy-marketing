"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormCheckbox } from "@/components/form/checkbox";
import { FormPasswordInput } from "@/components/form/password-input";
import { FormTextInput } from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import MyLink from "@/components/ui/button/my-link";
import { SimpleText } from "@/components/ui/typography";
import { toastQueue } from "@/providers/ToastProvider";
import Routes from "@/utils/routes";

import LoginCard from "../ui/LoginCard";
import { LoginFormType, LoginSchema } from "./loginValidation";

export default function LoginForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<LoginFormType>({
    defaultValues: {
      email: "",
      password: "",
      "remember-me": false,
    },
    resolver: valibotResolver(LoginSchema),
  });

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
      toastQueue.add({ title: "Successfully logged in" }, { timeout: 2000 });
    }, 1000);
  };

  return (
    <LoginCard title="Welcome back" subtitle="Please enter your account details to login">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="max-sm:px-[13px]">
          <div className="space-y-4">
            <FormTextInput label="Email" placeholder="Enter email address" name="email" />
            <FormPasswordInput label="Password" placeholder="Enter password" name="password" />
            <div className="flex justify-between items-center">
              <FormCheckbox name="remember-me" label="Remember me" />
              <MyLink href={Routes.forgot_password}>Forgot password</MyLink>
            </div>
          </div>
          <Button isLoading={isLoading} type="submit" className="mt-6 w-full">
            Login
          </Button>
          <div className="flex gap-3 justify-center mt-4">
            <SimpleText className="text-sm" color="primary-900" weight="font-medium">
              Don't have an account?
            </SimpleText>
            <MyLink href={Routes.register}>Register</MyLink>
          </div>
        </form>
      </FormProvider>
    </LoginCard>
  );
}
