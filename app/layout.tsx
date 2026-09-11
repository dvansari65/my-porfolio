import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata: Metadata = {
  title: "Danish Ansari · Software Engineer",
  description:
    "Rust, distributed systems and Web3 infrastructure. Open-source contributor to Tycho, Firewood, Surfpool and Wincode.",
  metadataBase: new URL("https://dvansari.dev"),
  openGraph: {
    title: "Danish Ansari · Software Engineer",
    description:
      "Rust, distributed systems and Web3 infrastructure. Open-source contributor to Tycho, Firewood, Surfpool and Wincode.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
