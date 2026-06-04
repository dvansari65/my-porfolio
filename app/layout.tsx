import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";

export const metadata: Metadata = {
  title: "dvansari65 | Portfolio",
  description: "Portfolio of dvansari65",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
