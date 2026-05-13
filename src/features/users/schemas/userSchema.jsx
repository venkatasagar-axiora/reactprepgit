// features/users/schemas/userSchema.js

import { z } from "zod";

export const userSchema = z.object({
  fullName: z
    .string()
    .min(3, "Minimum 3 characters"),

  email: z
    .string()
    .email("Invalid email"),

  role: z
    .string()
    .min(1, "Role is required"),

  age: z
    .number({
      invalid_type_error:
        "Age must be number",
    })
    .min(18, "Minimum age 18"),

  password: z
    .string()
    .min(6, "Minimum 6 characters"),
});