import * as v from "valibot";

import { requiredPasswordField, requiredStringField } from "@/utils/validationFields";

export const RegisterSchema = v.pipe(
  v.object({
    full_name: requiredStringField("Please enter your full name"),
    email: v.pipe(requiredStringField("Please enter your email address"), v.email("Please enter valid email")),
    password: requiredPasswordField,
    confirm_password: requiredStringField("Please repeat your password"),
  }),
  v.forward(
    v.partialCheck(
      [["password"], ["confirm_password"]],
      (input) => input.password === input.confirm_password,
      "The two passwords do not match"
    ),
    ["confirm_password"]
  )
);

export type RegisterFormType = v.InferOutput<typeof RegisterSchema>;
