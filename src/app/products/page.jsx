import "animate.css";

import products from "@/data/products.json";
import Link from "next/link";

export default function ProductsPage() {

  return (
    <div className="max-w-7xl mx-auto px-5 py-14 overflow-hidden">

      <div className="text-center mb-14 animate__animated animate__fadeInDown">

        <h1 className="text-5xl font-bold text-gray-800">
          Summer Products
        </h1>

        <p className="text-gray-500 mt-4 text-lg">
          Discover trendy summer collections with exciting deals
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

        {products.map((product, index) => (

          <div
            key={product.id}
            className="
              group bg-white border rounded-3xl overflow-hidden
              shadow-md hover:shadow-2xl
              hover:-translate-y-3
              transition-all duration-500
              animate__animated animate__fadeInUp
            "
            style={{
              animationDelay: `${index * 0.15}s`,
            }}
          >

            <div className="overflow-hidden relative">

              <div
                className="
                  absolute top-4 left-4 z-10
                  bg-red-500 text-white
                  text-xs font-semibold
                  px-3 py-1 rounded-full
                  animate__animated animate__pulse animate__infinite
                "
              >
                Hot 🔥
              </div>

              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full h-64 object-cover
                  group-hover:scale-110
                  transition-transform duration-700
                "
              />
              <div
                className="
                  absolute inset-0 bg-black/0
                  group-hover:bg-black/10
                  transition duration-500
                "
              ></div>
            </div>

            <div className="p-5">

              <h2
                className="
                  text-2xl font-bold text-gray-800
                  mb-1 group-hover:text-cyan-600
                  transition
                "
              >
                {product.name}
              </h2>

              <p className="text-sm text-gray-500 mb-3">
                {product.brand}
              </p>

              <p className="text-gray-600 text-sm mb-5 line-clamp-2 leading-relaxed">
                {product.description}
              </p>

              <div className="flex items-center justify-between mb-5">

                <span className="font-bold text-2xl text-black">
                  ${product.price}
                </span>

                <span
                  className="
                    bg-yellow-100 text-yellow-700
                    px-3 py-1 rounded-full text-sm
                    font-medium
                  "
                >
                  ⭐ {product.rating}
                </span>
              </div>

              <Link
                href={`/products/${product.id}`}
                className="
                  block text-center
                  bg-black text-white
                  py-3 rounded-xl
                  font-semibold
                  hover:bg-cyan-600
                  hover:scale-105
                  transition-all duration-300
                "
              >
                View Details
              </Link>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}