import type { Metadata } from "next";
import { Caveat, Montserrat, Playfair_Display, Marck_Script } from "next/font/google";
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

const playfair = Playfair_Display({
  subsets: ["latin", "cyrillic"],
  variable: "--font-playfair",
  display: "swap",
});

const marckScript = Marck_Script({
  subsets: ["latin", "cyrillic"],
  weight: "400",
  variable: "--font-marck",
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
    <html lang="ru" className={`${caveat.variable} ${montserrat.variable} ${playfair.variable} ${marckScript.variable}`}>
      <body className="font-sans antialiased text-navy">{children}</body>
    </html>
  );
}
