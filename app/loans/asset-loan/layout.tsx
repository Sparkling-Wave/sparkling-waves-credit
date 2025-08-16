import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Asset Loan Services in Nigeria | N500K to N7M Financing | Sparkling Wave Investment",
  description: "Get asset loans in Nigeria from N500,000 to N7,000,000. Silver, Gold, and Diamond tiers available. Fast approval, flexible terms, and competitive rates. Apply for asset financing today!",
  keywords: "asset loans Nigeria, asset financing, vehicle loans, equipment financing, property loans, business assets, loan approval, Nigeria asset loans, investment company",
  authors: [{ name: "Sparkling Wave Investment Company Limited" }],
  creator: "Sparkling Wave Investment Company Limited",
  publisher: "Sparkling Wave Investment Company Limited",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sparklingwavelimited.com.ng'),
  alternates: {
    canonical: '/loans/asset-loan',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://sparklingwavelimited.com.ng/loans/asset-loan',
    siteName: 'Sparkling Wave Investment Company Limited',
    title: 'Asset Loan Services in Nigeria | N500K to N7M Financing | Sparkling Wave Investment',
    description: 'Get asset loans in Nigeria from N500,000 to N7,000,000. Silver, Gold, and Diamond tiers available. Fast approval, flexible terms, and competitive rates.',
    images: [
      {
        url: '/img/banner/asset.png',
        width: 1200,
        height: 630,
        alt: 'Asset Loan Services in Nigeria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Asset Loan Services in Nigeria | N500K to N7M Financing | Sparkling Wave Investment',
    description: 'Get asset loans in Nigeria from N500,000 to N7,000,000. Silver, Gold, and Diamond tiers available. Fast approval, flexible terms, and competitive rates.',
    images: ['/img/banner/asset.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function AssetLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
