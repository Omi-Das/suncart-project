import "animate.css";
import products from "../../../data/products.json";
import Link from "next/link";

export default function PopularProducts() {

  const popularProducts = products.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-5 py-20">

      {/* Section Title */}
      <div className="text-center mb-14 animate__animated animate__fadeInDown">

        <h2 className="text-4xl font-bold">
          Popular Products
        </h2>

        <p className="text-gray-500 mt-3">
          Explore our trending summer collections
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {popularProducts.map((product, index) => (

          <div
            key={product.id}
            className={`
              border rounded-2xl overflow-hidden shadow-lg
              hover:shadow-2xl hover:-translate-y-2
              transition duration-300 bg-white
              animate__animated animate__fadeInUp
            `}
            style={{
              animationDelay: `${index * 0.3}s`,
            }}
          >

            {/* Product Image */}
            <div className="overflow-hidden">

              <img
                src={product.image}
                alt={product.name}
                className="
                  w-full h-72 object-cover
                  hover:scale-110
                  transition duration-500
                "
              />
            </div>

            {/* Product Content */}
            <div className="p-5">

              <h3 className="text-2xl font-semibold mb-2">
                {product.name}
              </h3>

              <p className="mb-4 text-yellow-500 font-medium">
                ⭐ {product.rating}
              </p>

              <div className="flex items-center justify-between">

                <p className="text-2xl font-bold text-gray-800">
                  ${product.price}
                </p>

                <Link
  href={`/products/${product.id}`}
  className="
    inline-block text-center
    bg-black text-white px-4 py-2 rounded-lg
    hover:bg-gray-800
    transition
  "
>
  View Details
</Link>

              </div>
            </div>
          </div>
        ))}

      </div>
    </section>
  );
}