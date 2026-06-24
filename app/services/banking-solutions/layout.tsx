import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Corporate Banking Solutions UAE | Grow Infinity",
  description:
    "Open a corporate bank account in the UAE with priority banking support. Multi-currency accounts, trade finance, and banking compliance assistance.",
  alternates: {
    canonical: "https://growinfinity.ae/services/banking-solutions",
  },
  openGraph: {
    title: "Corporate Banking Solutions UAE | Grow Infinity",
    description:
      "Open a corporate bank account in the UAE with priority banking support. Multi-currency accounts, trade finance, and banking compliance.",
    url: "https://growinfinity.ae/services/banking-solutions",
    images: [
      {
        url: "https://growinfinity.ae/logo-black.png",
        width: 1200,
        height: 630,
        alt: "Corporate Banking Solutions UAE",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
