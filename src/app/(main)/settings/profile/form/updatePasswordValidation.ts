import * as v from "valibot";

import { requiredPasswordField, requiredStringField } from "@/utils/validationFields";

export const UpdatePasswordSchema = v.pipe(
  v.object({
    password: requiredStringField("Please enter your current password"),
    new_password: requiredPasswordField,
    confirm_password: requiredStringField("Please confirm your new password"),
  }),
  v.forward(
    v.partialCheck(
      [["new_password"], ["confirm_password"]],
      (input) => input.new_password === input.confirm_password,
      "The two passwords do not match"
    ),
    ["confirm_password"]
  )
);

export type UpdatePasswordFormType = v.InferOutput<typeof UpdatePasswordSchema>;
