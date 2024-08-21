import * as v from "valibot";

import { requiredPasswordField, requiredStringField } from "@/utils/validationFields";

export const LoginSchema = v.object({
  email: v.pipe(requiredStringField("Please enter your email address"), v.email("Please enter valid email")),
  password: requiredPasswordField,
  "remember-me": v.boolean(),
});

export type LoginFormType = v.InferOutput<typeof LoginSchema>;
