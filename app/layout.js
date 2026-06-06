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

// export const metadata = {
//   title: "Insight Integrators | Consulting Services in UAE",
//   description:
//     "Insight Integrators is a leading consulting firm in the UAE offering internal audit, ICFR, risk advisory, AML, VAT, corporate tax, and regulatory compliance services to help businesses navigate complex challenges and achieve sustainable growth.",

//   alternates: {
//     canonical: "https://insightintegrators.ae/",
//   },

//   verification: {
//     google: "aEQ0NYEQ4tD88nfz3LUfON7bPKj-gzsDBNfgefdUAcg",
//   },

//   robots: {
//     index: true,
//     follow: true,
//   },
// };


export const metadata = {
  metadataBase: new URL("https://insightintegrators.ae"),

  title: "Insight Integrators | Consulting Services in UAE",

  description:
    "Insight Integrators is a leading consulting firm in the UAE offering internal audit, ICFR, risk advisory, AML, VAT, corporate tax, and regulatory compliance services.",

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

  openGraph: {
    title: "Insight Integrators | Consulting Services in UAE",
    description:
      "Leading consulting firm in UAE offering Internal Audit, Risk Advisory, AML, VAT, Corporate Tax and Compliance Services.",
    url: "https://insightintegrators.ae",
    siteName: "Insight Integrators",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpeg",
        width: 1200,
        height: 630,
        alt: "Insight Integrators UAE",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Insight Integrators | Consulting Services in UAE",
    description:
      "Internal Audit, ICFR, Risk Advisory, AML, VAT, Corporate Tax and Regulatory Compliance Services in UAE.",
    images: ["/og-image.jpeg"],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Insight Integrators L.L.C - FZ",
  "url": "https://www.insightintegrators.ae",
  "telephone": "+971526806400",
  "email": "info@insightintegrators.ae",
  "logo": "https://www.insightintegrators.ae/logo.png",
  "sameAs": [
    "https://www.linkedin.com/company/insight-integrators"
  ]
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Insight Integrators L.L.C - FZ",
  "url": "https://www.insightintegrators.ae",
  "telephone": "+971526806400",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "AE"
  },
  "areaServed": "United Arab Emirates"
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

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />

     

        {/* <NewsletterPopup /> */}
        <ContactPopup />
      </body>
    </html>
  );
}
