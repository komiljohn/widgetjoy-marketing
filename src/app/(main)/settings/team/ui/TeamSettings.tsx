"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as v from "valibot";

import { FormTextInput } from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";
import { toastQueue } from "@/providers/ToastProvider";
import { requiredStringField } from "@/utils/validationFields";

export const TeamMemberSchema = v.object({
  team_owner: requiredStringField("Please enter your team owner"),
  team_name: requiredStringField("Please enter your team name"),
});

export type TeamMemberFormType = v.InferOutput<typeof TeamMemberSchema>;

export default function TeamSettings() {
  const [isPending, setIsPending] = useState(false);

  const methods = useForm<TeamMemberFormType>({
    defaultValues: {
      team_owner: "",
      team_name: "",
    },
    resolver: valibotResolver(TeamMemberSchema),
  });

  const onSubmit = () => {
    setIsPending(true);
    setTimeout(() => {
      toastQueue.add({ title: "Successfully updated" });
      setIsPending(false);
    }, 1500);
  };

  return (
    <div className="max-w-[864px] mx-auto bg-white dark:bg-bg-primary-dark shadow-xs border border-bg-disabled dark:border-border-dark-primary rounded-lg p-6 mb-6">
      <div className="border-b dark:border-border-dark-primary border-border-secondary pb-5 mb-6">
        <SimpleText color="primary-900" weight="font-semibold" className="text-lg">
          Team settings
        </SimpleText>
        <SimpleText color="tertiary-600" className="text-sm">
          Update general team settings.
        </SimpleText>
      </div>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="flex max-sm:flex-col sm:gap-8 gap-4 pb-6 border-b dark:border-border-dark-primary border-border-secondary">
            <div className="max-w-[280px]">
              <SimpleText color="secondary-700" weight="font-semibold" className="text-sm">
                General
              </SimpleText>
              <SimpleText color="tertiary-600" className="text-sm">
                Change team name (team owner linked your profile automatically).
              </SimpleText>
            </div>
            <div className="grow">
              <FormTextInput
                label="Team owner"
                name="team_owner"
                placeholder="Enter team owner's name"
                className="mb-4"
              />
              <FormTextInput label="Team name" name="team_name" placeholder="Enter team's name" />
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
