import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurants Who Care Club | Powered by CHUK",
  description: "Recognising restaurants that serve on compostable tableware.",
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
      <body className="min-h-full flex flex-col font-['Karbon'] bg-[#F2DABB] text-[#3A2A2F]">
        {children}
      </body>
    </html>
  );
}
