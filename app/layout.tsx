import type { Metadata } from "next";
import { Caveat, Montserrat } from "next/font/google";
import "./globals.css";

const caveat = Caveat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-caveat",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin", "cyrillic"],
  variable: "--font-montserrat",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Свадебное приглашение",
  description: "Мы женимся!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${caveat.variable} ${montserrat.variable}`}>
      <body className="font-sans antialiased text-navy">{children}</body>
    </html>
  );
}
