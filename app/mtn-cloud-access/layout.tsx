import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Analytics Dashboard - Sparkling Wave Investment Company Limited | Loan Performance Metrics",
  description:
    "Comprehensive analytics dashboard for loan performance, borrower behavior, and financial metrics. Real-time insights into loan disbursement, active borrowers, and risk management.",
  keywords:
    "analytics dashboard, loan performance, borrower analytics, financial metrics, loan disbursement, risk management, Nigeria financial services, loan analytics",
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
    canonical: "/analytics",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://sparklingwavelimited.com.ng/analytics",
    siteName: "Sparkling Wave Investment Company Limited",
    title:
      "Analytics Dashboard - Sparkling Wave Investment Company Limited | Loan Performance Metrics",
    description:
      "Comprehensive analytics dashboard for loan performance, borrower behavior, and financial metrics. Real-time insights into loan disbursement, active borrowers, and risk management.",
    images: [
      {
        url: "/img/banner/analytics.png",
        width: 1200,
        height: 630,
        alt: "Analytics Dashboard - Sparkling Wave Investment Company Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Analytics Dashboard - Sparkling Wave Investment Company Limited | Loan Performance Metrics",
    description:
      "Comprehensive analytics dashboard for loan performance, borrower behavior, and financial metrics. Real-time insights into loan disbursement, active borrowers, and risk management.",
    images: ["/img/banner/analytics.png"],
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

export default function AnalyticsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
