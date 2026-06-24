import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "All Business Services | Grow Infinity UAE",
  description:
    "Explore our full range of business setup, company formation, banking, compliance, and corporate support services in Dubai and the UAE.",
  alternates: {
    canonical: "https://growinfinity.ae/services",
  },
  openGraph: {
    title: "All Business Services | Grow Infinity UAE",
    description:
      "Explore our full range of business setup, company formation, banking, compliance, and corporate support services in Dubai and the UAE.",
    url: "https://growinfinity.ae/services",
    images: [
      {
        url: "https://growinfinity.ae/logo-black.png",
        width: 1200,
        height: 630,
        alt: "Grow Infinity Services",
      },
    ],
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
