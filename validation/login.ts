import z from "zod";
import { emailSchema, passwordSchema } from "./globals";

export const loginSchema = z.object({
  email: emailSchema,
  password: z.string("Password is required."),
});

export type LoginSchema = z.infer<typeof loginSchema>;
