"use client";

export default function ConsultationCTA() {
    // Replace this with your actual WhatsApp number
    const whatsappNumber = "971526806400"; 
    const whatsappMessage = encodeURIComponent("Hi I am looking for AML services");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section className="w-full bg-gradient-to-r from-[#4f2e80] via-[#5d3a94] to-[#3a2260] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
                    Need Help Understanding What Applies to Your Business?
                </h2>
                
                <p className="text-lg md:text-xl text-blue-50/90 mb-10 max-w-3xl leading-relaxed">
                    Our AML consultants in the UAE will review your setup, identify your legal obligations, and guide you through the right compliance steps - fast, clear, and confidential.
                </p>
                
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-[#4f2e80] font-bold py-3.5 px-8 rounded-full hover:bg-gray-50 transition-colors duration-300 shadow-lg"
                >
                    Book Your AML Consultation
                </a>
                
            </div>
        </section>
    );
}