import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compliance & Tax Services UAE | Grow Infinity",
  description:
    "Stay compliant with UAE regulations. VAT registration, corporate tax advisory, PRO services, accounting, bookkeeping, and audit support.",
  alternates: {
    canonical: "https://growinfinity.ae/services/compliance-solutions",
  },
  openGraph: {
    title: "Compliance & Tax Services UAE | Grow Infinity",
    description:
      "Stay compliant with UAE regulations. VAT registration, corporate tax advisory, PRO services, accounting, bookkeeping, and audit support.",
    url: "https://growinfinity.ae/services/compliance-solutions",
    images: [
      {
        url: "https://growinfinity.ae/logo-black.png",
        width: 1200,
        height: 630,
        alt: "Compliance & Tax Services UAE",
      },
    ],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
