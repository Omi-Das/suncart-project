export default function HeroSection() {
  return (
    <section className="bg-orange-100 py-20">
      <div className="max-w-7xl mx-auto px-5 grid md:grid-cols-2 items-center gap-10">

        <div>
          <p className="text-orange-600 font-semibold mb-3">
            Hot Deals 🔥
          </p>

          <h1 className="text-5xl font-bold leading-tight mb-5">
            Summer Sale
            <span className="text-red-500">
              {" "}50% OFF
            </span>
          </h1>

          <p className="text-gray-600 mb-6">
            Discover amazing summer products with exclusive discounts.
            Upgrade your summer style today.
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-lg">
            Shop Now
          </button>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
            alt="Summer Banner"
            className="w-full h-[400px] object-cover rounded-2xl"
          />
        </div>

      </div>
    </section>
  );
}