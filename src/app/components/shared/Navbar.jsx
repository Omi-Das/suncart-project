"use client";

import { useState } from "react"; 
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";

export default function Navbar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false); 
  const { data: session, isPending } = authClient.useSession();

  const handleLogout = async () => {
    await authClient.signOut();
    router.push("/login");
  };

  if (isPending) {
    return null;
  }

  return (
    <nav className="w-full border-b bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">
        
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden block text-2xl focus:outline-none"
        >
          {isOpen ? "✖" : "☰"}
        </button>

        {/* Logo */}
        <Link href="/" className="text-2xl sm:text-3xl font-bold text-black">
          SunCart
        </Link>

        <div className={`
          ${isOpen ? "flex" : "hidden"} 
          md:flex absolute md:static top-full left-0 w-full md:w-auto 
          flex-col md:flex-row bg-white md:bg-transparent 
          border-b md:border-none p-5 md:p-0 gap-4 md:gap-8 text-lg z-50
        `}>
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/products" onClick={() => setIsOpen(false)}>Products</Link>
          <Link href="/profile" onClick={() => setIsOpen(false)}>My Profile</Link>
        </div>

        <div className="flex items-center gap-4">
          {session?.user ? (
            <>
              <div className="flex items-center gap-3">
                <Image
                  src={session.user.image || "https://i.ibb.co/4pDNDk1/avatar.png"}
                  alt="User"
                  width={42}
                  height={42}
                  className="rounded-full border object-cover"
                />
                <div className="hidden sm:block">
                  <h3 className="font-semibold text-sm">{session.user.name}</h3>
                  <p className="text-xs text-gray-500">{session.user.email}</p>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-lg text-sm sm:text-base"
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex gap-2 sm:gap-4 text-sm sm:text-base">
              <Link href="/login" className="border px-3 py-1.5 sm:px-5 sm:py-2 rounded-lg">
                Login
              </Link>
              <Link href="/register" className="bg-black text-white px-3 py-1.5 sm:px-5 sm:py-2 rounded-lg">
                Register
              </Link>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
}
