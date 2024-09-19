import * as v from "valibot";

import { requiredStringField } from "@/utils/validationFields";

export const ForgotPasswordSchema = v.object({
  email: v.pipe(requiredStringField("Please enter your email address"), v.email("Please enter valid email")),
});

export type ForgotPasswordFormType = v.InferOutput<typeof ForgotPasswordSchema>;
