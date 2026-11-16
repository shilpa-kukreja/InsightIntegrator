"use client";

export default function AnnouncementBar() {
    const phoneNumber = "+971526806400";
    // Removes spaces for the actual tel: link
    const telLink = "tel:+971526806400";

    return (
        <div className="w-full bg-[#4f2e80] py-2.5 px-4 flex justify-center items-center">
            <p className="text-white text-sm sm:text-[15px] font-semibold tracking-wide text-center">
                Trusted by DNFBPs Across the UAE - Call -{" "}
                <a 
                    href={telLink} 
                    className="underline underline-offset-4 hover:text-violet-100 transition-colors"
                >
                    {phoneNumber}
                </a>
            </p>
        </div>
    );
}