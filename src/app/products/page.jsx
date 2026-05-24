import products from "@/data/products.json";
import Link from "next/link";

export default function ProductsPage() {
  return (
    <div className="max-w-7xl mx-auto px-5 py-10">

      <h1 className="text-4xl font-bold mb-10">
        Summer Products
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-60 object-cover"
            />

            <div className="p-4">

              <h2 className="text-xl font-semibold">
                {product.name}
              </h2>

              <p className="text-sm text-gray-500 mb-2">
                {product.brand}
              </p>

              <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                {product.description}
              </p>

              <div className="flex items-center justify-between mb-3">
                <span className="font-bold text-lg">
                  ${product.price}
                </span>

                <span>
                  ⭐ {product.rating}
                </span>
              </div>

              <Link
                  href={`/products/${product.id}`}
                  className="bg-black text-white px-4 py-2 rounded"
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