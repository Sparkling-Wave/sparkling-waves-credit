import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cash Loans & Business Loans in Nigeria | Quick Approval | Sparkling Wave Investment",
  description: "Get cash loans from N50,000 to N200,000 and business loans up to N1,000,000 in Nigeria. Fast approval within 24hrs, competitive rates, and flexible terms. Apply online today!",
  keywords: "cash loans Nigeria, business loans, quick loans, personal loans, emergency funding, loan approval 24hrs, Nigeria loans, investment company, business funding",
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
    canonical: '/loans/cash-loan',
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: 'https://sparklingwavelimited.com.ng/loans/cash-loan',
    siteName: 'Sparkling Wave Investment Company Limited',
    title: 'Cash Loans & Business Loans in Nigeria | Quick Approval | Sparkling Wave Investment',
    description: 'Get cash loans from N50,000 to N200,000 and business loans up to N1,000,000 in Nigeria. Fast approval within 24hrs, competitive rates, and flexible terms.',
    images: [
      {
        url: '/img/banner/loan1.png',
        width: 1200,
        height: 630,
        alt: 'Cash Loans and Business Loans in Nigeria',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cash Loans & Business Loans in Nigeria | Quick Approval | Sparkling Wave Investment',
    description: 'Get cash loans from N50,000 to N200,000 and business loans up to N1,000,000 in Nigeria. Fast approval within 24hrs, competitive rates, and flexible terms.',
    images: ['/img/banner/loan1.png'],
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

export default function CashLoanLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
