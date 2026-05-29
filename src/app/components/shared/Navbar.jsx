"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

export default function Navbar() {

  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/login");
  };

  if (isPending) {
    return null;
  }

  return (
    <nav className="w-full border-b bg-white shadow-sm">

      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        <Link
          href="/"
          className="text-3xl font-bold text-black"
        >
          SunCart
        </Link>

        <div className="flex items-center gap-4 sm:gap-8 text-sm sm:text-lg">

          <Link href="/">
            Home
          </Link>

          <Link href="/products">
            Products
          </Link>

          <Link href="/profile">
            My Profile
          </Link>
        </div>

        <div className="flex items-center gap-4">

          {session?.user ? (
            <>
              <div className="flex items-center gap-3">

                <Image
                  src={
                    session.user.image ||
                    "https://i.ibb.co/4pDNDk1/avatar.png"
                  }
                  alt="User"
                  width={42}
                  height={42}
                  className="rounded-full border object-cover"
                />

                <div className="hidden sm:block">
                  <h3 className="font-semibold text-sm">
                    {session.user.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {session.user.email}
                  </p>
                </div>
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="border px-5 py-2 rounded-lg"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="bg-black text-white px-5 py-2 rounded-lg"
              >
                Register
              </Link>
            </>
          )}

        </div>
      </div>
    </nav>
  );
}
