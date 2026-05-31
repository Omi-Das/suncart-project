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

  if (isPending || !product) {
    return (
      <div className="p-10 text-center text-2xl">
        Loading...
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
    <div className="w-full aspect-square bg-gray-50 rounded-2xl overflow-hidden shadow-sm border border-gray-100 flex items-center justify-center p-4">
      <img
        src={product.image}
        alt={product.name}
        className="max-h-full max-w-full object-contain rounded-xl hover:scale-105 transition-transform duration-300"
      />
    </div>

    <div className="flex flex-col h-full justify-center">
      <span className="inline-block text-xs uppercase tracking-widest text-orange-600 font-bold bg-orange-50 px-3 py-1.5 rounded-full w-fit mb-4">
        {product.category}
      </span>
      
      <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 tracking-tight mb-4">
        {product.name}
      </h1>

      <div className="flex items-center gap-2 mb-6">
        <div className="flex items-center text-amber-500 bg-amber-50 px-2.5 py-1 rounded-lg text-sm font-semibold">
          <span className="mr-1">⭐</span> {product.rating}
        </div>
        <span className="text-sm text-gray-400">|</span>
        <span className="text-sm text-gray-500 font-medium">Brand: {product.brand}</span>
      </div>
      
      <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 border-b border-gray-100 pb-6">
        {product.description}
      </p>

      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <p className="text-sm text-gray-500 mb-1">Price</p>
          <h2 className="text-4xl font-black text-gray-900">
            ${product.price}
          </h2>
        </div>
        
        <div className="flex flex-col sm:items-end">
          <p className="text-sm text-gray-500 mb-1">Availability</p>
          <span className={`text-sm font-semibold px-3 py-1 rounded-full ${
            product.stock > 0 ? "bg-green-50 text-green-700" : "bg-red-50 text-red-700"
          }`}>
            {product.stock > 0 ? `${product.stock} items left` : "Out of stock"}
          </span>
        </div>
      </div>

      <button 
        disabled={product.stock <= 0}
        className="w-full sm:w-auto bg-black text-white font-semibold px-8 py-4 rounded-xl text-base shadow-lg shadow-gray-900/10 hover:bg-gray-800 active:scale-[0.98] disabled:bg-gray-200 disabled:text-gray-400 disabled:cursor-not-allowed transition-all duration-200"
      >
        Add To Cart
      </button>
    </div>
  </div>
</div>
  );
}
