import { CheckCircle } from "lucide-react";

export default function WhyChooseUs() {
  const points = [
    "ICAI Registered CA",
    "Transparent Pricing",
    "On-Time Compliance",
    "Dedicated Expert Support",
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Why Choose Us</h2>
        <div className="grid md:grid-cols-4 gap-8">
          {points.map((item) => (
            <div key={item} className="bg-white p-6 rounded-xl shadow">
              <CheckCircle className="mx-auto text-blue-700" />
              <p className="mt-4 font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}