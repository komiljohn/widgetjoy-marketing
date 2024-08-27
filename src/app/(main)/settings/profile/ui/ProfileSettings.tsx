"use client";

import { valibotResolver } from "@hookform/resolvers/valibot";
import Image from "next/image";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormComboBox } from "@/components/form/combobox";
import { MyListBoxItem } from "@/components/form/list-box";
import { FormTextInput } from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import { SimpleText } from "@/components/ui/typography";
import { toastQueue } from "@/providers/ToastProvider";

import { ProfileInformationFormType, ProfileInformationSchema } from "../form/profileInformationValidation";
import { countryOptions, timeZones } from "./fakeData";

export default function ProfileSettings() {
  const [isPending, setIsPending] = useState(false);

  const methods = useForm<ProfileInformationFormType>({
    defaultValues: {
      full_name: "",
      email: "",
      country: "",
      timezone: "",
    },
    resolver: valibotResolver(ProfileInformationSchema),
  });

  const onSubmit = () => {
    setIsPending(true);
    setTimeout(() => {
      setIsPending(false);
      toastQueue.add({ title: "Profile information updated" }, { timeout: 2000 });
      methods.reset({});
    }, 1000);
  };

  return (
    <div className="max-w-[864px] mx-auto bg-white dark:bg-bg-primary-dark shadow-xs border border-bg-disabled dark:border-border-dark-primary rounded-lg p-6 mb-6">
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <div className="border-b dark:border-border-dark-primary border-border-secondary pb-5 mb-6">
            <SimpleText color="primary-900" weight="font-semibold" className="text-lg">
              Profile
            </SimpleText>
            <SimpleText color="tertiary-600" className="text-sm">
              Update profile details and see active sessions.
            </SimpleText>
          </div>
          <div className="flex max-md:flex-col justify-between md:gap-8 gap-4">
            <div className="max-w-[280px]">
              <SimpleText color="secondary-700" weight="font-semibold" className="text-sm">
                Profile Information
              </SimpleText>
              <SimpleText color="tertiary-600" className="text-sm">
                Update your account's profile information and email address.
              </SimpleText>
            </div>
            <div className="grow">
              <div className="space-y-4">
                <FormTextInput name="full_name" label="Full name" placeholder="Enter your full name" />
                <FormTextInput name="email" label="Email" placeholder="Enter your email" />
                <FormComboBox
                  name="country"
                  label="County"
                  placeholder="Select your country"
                  defaultItems={countryOptions}
                >
                  {(item) => (
                    <MyListBoxItem textValue={item.name} id={item.name} className="gap-2 justify-between">
                      <span className="flex gap-2">
                        <Image src={item.url} width={24} height={24} alt="country flag" />
                        <SimpleText tag="span" color="tertiary-600">
                          {item.name}
                        </SimpleText>
                      </span>
                    </MyListBoxItem>
                  )}
                </FormComboBox>
                <FormComboBox
                  name="timezone"
                  label="Timezone"
                  placeholder="Select your timezone"
                  defaultItems={timeZones}
                >
                  {(item) => (
                    <MyListBoxItem textValue={item.name} id={item.name} className="gap-2 justify-between">
                      {item.name}
                    </MyListBoxItem>
                  )}
                </FormComboBox>
              </div>
            </div>
          </div>
          <div className="pt-5 flex justify-end mt-6 border-t dark:border-border-dark-primary border-border-secondary">
            <Button isLoading={isPending} type="submit">
              Save changes
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
}
