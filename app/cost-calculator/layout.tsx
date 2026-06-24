import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Setup Cost Calculator | Grow Infinity UAE",
  description:
    "Calculate your UAE business setup cost instantly. Get a customized quote for company formation, license, visa, and office setup in Dubai.",
  alternates: {
    canonical: "https://growinfinity.ae/cost-calculator",
  },
  openGraph: {
    title: "UAE Business Setup Cost Calculator | Grow Infinity",
    description:
      "Calculate your UAE business setup cost instantly. Get a customized quote for company formation, license, visa, and office setup.",
    url: "https://growinfinity.ae/cost-calculator",
    images: [
      {
        url: "https://growinfinity.ae/logo-black.png",
        width: 1200,
        height: 630,
        alt: "UAE Business Setup Cost Calculator",
      },
    ],
  },
};

export default function CalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
