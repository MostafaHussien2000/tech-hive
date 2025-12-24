"use client";

import { Button } from "@/components/shared/button/button";
import { Info } from "@/components/shared/info/info";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { authClient } from "@/lib/auth-client";
import { loginSchema, LoginSchema } from "@/validation/login";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";

export default function LoginPage() {
  const router = useRouter();
  const [serverError, setServerError] = useState<string | null>(null);

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleFormSubmit = async (data: LoginSchema) => {
    await authClient.signIn.email(
      {
        email: data.email,
        password: data.password,
      },
      {
        onSuccess: () => {
          setServerError(null);
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
          <CardTitle className="text-3xl">Login</CardTitle>
          <CardDescription className="text-sm">
            Login to your account.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleFormSubmit)}>
              <FieldGroup>
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
                  Login
                </Button>
              </FieldGroup>
            </form>
          </Form>
        </CardContent>
        <CardFooter className="flex flex-col gap-y-4">
          {serverError && (
            <Info variant={"error"} title="Login Error">
              {serverError}
            </Info>
          )}
          <p className="text-muted-foreground text-center text-sm">
            Don't have an account?{" "}
            <Link
              className="text-white font-medium underline underline-offset-2"
              href="/auth/register"
            >
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </>
  );
}
