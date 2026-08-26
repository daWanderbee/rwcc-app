import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RWCC by Chuk",
  description: "Recognising restaurants that serve on compostable tableware.",
  icons: {
    icon: [
      { url: "/images/rwcc.png", type: "image/png" },
    ],
    shortcut: ["/images/rwcc.png"],
    apple: ["/images/rwcc.png"],
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
      <body className="min-h-full flex flex-col font-['Karbon'] bg-[#F2DABB] text-[#942A45]">
        {children}
      </body>
    </html>
  );
}
