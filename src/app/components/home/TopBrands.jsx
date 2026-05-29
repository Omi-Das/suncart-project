export default function TopBrands() {
  const brands = [
    {
      name: "SunShade",
      desc: "Premium UV protection gear",
      color: "from-yellow-100 to-yellow-200",
    },
    {
      name: "CoolBreeze",
      desc: "Cooling comfort for summer",
      color: "from-blue-100 to-blue-200",
    },
    {
      name: "HydroFlow",
      desc: "Advanced hydration solutions",
      color: "from-cyan-100 to-cyan-200",
    },
    {
      name: "AquaWear",
      desc: "Water-friendly activewear",
      color: "from-teal-100 to-teal-200",
    },
  ];

  return (
    <section className="max-w-7xl mx-auto px-5 py-16">
      
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800">
          Top Brands
        </h2>
        <p className="text-gray-500 mt-3">
          Trusted names chosen by thousands of customers worldwide
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {brands.map((brand, index) => (
          <div
            key={index}
            className={`rounded-2xl p-6 text-center shadow-md hover:shadow-xl transition-all duration-300 bg-gradient-to-br ${brand.color}`}
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-white shadow flex items-center justify-center">
              <span className="text-lg font-bold text-gray-700">
                {brand.name.charAt(0)}
              </span>
            </div>

            <h3 className="text-xl font-semibold text-gray-800">
              {brand.name}
            </h3>

            <p className="text-sm text-gray-600 mt-2">
              {brand.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}