import * as v from "valibot";

import { requiredEmailField, requiredPasswordField } from "@/utils/validationFields";

export const LoginSchema = v.object({
  email: requiredEmailField,
  password: requiredPasswordField,
  "remember-me": v.boolean(),
});

export type LoginFormType = v.InferOutput<typeof LoginSchema>;
