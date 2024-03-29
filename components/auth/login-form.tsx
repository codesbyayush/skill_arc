"use client";

import { useTransition, useState } from "react";
import * as z from "zod";

import { LoginSchema } from "@/schemas";
import CardWrapper from "./card-wrapper";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import FormError from "../form-error";
import FormSuccess from "../form-success";
import { login } from "@/actions/auth/login";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackurl") || "";
  const urlError =
    searchParams.get("error") === "OAuthAccountNotLinked"
      ? "Email already in use with different provider!"
      : "";

  const [showTwoFactor, setShowTwoFactor] = useState(false);
  const [error, setError] = useState<string | undefined>("");
  const [success, setSuccess] = useState<string | undefined>("");

  const [isPending, startTransition] = useTransition();
  const form = useForm<z.infer<typeof LoginSchema>>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
      code: undefined,
    },
  });

  const onSubmit = (values: z.infer<typeof LoginSchema>) => {
    setError("");
    setSuccess("");
    startTransition(() => {
      login(values, callbackUrl)
        .then((res) => {
          if (res?.error) {
            form.reset();
            setError(res.error);
          }
          if (res?.success) {
            form.reset();
            setSuccess(res.success);
          }
          if (res?.twoFactor) {
            setShowTwoFactor(true);
          }
        })
        .catch(() => setError("Something went wrong!"));
    });
  };

  return (
    <CardWrapper
      backButtonHref="/auth/register"
      backButtonLabel="Create a new account"
      headerLabel="Two-Factor Authentication"
      showSocial={!showTwoFactor}
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            {showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="code"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Code</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="123456"
                          type="text"
                          disabled={isPending}
                          className="border dark:border-white/20"
                        />
                      </FormControl>
                      <FormMessage className="dark:text-red-600" />
                    </FormItem>
                  )}
                />
              </>
            )}

            {!showTwoFactor && (
              <>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="me@ayush.com"
                          type="email"
                          disabled={isPending}
                          className="border dark:border-white/20"
                        />
                      </FormControl>
                      <FormMessage className="dark:text-red-600" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          placeholder="********"
                          type="password"
                          disabled={isPending}
                          className="border dark:border-white/20"
                        />
                      </FormControl>
                      <Button variant="link" className="px-0 ">
                        <Link href="/auth/reset">Forgot password?</Link>
                      </Button>
                      <FormMessage className="dark:text-red-600" />
                    </FormItem>
                  )}
                />
              </>
            )}

            <FormError message={error || urlError} />
            <FormSuccess message={success} />
          </div>
          <Button
            type="submit"
            className="w-full dark:bg-white/90"
            disabled={isPending}
          >
            {showTwoFactor ? "Verify code" : "Login"}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
}

export default LoginForm;
