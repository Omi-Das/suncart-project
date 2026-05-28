"use client";

import { use, useEffect } from "react";
import { useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client"; 
import products from "../../../data/products.json";

export default function ProductDetailsPage({ params }) {
  const resolvedParams = use(params);
  const router = useRouter();
  
  const { data: session, isPending } = authClient.useSession();

  useEffect(() => {
    if (isPending) return;

    if (!session) {
      localStorage.setItem(
        "redirectAfterLogin",
        `/products/${resolvedParams.id}`
      );
      router.push("/login");
    }
  }, [session, isPending, resolvedParams.id, router]);

  const product = products.find(
    (item) => item.id === Number(resolvedParams.id)
  );

  // সেশন লোড হওয়া বা প্রোডাক্ট না পাওয়া পর্যন্ত লোডিং দেখাবে
  if (isPending || !product) {
    return (
      <div className="p-10 text-center text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-5 py-16">
      <div className="grid md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <div>
          <img
            src={product.image}
            alt={product.name}
            className="w-full rounded-2xl shadow-lg"
          />
        </div>

        {/* Content */}
        <div>
          <p className="text-orange-500 font-semibold mb-3">
            {product.category}
          </p>
          <h1 className="text-5xl font-bold mb-5">
            {product.name}
          </h1>
          <p className="text-gray-600 mb-5">
            {product.description}
          </p>

          <div className="space-y-3 mb-6">
            <p className="text-xl">⭐ Rating: {product.rating}</p>
            <p className="text-xl">Brand: {product.brand}</p>
            <p className="text-xl">Stock: {product.stock}</p>
          </div>

          <h2 className="text-4xl font-bold mb-6">
            ${product.price}
          </h2>

          <button className="bg-black text-white px-8 py-4 rounded-xl text-lg hover:bg-cyan-600 transition">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
