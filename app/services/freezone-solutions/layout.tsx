import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Zone Company Setup UAE | Grow Infinity",
  description:
    "Set up your business in a UAE free zone with 0% tax, 100% ownership, and full profit repatriation. Expert guidance across 40+ free zones including DMCC, IFZA, JAFZA.",
  alternates: {
    canonical: "https://growinfinity.ae/services/freezone-solutions",
  },
  openGraph: {
    title: "Free Zone Company Setup UAE | Grow Infinity",
    description:
      "Set up your business in a UAE free zone with 0% tax, 100% ownership, and full profit repatriation. Expert guidance across 40+ free zones.",
    url: "https://growinfinity.ae/services/freezone-solutions",
    images: [
      {
        url: "https://growinfinity.ae/logo-black.png",
        width: 1200,
        height: 630,
        alt: "Free Zone Company Setup UAE",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
