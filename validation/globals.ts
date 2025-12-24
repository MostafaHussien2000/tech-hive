import z from "zod";

// Global full name validation schema
export const fullNameSchema = z
  .string()
  .min(3, "Name must be at least 3 characters long")
  .max(30, "Name must be at most 30 characters long");

// Global email validation schema
export const emailSchema = z.string().email("You must provide a valida email.");

// Global password validation schema
export const passwordSchema = z
  .string()
  .min(8, "Password must be at least 8 characters long")
  .regex(/[a-z]/, "Password must contain at least one lowercase letter")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/\d/, "Password must contain at least one number")
  .regex(
    /[^A-Za-z0-9]/,
    "Password must contain at least one special character"
  );
