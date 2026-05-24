import products from "../../../data/products.json";

export default function PopularProducts() {

  const popularProducts = products.slice(0, 3);

  return (
    <section className="max-w-7xl mx-auto px-5 py-20">

      <h2 className="text-4xl font-bold mb-10">
        Popular Products
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {popularProducts.map((product) => (
          <div
            key={product.id}
            className="border rounded-2xl overflow-hidden shadow hover:shadow-xl transition"
          >

            <img
              src={product.image}
              alt={product.name}
              className="w-full h-72 object-cover"
            />

            <div className="p-5">

              <h3 className="text-2xl font-semibold mb-2">
                {product.name}
              </h3>

              <p className="mb-3">
                ⭐ {product.rating}
              </p>

              <div className="flex items-center justify-between">

                <p className="text-xl font-bold">
                  ${product.price}
                </p>

                <button className="bg-black text-white px-4 py-2 rounded-lg">
                  View Details
                </button>

              </div>

            </div>
          </div>
        ))}

      </div>
    </section>
  );
}