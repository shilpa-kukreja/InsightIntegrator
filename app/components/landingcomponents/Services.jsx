export default function Services() {
  const services = [
    "ITR Filing",
    "GST Registration & Returns",
    "Company Registration",
    "Audit & Assurance",
    "TDS & Payroll",
    "Accounting & Bookkeeping",
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service} className="border p-6 rounded-xl hover:shadow-lg">
              <h3 className="font-semibold text-lg mb-2">{service}</h3>
              <p className="text-gray-600">
                Professional {service.toLowerCase()} services with expert support.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}