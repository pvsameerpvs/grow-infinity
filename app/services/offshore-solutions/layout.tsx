import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offshore Company Formation UAE | Grow Infinity",
  description:
    "Set up a UAE offshore company for asset protection, privacy, and tax efficiency. RAK ICC, JAFZA offshore, and Ajman offshore options available.",
  alternates: {
    canonical: "https://growinfinity.ae/services/offshore-solutions",
  },
  openGraph: {
    title: "Offshore Company Formation UAE | Grow Infinity",
    description:
      "Set up a UAE offshore company for asset protection, privacy, and tax efficiency. RAK ICC, JAFZA offshore, and Ajman offshore options.",
    url: "https://growinfinity.ae/services/offshore-solutions",
    images: [
      {
        url: "https://growinfinity.ae/logo-black.png",
        width: 1200,
        height: 630,
        alt: "Offshore Company Formation UAE",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
