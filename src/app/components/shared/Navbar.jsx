// "use client";

// import Link from "next/link";

// export default function Navbar() {

//   // Temporary auth state
//   const isLoggedIn = false;

//   return (
//     <nav className="w-full border-b bg-white">
//       <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

//         {/* Logo */}
//         <Link
//           href="/"
//           className="text-2xl font-bold"
//         >
//           SunCart
//         </Link>

//         {/* Nav Links */}
//         <div className="flex items-center gap-6">

//           <Link href="/">Home</Link>

//           <Link href="/products">Products</Link>

//           <Link href="/profile">My Profile</Link>

//         </div>

//         {/* Auth Buttons */}
//         <div className="flex items-center gap-3">

//           {isLoggedIn ? (
//             <>
//               {/* Avatar */}
//               <div className="w-10 h-10 rounded-full bg-gray-300"></div>

//               {/* Logout */}
//               <button className="bg-red-500 text-white px-4 py-2 rounded">
//                 Logout
//               </button>
//             </>
//           ) : (
//             <>
//               <Link
//                 href="/login"
//                 className="border px-4 py-2 rounded"
//               >
//                 Login
//               </Link>

//               <Link
//                 href="/register"
//                 className="bg-black text-white px-4 py-2 rounded"
//               >
//                 Register
//               </Link>
//             </>
//           )}

//         </div>
//       </div>
//     </nav>
//   );
// }
"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { authClient } from "@/lib/auth-client";

export default function Navbar() {

  const router = useRouter();

  // Session Data
  const { data: session, isPending } = authClient.useSession();

  // Logout Function
  const handleLogout = async () => {
    await authClient.signOut();

    router.push("/login");
  };

  return (
    <nav className="w-full border-b bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link
          href="/"
          className="text-3xl font-bold text-black"
        >
          SunCart
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8 text-lg">

          <Link
            href="/"
            className="hover:text-cyan-500 transition"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="hover:text-cyan-500 transition"
          >
            Products
          </Link>

          <Link
            href="/profile"
            className="hover:text-cyan-500 transition"
          >
            My Profile
          </Link>

        </div>

        {/* Auth Section */}
        <div className="flex items-center gap-4">

          {isPending ? (
            <p>Loading...</p>
          ) : session?.user ? (
            <>
              {/* User Info */}
              <div className="flex items-center gap-3">

                {/* User Image */}
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

                {/* User Name */}
                <div className="hidden sm:block">
                  <h3 className="font-semibold text-sm">
                    {session.user.name}
                  </h3>

                  <p className="text-xs text-gray-500">
                    {session.user.email}
                  </p>
                </div>
              </div>

              {/* Logout Button */}
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 transition text-white px-4 py-2 rounded-lg"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              {/* Login */}
              <Link
                href="/login"
                className="border px-5 py-2 rounded-lg hover:bg-gray-100 transition"
              >
                Login
              </Link>

              {/* Register */}
              <Link
                href="/register"
                className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
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