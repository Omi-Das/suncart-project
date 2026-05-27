"use client";

import Image from "next/image";
import { authClient } from "@/lib/auth-client";

const MyProfilePage = () => {

  // Session Data
  const { data: session, isPending } = authClient.useSession();

  if (isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl font-semibold">Loading...</h1>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-5">

      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-10">

        {/* Title */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800">
            My Profile
          </h1>

          <p className="text-gray-500 mt-2">
            Your personal account information
          </p>
        </div>

        {/* Profile Section */}
        {session?.user ? (
          <div className="flex flex-col items-center">

            {/* Profile Image */}
            <Image
              src={
                session.user.image ||
                "https://i.ibb.co/4pDNDk1/avatar.png"
              }
              alt="Profile"
              width={120}
              height={120}
              className="rounded-full border-4 border-cyan-500 object-cover"
            />

            {/* User Name */}
            <h2 className="text-3xl font-bold text-gray-800 mt-5">
              {session.user.name}
            </h2>

            {/* User Email */}
            <p className="text-gray-500 mt-2 text-lg">
              {session.user.email}
            </p>

            {/* Info Cards */}
            <div className="grid md:grid-cols-2 gap-5 w-full mt-10">

              {/* Name Card */}
              <div className="border rounded-2xl p-5 bg-gray-50">
                <h3 className="text-sm text-gray-500 mb-2">
                  Full Name
                </h3>

                <p className="text-lg font-semibold text-gray-800">
                  {session.user.name}
                </p>
              </div>

              {/* Email Card */}
              <div className="border rounded-2xl p-5 bg-gray-50">
                <h3 className="text-sm text-gray-500 mb-2">
                  Email Address
                </h3>

                <p className="text-lg font-semibold text-gray-800">
                  {session.user.email}
                </p>
              </div>

            </div>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-red-500">
              User Not Logged In
            </h2>
          </div>
        )}

      </div>
    </div>
  );
};

export default MyProfilePage;