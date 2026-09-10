import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";

const SITE_URL = "https://www.restaurantswhocare.com";
const SITE_NAME = "Restaurants Who Care Club";
// Title <= 60 chars, description <= 155 chars: buyer's words first, brand second.
const TITLE = "Compostable Disposables for Restaurants | RWCC by Chuk";
const DESCRIPTION =
  "Serving on plastic disposables? Restaurants, cloud kitchens, caterers switch to compostable bagasse plates, containers and cups with Chuk and get ranked.";
const OG_TITLE = "Switch your restaurant to compostable disposables. Get ranked for it.";

// GA4 property "RWCC (restaurantswhocare.com)" under the CHUK account, created 2026-09-10.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID || "G-22VHD2BL4M";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/" },
  keywords: [
    "Restaurants Who Care Club",
    "eco friendly disposable plates for restaurants",
    "compostable food containers for restaurants",
    "alternative to plastic food containers",
    "eco friendly packaging for cloud kitchen",
    "bagasse plates wholesale",
    "single use plastic ban restaurants India",
    "Chuk",
  ],
  openGraph: {
    type: "website",
    url: SITE_URL,
    siteName: SITE_NAME,
    title: OG_TITLE,
    description: DESCRIPTION,
    locale: "en_IN",
    images: [{ url: "/images/hero.png", width: 2896, height: 2172, alt: "Restaurants Who Care Club by Chuk" }],
  },
  twitter: {
    card: "summary_large_image",
    title: OG_TITLE,
    description: DESCRIPTION,
    images: ["/images/hero.png"],
  },
  robots: { index: true, follow: true },
  // Set NEXT_PUBLIC_GSC_VERIFICATION in Vercel once the property is added in Search Console
  // (only needed for the HTML-tag method; DNS verification of the domain property needs nothing here).
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION
    ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION }
    : undefined,
  icons: {
    icon: [
      { url: "/images/rwcc.png", type: "image/png" },
      { url: "/icon.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    shortcut: ["/images/rwcc.png"],
    apple: [
      { url: "/images/rwcc.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

const orgSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "RWCC",
      url: SITE_URL,
      logo: `${SITE_URL}/images/rwcc.png`,
      description:
        "Free recognition programme for Indian restaurants, cloud kitchens and caterers that switch from plastic disposables to compostable bagasse tableware from Chuk.",
      knowsAbout: [
        "compostable disposable plates",
        "bagasse tableware",
        "food packaging for restaurants and cloud kitchens",
        "alternatives to plastic food containers",
        "single-use plastic ban in India",
      ],
      email: "hello@chuk.in",
      telephone: "+91-78000-34448",
      parentOrganization: { "@type": "Organization", name: "Chuk", url: "https://chuk.in" },
      sameAs: ["https://www.instagram.com/chukitnow/", "https://chuk.in"],
      areaServed: { "@type": "Country", name: "India" },
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE_NAME,
      inLanguage: "en-IN",
      publisher: { "@id": `${SITE_URL}/#organization` },
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: SITE_URL,
      name: TITLE,
      description: DESCRIPTION,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#organization` },
      audience: { "@type": "Audience", audienceType: "Restaurant owners, cloud kitchens, caterers and QSR operators in India" },
      mentions: [
        { "@type": "Thing", name: "Compostable disposable plates" },
        { "@type": "Thing", name: "Bagasse food containers" },
        { "@type": "Thing", name: "Single-use plastic ban (India)" },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <head>
        <link rel="icon" href="/images/rwcc.png" type="image/png" />
        <link rel="shortcut icon" href="/images/rwcc.png" type="image/png" />
        <link rel="apple-touch-icon" href="/images/rwcc.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col font-['Karbon'] bg-[#F2DABB] text-[#942A45]">
        {children}
        <Script src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`} strategy="afterInteractive" />
        <Script id="ga4" strategy="afterInteractive">
          {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
        </Script>
      </body>
    </html>
  );
}
