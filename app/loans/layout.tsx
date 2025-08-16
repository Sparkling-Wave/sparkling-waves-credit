import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Loan Services - Business, Asset & Cash Loans in Nigeria | Sparkling Wave Investment",
  description:
    "Explore our comprehensive loan services including business loans, asset financing, and cash loans in Nigeria. Fast approval, competitive rates, and flexible terms for all your financial needs.",
  keywords:
    "loan services, business loans, asset financing, cash loans, Nigeria loans, loan approval, investment company, financial services",
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
    canonical: "/loans",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://sparklingwavelimited.com.ng/loans",
    siteName: "Sparkling Wave Investment Company Limited",
    title:
      "Loan Services - Business, Asset & Cash Loans in Nigeria | Sparkling Wave Investment",
    description:
      "Explore our comprehensive loan services including business loans, asset financing, and cash loans in Nigeria. Fast approval, competitive rates, and flexible terms for all your financial needs.",
    images: [
      {
        url: "/img/banner/loan1.png",
        width: 1200,
        height: 630,
        alt: "Loan Services in Nigeria",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Loan Services - Business, Asset & Cash Loans in Nigeria | Sparkling Wave Investment",
    description:
      "Explore our comprehensive loan services including business loans, asset financing, and cash loans in Nigeria. Fast approval, competitive rates, and flexible terms for all your financial needs.",
    images: ["/img/banner/loan1.png"],
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
};

export default function LoansLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
