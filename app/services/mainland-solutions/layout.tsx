import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mainland Company Formation | Grow Infinity UAE",
  description:
    "Setup a UAE mainland company with 100% foreign ownership. Full market access, government contracts, and expert guidance from incorporation to banking.",
  alternates: {
    canonical: "https://growinfinity.ae/services/mainland-solutions",
  },
  openGraph: {
    title: "Mainland Company Formation UAE | Grow Infinity",
    description:
      "Setup a UAE mainland company with 100% foreign ownership. Full market access, government contracts, and expert guidance.",
    url: "https://growinfinity.ae/services/mainland-solutions",
    images: [
      {
        url: "https://growinfinity.ae/logo-black.png",
        width: 1200,
        height: 630,
        alt: "Mainland Company Formation UAE",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
