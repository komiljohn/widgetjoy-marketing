import { valibotResolver } from "@hookform/resolvers/valibot";
import type { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import * as v from "valibot";

import { FormPasswordInput } from "@/components/form/password-input";
import { Button } from "@/components/ui/button";
import { toastQueue } from "@/providers/ToastProvider";
import { requiredPasswordField } from "@/utils/validationFields";

const meta: Meta<typeof FormPasswordInput> = {
  component: FormPasswordInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Name",
  },
};

export default meta;

type Props = typeof FormPasswordInput;

const Schema = v.object({
  password: requiredPasswordField,
});

type SchemaFormType = v.InferOutput<typeof Schema>;

export const Validation = (args: Props) => {
  const methods = useForm<SchemaFormType>({
    resolver: valibotResolver(Schema),
    defaultValues: {
      password: "",
    },
  });

  const onSubmit = () => {
    methods.resetField("password");
    toastQueue.add({ title: "Updated" });
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormPasswordInput className="mb-2 w-[300px]" {...args} name="password" />
        <Button type="submit" variant="primary">
          Submit
        </Button>
      </form>
    </FormProvider>
  );
};

Validation.args = {
  isRequired: true,
};
