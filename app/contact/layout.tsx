import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Contact Us - Sparkling Wave Investment Company Limited | Get in Touch",
  description:
    "Contact Sparkling Wave Investment Company Limited for business loans, asset financing, and cash loans in Nigeria. Call +234706 961 5095 or send us a message. Located in Ibadan, Oyo State.",
  keywords:
    "contact us, Sparkling Wave Investment, business loans Nigeria, asset financing, cash loans, customer support, loan application, Nigeria financial services",
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
    canonical: "/contact",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://sparklingwavelimited.com.ng/contact",
    siteName: "Sparkling Wave Investment Company Limited",
    title:
      "Contact Us - Sparkling Wave Investment Company Limited | Get in Touch",
    description:
      "Contact Sparkling Wave Investment Company Limited for business loans, asset financing, and cash loans in Nigeria. Call +234706 961 5095 or send us a message.",
    images: [
      {
        url: "/img/banner/bradcam12.png",
        width: 1200,
        height: 630,
        alt: "Contact Sparkling Wave Investment Company",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Us - Sparkling Wave Investment Company Limited | Get in Touch",
    description:
      "Contact Sparkling Wave Investment Company Limited for business loans, asset financing, and cash loans in Nigeria. Call +234706 961 5095 or send us a message.",
    images: ["/img/banner/bradcam12.png"],
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

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
