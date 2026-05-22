import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "MyTurn | Your Trusted Digital Contribution Community",
  description:
    "MyTurn helps people save together, grow financially, and access structured contribution groups with transparency and trust. Join verified savings circles today.",
  keywords: [
    "MyTurn",
    "contribution groups",
    "community savings",
    "susu",
    "Ghana fintech",
    "savings circles",
  ],
  icons: {
    icon: [
      { url: "/images/myturn-logo-icon.png", type: "image/png" },
    ],
    apple: "/images/myturn-logo-icon.png",
  },
  openGraph: {
    title: "MyTurn | Digital Contribution Community",
    description:
      "Save together, grow financially. Join structured contribution groups with transparency and trust.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-gray-900 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
