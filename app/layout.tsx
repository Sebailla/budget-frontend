import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "../styles/globals.css"

const geist = Geist({
  weight: ['300', '500', '700'],
  subsets: ['latin'],
})

// chivo - 

export const metadata: Metadata = {
  title: "Budget Tracker",
  description: "The best web app to generate and organize your budgets",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={geist.className}
      >
        {children}
      </body>
    </html>
  );
}
