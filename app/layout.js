import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NewsletterPopup from "./components/NewsletterPopup";

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
  description: "Insight Integrators is a leading consulting firm in the UAE offering internal audit, ICFR, risk advisory, AML, VAT, corporate tax, and regulatory compliance services to help businesses navigate complex challenges and achieve sustainable growth.",
  alternates: {
    canonical: "https://insightintegrators.ae/",
  },
  verification: {
  google: "aEQ0NYEQ4tD88nfz3LUfON7bPKj-gzsDBNfgefdUAcg",
},
};



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}
     <NewsletterPopup />
      </body>
    </html>
  );
}
