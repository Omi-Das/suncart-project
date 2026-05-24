export default function TopBrands() {

  const brands = [
    "SunShade",
    "CoolBreeze",
    "HydroFlow",
    "AquaWear",
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 py-20">

      <h2 className="text-4xl font-bold mb-10">
        Top Brands
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">

        {brands.map((brand, index) => (
          <div
            key={index}
            className="border rounded-2xl p-10 text-center shadow hover:shadow-lg transition"
          >
            <h3 className="text-2xl font-semibold">
              {brand}
            </h3>
          </div>
        ))}

      </div>
    </section>
  );
}