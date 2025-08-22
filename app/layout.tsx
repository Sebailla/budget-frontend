import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../styles/globals.css"

const poppins = Poppins({
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
        className={poppins.className}
      >
        {children}
      </body>
    </html>
  );
}
