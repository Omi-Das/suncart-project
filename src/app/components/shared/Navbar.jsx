"use client";

import Link from "next/link";

export default function Navbar() {

  // Temporary auth state
  const isLoggedIn = false;

  return (
    <nav className="w-full border-b bg-white">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold"
        >
          SunCart
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-6">

          <Link href="/">Home</Link>

          <Link href="/products">Products</Link>

          <Link href="/profile">My Profile</Link>

        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">

          {isLoggedIn ? (
            <>
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full bg-gray-300"></div>

              {/* Logout */}
              <button className="bg-red-500 text-white px-4 py-2 rounded">
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="border px-4 py-2 rounded"
              >
                Login
              </Link>

              <Link
                href="/register"
                className="bg-black text-white px-4 py-2 rounded"
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