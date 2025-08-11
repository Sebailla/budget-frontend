import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets:['latin']})
const outfit = Outfit({subsets:['latin']})

export const metadata: Metadata = {
  title: "Budget App",
  description: "The best web app to generate and organize your budgets",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
      >
        {children}
      </body>
    </html>
  );
}
