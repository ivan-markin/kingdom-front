import type { Metadata } from "next";
import { Geologica } from "next/font/google";
import "./globals.scss";

const geologica = Geologica({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
  title: "KingDom — производство модульных домов",
  description: "Модульные дома в Подмосковье",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={geologica.className}>
        {children}
      </body>
    </html>
  );
}
