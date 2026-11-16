"use client";

export default function DNFBPCTA() {
    // Replace this with your actual WhatsApp number
    const whatsappNumber = "971526806400"; 
    const whatsappMessage = encodeURIComponent("Hi I am looking for AML services");
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

    return (
        <section className="w-full bg-gradient-to-r from-[#4f2e80] via-[#5d3a94] to-[#3a2260] py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
                
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
                    Not Sure if Your Business Qualifies as a DNFBP?
                </h2>
                
                <p className="text-lg md:text-xl text-blue-50/90 mb-8 max-w-2xl leading-relaxed">
                    Our top AML experts in Dubai can review your setup and guide you to full compliance.
                </p>
                
                <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-gray-900 font-semibold py-3.5 px-8 rounded-full hover:bg-gray-100 transition-colors duration-300 shadow-lg"
                >
                    Contact Now
                </a>
                
            </div>
        </section>
    );
}