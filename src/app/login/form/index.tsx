"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { FormCheckbox } from "@/components/form/checkbox";
import { FormPasswordInput } from "@/components/form/password-input";
import { FormTextInput } from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import LinkButton from "@/components/ui/button/link-button";
import { SimpleText } from "@/components/ui/typography";

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
      toast.success("Successfully logged in", { duration: 2000 });
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
              <LinkButton href="forgot-password">Forgot password</LinkButton>
            </div>
          </div>
          <Button isLoading={isLoading} type="submit" className="mt-6">
            Login
          </Button>
          <div className="flex gap-3 justify-center mt-4">
            <SimpleText className="text-sm dark:text-primary-dark-900" weight="font-medium">
              Don't have an account?
            </SimpleText>
            <LinkButton href="register">Register</LinkButton>
          </div>
        </form>
      </FormProvider>
    </LoginCard>
  );
}
