"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

import {
  Button,
  Card,
  FieldError,
  Form,
  Input,
  Label,
  TextField,
} from "@heroui/react";

import { authClient } from "@/lib/auth-client";

const EditProfilePage = () => {

  const router = useRouter();

  const { data: session } = authClient.useSession();

  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  // Update User
  const handleUpdateProfile = async (e) => {
    e.preventDefault();

    setLoading(true);
    setErrorMessage("");

    const formData = new FormData(e.currentTarget);

    const userData = Object.fromEntries(formData.entries());

    try {

      const { data, error } = await authClient.updateUser({
        name: userData.name,
        image: userData.image,
      });

      console.log("Updated Data:", data);
      console.log("Update Error:", error);

      if (error) {
        setErrorMessage(error.message || "Update Failed");
        setLoading(false);
        return;
      }

      router.push("/profile");

    } catch (error) {
      setErrorMessage("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-5">

      <Card className="w-full max-w-md p-8 shadow-xl rounded-2xl border">

        {/* Title */}
        <div className="text-center mb-6">

          <h1 className="text-3xl font-bold text-gray-800">
            Update Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Update your name and profile image
          </p>
        </div>

        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-100 text-red-600 text-sm p-3 rounded-lg mb-4">
            {errorMessage}
          </div>
        )}

        {/* Form */}
        <Form
          onSubmit={handleUpdateProfile}
          className="flex flex-col gap-5"
        >

          {/* Name */}
          <TextField
            isRequired
            name="name"
            type="text"
            defaultValue={session?.user?.name}
          >
            <Label>Name</Label>

            <Input
              placeholder="Enter your name"
              className="rounded-lg"
            />

            <FieldError />
          </TextField>

          {/* Image */}
          <TextField
            name="image"
            type="url"
            defaultValue={session?.user?.image}
          >
            <Label>Photo URL</Label>

            <Input
              placeholder="https://example.com/photo.jpg"
              className="rounded-lg"
            />

            <FieldError />
          </TextField>

          {/* Update Button */}
          <Button
            type="submit"
            isLoading={loading}
            className="w-full bg-cyan-500 text-white rounded-lg font-semibold"
          >
            Update Information
          </Button>

        </Form>
      </Card>
    </div>
  );
};

export default EditProfilePage;