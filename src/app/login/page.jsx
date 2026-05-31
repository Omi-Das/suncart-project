"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  Separator,
  TextField,
} from "@heroui/react";

import { FcGoogle } from "react-icons/fc";
import { authClient } from "@/lib/auth-client";

const LoginPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const onSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);
    const user = Object.fromEntries(formData.entries());

    const { data, error } = await authClient.signIn.email({
      email: user.email,
      password: user.password,
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message || "Invalid email or password");
      return;
    }

    if (data) {
      const redirectPath = localStorage.getItem("redirectAfterLogin");

      console.log("Redirect Path:", redirectPath);

      if (redirectPath) {
        localStorage.removeItem("redirectAfterLogin");
        router.push(redirectPath);
      } else {
        router.push("/");
      }
    }
  };

  const handleGoogleSignin = async () => {
    try {
      const redirectPath = localStorage.getItem("redirectAfterLogin") || "/";

      if (redirectPath !== "/") {
        localStorage.removeItem("redirectAfterLogin");
      }

      await authClient.signIn.social({
        provider: "google",
        callbackURL: redirectPath,
      });
    } catch (error) {
      setErrorMessage("Google Sign In Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-5">
      <Card className="w-full max-w-md p-8 shadow-xl rounded-2xl border">

        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Login
          </h1>

          <p className="text-gray-500 mt-2">
            Welcome back! Please login to continue
          </p>
        </div>

        {errorMessage && (
          <div className="bg-red-100 text-red-600 text-sm p-3 rounded-lg mb-4">
            {errorMessage}
          </div>
        )}

        <Form onSubmit={onSubmit} className="flex flex-col gap-5">

          <TextField
            isRequired
            name="email"
            type="email"
            validate={(value) => {
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
              ) {
                return "Please enter a valid email address";
              }

              return null;
            }}
          >
            <Label>Email</Label>

            <Input
              placeholder="john@example.com"
              className="rounded-lg"
            />

            <FieldError />
          </TextField>

          <TextField
            isRequired
            name="password"
            type="password"
            validate={(value) => {
              if (value.length < 8) {
                return "Password must be at least 8 characters";
              }

              if (!/[A-Z]/.test(value)) {
                return "Password must contain at least one uppercase letter";
              }

              if (!/[0-9]/.test(value)) {
                return "Password must contain at least one number";
              }

              return null;
            }}
          >
            <Label>Password</Label>

            <Input
              placeholder="Enter your password"
              className="rounded-lg"
            />

            <Description>
              Must contain 8 characters, 1 uppercase & 1 number
            </Description>

            <FieldError />
          </TextField>

          <Button
            type="submit"
            isLoading={loading}
            className="w-full bg-cyan-500 text-white rounded-lg font-semibold"
          >
            Login
          </Button>
        </Form>

        <div className="flex items-center gap-3 my-6">
          <Separator className="flex-1" />
          <span className="text-sm text-gray-400 whitespace-nowrap">
            OR
          </span>
          <Separator className="flex-1" />
        </div>

        <Button
          onClick={handleGoogleSignin}
          variant="bordered"
          className="w-full rounded-lg bg-gray-200"
        >
          <FcGoogle size={22} />
          Continue with Google
        </Button>

        <p className="text-center text-sm text-gray-500 mt-6">
          Don&apos;t have an account?{" "}
          <Link
            href="/register"
            className="text-cyan-600 font-semibold hover:underline"
          >
            Register
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default LoginPage;
