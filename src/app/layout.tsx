import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurants Who Care Club By Chuk",
  description: "Recognising restaurants that serve on compostable tableware.",
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
      </head>
      <body className="min-h-full flex flex-col font-['Karbon'] bg-[#F2DABB] text-[#942A45]">
        {children}
      </body>
    </html>
  );
}
