import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Company Policy - Sparkling Wave Investment Company Limited | Building People Who Build Business",
  description:
    "Learn about Sparkling Wave Investment Company Limited's core policy: 'You do not build business; you build people, and people build business.' Discover our customer-centric approach, investor assurance, and sustainable practices.",
  keywords:
    "company policy, Sparkling Wave Investment, business philosophy, customer-centric approach, investor assurance, employee empowerment, sustainable practices, Nigeria financial services",
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
    canonical: "/policy",
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: "https://sparklingwavelimited.com.ng/policy",
    siteName: "Sparkling Wave Investment Company Limited",
    title:
      "Company Policy - Sparkling Wave Investment Company Limited | Building People Who Build Business",
    description:
      'Learn about Sparkling Wave Investment Company Limited\'s core policy: "You do not build business; you build people, and people build business." Discover our customer-centric approach, investor assurance, and sustainable practices.',
    images: [
      {
        url: "/img/banner/bradcam13.png",
        width: 1200,
        height: 630,
        alt: "Company Policy - Sparkling Wave Investment Company Limited",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Company Policy - Sparkling Wave Investment Company Limited | Building People Who Build Business",
    description:
      'Learn about Sparkling Wave Investment Company Limited\'s core policy: "You do not build business; you build people, and people build business." Discover our customer-centric approach, investor assurance, and sustainable practices.',
    images: ["/img/banner/bradcam13.png"],
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

export default function PolicyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
