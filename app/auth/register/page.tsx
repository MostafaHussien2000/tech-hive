"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { registerSchema, RegisterSchema } from "@/validation/register";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@/components/ui/form";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/shared/button/button";
import { authClient } from "@/lib/auth-client";
import { useState } from "react";
import { Info } from "@/components/shared/info/info";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function RegisterPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = async (data: RegisterSchema) => {
    await authClient.signUp.email(
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          setServerError(null);
          toast.success("User registered successfully.");
          router.push("/");
          router.refresh();
        },
        onError: (ctx) => {
          setServerError(ctx.error.message);
        },
      }
    );
  };
  return (
    <>
      <Card className="max-w-[500px] mx-auto mt-30">
        <CardHeader>
          <CardTitle className="text-3xl">Register</CardTitle>
          <CardDescription className="text-sm">
            Create new account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
              <FieldGroup>
                <Controller
                  name="name"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field className="gap-y-1">
                      <FieldLabel>Full Name</FieldLabel>
                      <Input
                        aria-invalid={fieldState.invalid}
                        placeholder="John Doe"
                        {...field}
                      />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="email"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field className="gap-y-1">
                      <FieldLabel>Email</FieldLabel>
                      <Input
                        placeholder="john.doe@example.com"
                        aria-invalid={fieldState.invalid}
                        {...field}
                      />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  name="password"
                  control={form.control}
                  render={({ field, fieldState }) => (
                    <Field className="gap-y-1">
                      <FieldLabel>Password</FieldLabel>
                      <Input
                        placeholder="••••••••"
                        aria-invalid={fieldState.invalid}
                        type="password"
                        {...field}
                      />
                      {fieldState.error && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Button
                  loading={form.formState.isSubmitting}
                  disabled={form.formState.isSubmitting}
                  type="submit"
                >
                  Register
                </Button>
              </FieldGroup>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col gap-y-4">
          {serverError && (
            <Info variant={"error"} title="Registeration Error">
              {serverError}
            </Info>
          )}
          <p className="text-muted-foreground text-center text-sm">
            Already have an account?{" "}
            <Link
              className="text-white font-medium underline underline-offset-2"
              href="/auth/login"
            >
              Login
            </Link>
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
