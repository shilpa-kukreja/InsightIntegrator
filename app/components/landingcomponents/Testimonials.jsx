import { Star } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Client Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white p-6 rounded-xl shadow">
              <div className="flex justify-center mb-3">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="text-yellow-400" size={18} />
                ))}
              </div>
              <p className="text-gray-600">
                Excellent CA services. Very professional and reliable.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}