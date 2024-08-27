"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormPasswordInput } from "@/components/form/password-input";
import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";
import { toastQueue } from "@/providers/ToastProvider";

import { UpdatePasswordFormType, UpdatePasswordSchema } from "../form/updatePasswordValidation";

export default function ProfileUpdatePassword() {
  const [isPending, setIsPending] = useState(false);

  const methods = useForm<UpdatePasswordFormType>({
    defaultValues: {
      password: "",
      new_password: "",
      confirm_password: "",
    },
    resolver: valibotResolver(UpdatePasswordSchema),
  });

  const onSubmit = () => {
    setIsPending(true);
    setTimeout(() => {
      methods.reset({});
      setIsPending(false);
      toastQueue.add({ title: "Your password updated successfully" }, { timeout: 2000 });
    }, 1000);
  };

  return (
    <div className="max-w-[864px] mx-auto bg-white dark:bg-bg-primary-dark shadow-xs border border-bg-disabled dark:border-border-dark-primary rounded-lg p-6 mb-6">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex max-md:flex-col justify-between md:gap-8 gap-4 border-b dark:border-border-dark-primary border-border-secondary pb-8">
            <div className="max-w-[280px]">
              <SimpleText color="secondary-700" weight="font-semibold" className="text-sm">
                Update Password
              </SimpleText>
              <SimpleText color="tertiary-600" className="text-sm">
                Ensure your account is using a long, random password to stay secure.
              </SimpleText>
            </div>
            <div className="grow">
              <div className="space-y-4">
                <FormPasswordInput name="password" label="Current password" placeholder="Enter your current password" />
                <FormPasswordInput name="new_password" label="New password" placeholder="Enter your new password" />
                <FormPasswordInput
                  name="confirm_password"
                  label="Confirm password"
                  placeholder="Confirm your new password"
                />
              </div>
            </div>
          </div>
          <div className="pt-5 flex justify-end">
            <Button isLoading={isPending} type="submit">
              Save changes
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
