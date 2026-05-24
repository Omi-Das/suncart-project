export default function SummerCareTips() {
  const tips = [
    {
      title: "Stay Hydrated",
      desc: "Drink plenty of water throughout the day to avoid dehydration.",
      icon: "💧",
    },
    {
      title: "Use Sunscreen",
      desc: "Apply SPF before going outside to protect your skin.",
      icon: "🧴",
    },
    {
      title: "Wear Light Clothes",
      desc: "Choose breathable cotton fabrics to stay cool.",
      icon: "👕",
    },
    {
      title: "Eat Fresh Fruits",
      desc: "Include seasonal fruits to boost energy and hydration.",
      icon: "🍉",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-5">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800">
            Summer Care Tips
          </h2>
          <p className="text-gray-500 mt-3">
            Simple habits to keep you healthy and fresh this summer
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-blue-100"
            >
              {/* Icon */}
              <div className="text-3xl mb-4 pl-16">
                {tip.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-800">
                {tip.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mt-2">
                {tip.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}