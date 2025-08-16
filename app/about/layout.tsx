import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "About Us - Sparkling Wave Investment Company Limited | Leading Financial Services in Nigeria",
  description:
    "Learn about Sparkling Wave Investment Company Limited, a trusted financial services provider in Nigeria. We offer business loans, asset financing, and investment solutions for business growth.",
  keywords:
    "about us, Sparkling Wave Investment, financial services Nigeria, business loans, asset financing, investment company, Nigeria financial services",
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
    canonical: "/about",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://sparklingwavelimited.com.ng/about",
    siteName: "Sparkling Wave Investment Company Limited",
    title:
      "About Us - Sparkling Wave Investment Company Limited | Leading Financial Services in Nigeria",
    description:
      "Learn about Sparkling Wave Investment Company Limited, a trusted financial services provider in Nigeria. We offer business loans, asset financing, and investment solutions for business growth.",
    images: [
      {
        url: "/img/about/aboutImg.png",
        width: 1200,
        height: 630,
        alt: "Sparkling Wave Investment Company Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "About Us - Sparkling Wave Investment Company Limited | Leading Financial Services in Nigeria",
    description:
      "Learn about Sparkling Wave Investment Company Limited, a trusted financial services provider in Nigeria. We offer business loans, asset financing, and investment solutions for business growth.",
    images: ["/img/about/aboutImg.png"],
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

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
