"use client";

import Image from "next/image";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";

import { FormComboBox } from "@/components/form/combobox";
import { MyListBoxItem } from "@/components/form/select";
import { FormTextInput } from "@/components/form/text-input";
import { SimpleText } from "@/components/ui/typography";

import { countryOptions } from "./fakeData";

export default function ProfileSettings() {
  const methods = useForm();

  return (
    <div className="max-w-[864px] mx-auto bg-white dark:bg-bg-primary-dark shadow-xs border border-bg-disabled dark:border-border-dark-primary rounded-lg p-6 mb-6">
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
          <FormProvider {...methods}>
            <div className="space-y-4">
              <FormTextInput name="full_name" label="Full name" placeholder="Enter your full name" />
              <FormTextInput name="email" label="Email" placeholder="Enter your email" />
              <FormComboBox
                name="country"
                label="Country"
                placeholder="Select your country"
                menuTrigger="manual"
                defaultItems={countryOptions}
              >
                {countryOptions.map((item) => (
                  <MyListBoxItem key={item.id} textValue={item.name} id={item.id} className="gap-2 justify-normal">
                    <Image src={item.url} width={24} height={24} alt="country flag" />
                    <SimpleText color="tertiary-600">{item.name}</SimpleText>
                  </MyListBoxItem>
                ))}
              </FormComboBox>
            </div>
          </FormProvider>
        </div>
      </div>
    </div>
  );
}

// <FormSelect
//   className="w-full"
//   name="timezone"
//   label="Timezone"
//   options={[]}
//   placeholder="Select your timezone"
// />
