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

const RegisterPage = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  // Register Submit
  // const onSubmit = async (e) => {
  //   e.preventDefault();

  //   setLoading(true);
  //   setErrorMessage("");

  //   const formData = new FormData(e.currentTarget);

  //   const user = Object.fromEntries(formData.entries());

  //   const { data, error } = await authClient.signUp.email({
  //     email: user.email,
  //     password: user.password,
  //     name: user.name,
  //     image: user.image,
  //   });

  //   setLoading(false);

  //   // Error
  //   if (error) {
  //     setErrorMessage(error.message || "Registration Failed");
  //     return;
  //   }

  //   // Success
  //   if (data) {
  //     router.push("/login");
  //   }
  // };
const onSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setErrorMessage("");

  const formData = new FormData(e.currentTarget);

  const user = Object.fromEntries(formData.entries());

  console.log("Form User Data:", user);

  const { data, error } = await authClient.signUp.email({
    email: user.email,
    password: user.password,
    name: user.name,
    image: user.image,
  });

  // Console Log
  console.log("Registration Data:", data);
  console.log("Registration Error:", error);

  setLoading(false);

  // Error
  if (error) {
    setErrorMessage(error.message || "Registration Failed");
    return;
  }

  // Success
  if (data) {
    console.log("Registration Successful");

    router.push("/login");
  }
};
  // Google Sign In
  const handleGoogleSignin = async () => {
    try {
      await authClient.signIn.social({
        provider: "google",
        callbackURL: "/",
      });
    } catch (error) {
      setErrorMessage("Google Sign In Failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-5">
      <Card className="w-full max-w-md p-8 shadow-xl rounded-2xl border">

        {/* Title */}
        <div className="text-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">
            Register
          </h1>

          <p className="text-gray-500 mt-2">
            Create your account and continue your journey
          </p>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-100 text-red-600 text-sm p-3 rounded-lg mb-4">
            {errorMessage}
          </div>
        )}

        {/* Register Form */}
        <Form onSubmit={onSubmit} className="flex flex-col gap-5">

          {/* Name */}
          <TextField
            isRequired
            name="name"
            type="text"
          >
            <Label>Name</Label>

            <Input
              placeholder="Enter your full name"
              className="rounded-lg"
            />

            <FieldError />
          </TextField>

          {/* Photo URL */}
          <TextField
            name="image"
            type="url"
          >
            <Label>Photo URL</Label>

            <Input
              placeholder="https://example.com/photo.jpg"
              className="rounded-lg"
            />

            <FieldError />
          </TextField>

          {/* Email */}
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

          {/* Password */}
          <TextField
            isRequired
            minLength={8}
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

          {/* Register Button */}
          <Button
            type="submit"
            isLoading={loading}
            className="w-full bg-cyan-500 text-white rounded-lg font-semibold"
          >
            Register
          </Button>
        </Form>

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <Separator className="flex-1" />

          <span className="text-sm text-gray-400 whitespace-nowrap">
            OR
          </span>

          <Separator className="flex-1" />
        </div>

        {/* Google Login */}
        <Button
          onClick={handleGoogleSignin}
          variant="bordered"
          className="w-full rounded-lg"
        >
          <FcGoogle size={22} />
          Continue with Google
        </Button>

        {/* Login Link */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <Link
            href="/login"
            className="text-cyan-600 font-semibold hover:underline"
          >
            Login
          </Link>
        </p>
      </Card>
    </div>
  );
};

export default RegisterPage;