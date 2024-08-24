import * as v from "valibot";

export const requiredStringField = (msg: string) => v.pipe(v.string(), v.trim(), v.nonEmpty(msg));

export const requiredEmailField = v.pipe(
  requiredStringField("Please enter your email address"),
  v.email("Please enter valid email")
);

export const requiredPasswordField = v.pipe(
  requiredStringField("Please enter your password"),
  v.minLength(
    6,
    "At least 6 characters long and include at least one uppercase letter, one lowercase letter, one number"
  ),
  v.check(
    (value) => /^[a-zA-Z0-9#!@$%^&*]*$/.test(value),
    "Use only these special characters: #, !, @, $, %, ^, &, *."
  ),
  v.check((value) => value.trim() === value, "Password cannot contain leading or trailing spaces."),
  v.check((value) => !/\s/.test(value), "Password cannot contain spaces."),
  v.check((value) => /[A-Z]/.test(value), "Password must include at least one uppercase letter."),
  v.check((value) => /[a-z]/.test(value), "Password must include at least one lowercase letter."),
  v.check((value) => /\d/.test(value), "Password must include at least one number."),
  v.check((value) => /^[a-zA-Z0-9#!@$%^&*]*$/.test(value), "Use only these special characters: #, !, @, $, %, ^, &, *.")
);
