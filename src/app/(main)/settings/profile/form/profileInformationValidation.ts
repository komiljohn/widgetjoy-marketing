import * as v from "valibot";

import { requiredEmailField, requiredStringField } from "@/utils/validationFields";

export const ProfileInformationSchema = v.object({
  full_name: requiredStringField("Please enter your full name"),
  email: requiredEmailField,
  country: requiredStringField("Please select your country"),
  timezone: requiredStringField("Please select your timezone"),
});

export type ProfileInformationFormType = v.InferOutput<typeof ProfileInformationSchema>;
