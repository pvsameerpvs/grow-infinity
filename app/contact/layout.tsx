import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | Grow Infinity UAE",
  description:
    "Get in touch with Grow Infinity for business setup, company formation, banking, and compliance services in Dubai and the UAE.",
  alternates: {
    canonical: "https://growinfinity.ae/contact",
  },
  openGraph: {
    title: "Contact Grow Infinity | Business Setup Experts",
    description:
      "Get in touch with Grow Infinity for business setup, company formation, banking, and compliance services in Dubai and the UAE.",
    url: "https://growinfinity.ae/contact",
    images: [
      {
        url: "https://growinfinity.ae/logo-black.png",
        width: 1200,
        height: 630,
        alt: "Contact Grow Infinity",
      },
    ],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
