export default function SummerCareTips() {

  const tips = [
    "Drink plenty of water to stay hydrated.",
    "Use sunscreen before going outside.",
    "Wear lightweight cotton clothes.",
    "Eat fresh fruits during hot weather.",
  ];

  return (
    <section className="bg-blue-50 py-20">

      <div className="max-w-7xl mx-auto px-5">

        <h2 className="text-4xl font-bold mb-10">
          Summer Care Tips
        </h2>

        <div className="grid md:grid-cols-2 gap-6">

          {tips.map((tip, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow"
            >
              <p className="text-lg">
                ☀️ {tip}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}