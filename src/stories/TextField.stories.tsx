import { valibotResolver } from "@hookform/resolvers/valibot";
import type { Meta } from "@storybook/react";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import * as v from "valibot";

import { FormTextInput } from "@/components/form/text-input";
import { Button } from "@/components/ui/button";
import { requiredStringField } from "@/utils/validationFields";

const meta: Meta<typeof FormTextInput> = {
  component: FormTextInput,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  args: {
    label: "Name",
  },
};

export default meta;

type Props = typeof FormTextInput;

const Schema = v.object({
  test_input: requiredStringField("Required field"),
});

type SchemaFormType = v.InferOutput<typeof Schema>;

export const Validation = (args: Props) => {
  const methods = useForm<SchemaFormType>({
    resolver: valibotResolver(Schema),
    defaultValues: {
      test_input: "",
    },
  });

  const onSubmit = () => {
    methods.resetField("test_input");
    toast.success("Updated");
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormTextInput className="mb-2" {...args} name="test_input" />
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
