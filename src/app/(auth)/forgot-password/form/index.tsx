"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormTextInput } from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import { toastQueue } from "@/providers/ToastProvider";
import Routes from "@/utils/routes";

import LoginCard from "../../login/ui/LoginCard";
import { ForgotPasswordFormType, ForgotPasswordSchema } from "./forgotPasswordValidation";

export default function ForgotPasswordForm() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const methods = useForm<ForgotPasswordFormType>({
    defaultValues: {
      email: "",
    },
    resolver: valibotResolver(ForgotPasswordSchema),
  });

  const onSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
      toastQueue.add({ title: "The link for resetting your password is sent to your email" }, { timeout: 2000 });
    }, 1000);
  };

  return (
    <LoginCard
      title="Recover password"
      subtitle="Just let us know your email address and we will email you a password reset link that will allow you to choose
          a new one."
    >
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)} className="max-sm:px-[13px]">
          <div className="space-y-4">
            <FormTextInput label="Email" placeholder="Enter email address" name="email" />
          </div>
          <Button isLoading={isLoading} type="submit" className="mt-6 w-full">
            Send a link
          </Button>
          <Button variant="secondary" className="mt-4 w-full" onPress={() => router.push(Routes.login)}>
            Back to login
          </Button>
        </form>
      </FormProvider>
    </LoginCard>
  );
}
