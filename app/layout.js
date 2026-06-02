// import { Geist, Geist_Mono } from "next/font/google";
// import "./globals.css";
// import NewsletterPopup from "./components/NewsletterPopup";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

// export const metadata = {
//   title: "Insight Integrators | Consulting Services in UAE",
//   description: "Insight Integrators is a leading consulting firm in the UAE offering internal audit, ICFR, risk advisory, AML, VAT, corporate tax, and regulatory compliance services to help businesses navigate complex challenges and achieve sustainable growth.",
//   alternates: {
//     canonical: "https://insightintegrators.ae/",
//   },
//   verification: {
//   google: "aEQ0NYEQ4tD88nfz3LUfON7bPKj-gzsDBNfgefdUAcg",
// },
// };



// export default function RootLayout({ children }) {
//   return (
//     <html
//       lang="en"
//       className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
//     >
//       <body className="min-h-full flex flex-col">{children}
//      <NewsletterPopup />
//       </body>
//     </html>
//   );
// }

import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import NewsletterPopup from "./components/NewsletterPopup";
import ContactPopup from "./components/landingcomponents/ContactPopup";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Insight Integrators | Consulting Services in UAE",
  description:
    "Insight Integrators is a leading consulting firm in the UAE offering internal audit, ICFR, risk advisory, AML, VAT, corporate tax, and regulatory compliance services to help businesses navigate complex challenges and achieve sustainable growth.",

  alternates: {
    canonical: "https://insightintegrators.ae/",
  },

  verification: {
    google: "aEQ0NYEQ4tD88nfz3LUfON7bPKj-gzsDBNfgefdUAcg",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){
              w[l]=w[l]||[];
              w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});
              var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
              j.async=true;
              j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
              f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-5JKDPWX5');
          `}
        </Script>
      </head>

      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5JKDPWX5"
            height="0"
            width="0"
            style={{
              display: "none",
              visibility: "hidden",
            }}
          />
        </noscript>

        {children}

        {/* <NewsletterPopup /> */}
        <ContactPopup/>
      </body>
    </html>
  );
}
