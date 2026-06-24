import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UAE Residency & Golden Visa | Grow Infinity",
  description:
    "Secure your future in the UAE with a Golden Visa. 10-year renewable residency, sponsor your family, and enjoy tax-free living in Dubai.",
  alternates: {
    canonical: "https://growinfinity.ae/services/residency-solutions",
  },
  openGraph: {
    title: "UAE Residency & Golden Visa | Grow Infinity",
    description:
      "Secure your future in the UAE with a Golden Visa. 10-year renewable residency, sponsor your family, and enjoy tax-free living.",
    url: "https://growinfinity.ae/services/residency-solutions",
    images: [
      {
        url: "https://growinfinity.ae/logo-black.png",
        width: 1200,
        height: 630,
        alt: "UAE Residency & Golden Visa",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
