"use client";

import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormPasswordInput } from "@/components/form/password-input";
import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";

export default function ProfileUpdatePassword() {
  const methods = useForm();

  return (
    <div className="max-w-[864px] mx-auto bg-white dark:bg-bg-primary-dark shadow-xs border border-bg-disabled dark:border-border-dark-primary rounded-lg p-6 mb-6">
      <div className="flex max-md:flex-col justify-between md:gap-8 gap-4 border-b dark:border-border-dark-primary border-border-secondary pb-8">
        <div className="max-w-[280px]">
          <SimpleText color="secondary-700" weight="font-semibold" className="text-sm">
            Update Password
          </SimpleText>
          <SimpleText color="tertiary-600" className="text-sm mb-3">
            Ensure your account is using a long, random password to stay secure.
          </SimpleText>
        </div>
        <div className="grow">
          <FormProvider {...methods}>
            <div className="space-y-4">
              <FormPasswordInput
                name="current_password"
                label="Current password"
                placeholder="Enter your current password"
              />
              <FormPasswordInput name="password" label="New password" placeholder="Enter your new password" />
              <FormPasswordInput
                name="confirm_password"
                label="Confirm password"
                placeholder="Confirm your new password"
              />
            </div>
          </FormProvider>
        </div>
      </div>
      <div className="pt-5 flex justify-end">
        <Button isLoading={false} type="submit">
          Save changes
        </Button>
      </div>
    </div>
  );
}
