import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "FAQ - Frequently Asked Questions | Sparkling Wave Investment Company Limited",
  description:
    "Find answers to commonly asked questions about our loan services, application process, requirements, and policies. Get all the information you need about business loans, asset financing, and cash loans in Nigeria.",
  keywords:
    "FAQ, frequently asked questions, loan questions, business loan FAQ, asset loan FAQ, cash loan FAQ, loan application process, loan requirements, Nigeria loans",
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
    canonical: "/faq",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://sparklingwavelimited.com.ng/faq",
    siteName: "Sparkling Wave Investment Company Limited",
    title:
      "FAQ - Frequently Asked Questions | Sparkling Wave Investment Company Limited",
    description:
      "Find answers to commonly asked questions about our loan services, application process, requirements, and policies. Get all the information you need about business loans, asset financing, and cash loans in Nigeria.",
    images: [
      {
        url: "/img/banner/bradcam2.png",
        width: 1200,
        height: 630,
        alt: "Frequently Asked Questions about Loan Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "FAQ - Frequently Asked Questions | Sparkling Wave Investment Company Limited",
    description:
      "Find answers to commonly asked questions about our loan services, application process, requirements, and policies. Get all the information you need about business loans, asset financing, and cash loans in Nigeria.",
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
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
