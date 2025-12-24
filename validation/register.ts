import z from "zod";
import { emailSchema, fullNameSchema, passwordSchema } from "./globals";

export const registerSchema = z.object({
  name: fullNameSchema,
  email: emailSchema,
  password: passwordSchema,
});

export type RegisterSchema = z.infer<typeof registerSchema>;
