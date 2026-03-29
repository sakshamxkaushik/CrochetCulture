import type { Metadata } from "next";
import { Noto_Serif, Manrope } from "next/font/google";
import "./globals.css";

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"]
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"]
});

export const metadata: Metadata = {
  title: "Crochet Couture | Handcrafted Art by Reena",
  description: "Bespoke, deeply personal crochet art, bags, and accessories—handmade with love by artisan Reena.",
  keywords: "crochet, artisan, handcrafted, custom orders, bags, accessories",
  openGraph: {
    title: "Crochet Couture | Handcrafted Art by Reena",
    description: "Bespoke, deeply personal crochet art, bags, and accessories—handmade with love by artisan Reena.",
    type: "website"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${notoSerif.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
    >
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL,GRAD,opsz@400,0..1,0,24&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">{children}</body>
    </html>
  );
}
