import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternetCheck from "@/utils/InternetChecker";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title:
    "Sparkling Wave Investment Company Limited - Fast Business Loans & Asset Financing",
  description:
    "Get quick business loans, asset financing, and cash loans in Nigeria. Fast approval within 24hrs, competitive rates, and flexible repayment terms. Apply online for N50,000 to N7,000,000 loans.",
  keywords:
    "business loans Nigeria, asset financing, cash loans, quick loans, business funding, startup loans, investment company, loan approval, Nigeria loans, business growth financing",
  authors: [{ name: "Sparkling Wave Investment Company Limited" }],
  creator: "Sparkling Wave Investment Company Limited",
  publisher: "Sparkling Wave Investment Company Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sparklingwavelimited.com.ng"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://sparklingwavelimited.com.ng",
    siteName: "Sparkling Wave Investment Company Limited",
    title:
      "Sparkling Wave Investment Company Limited - Fast Business Loans & Asset Financing",
    description:
      "Get quick business loans, asset financing, and cash loans in Nigeria. Fast approval within 24hrs, competitive rates, and flexible repayment terms.",
    images: [
      {
        url: "/img/banner/bradcam2.png",
        width: 1200,
        height: 630,
        alt: "Sparkling Wave Investment Company Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Sparkling Wave Investment Company Limited - Fast Business Loans & Asset Financing",
    description:
      "Get quick business loans, asset financing, and cash loans in Nigeria. Fast approval within 24hrs, competitive rates, and flexible repayment terms.",
    images: ["/img/banner/bradcam2.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="min-h-screen flex flex-col">
          <InternetCheck />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
