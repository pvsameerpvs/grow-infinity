import type { Metadata } from "next";
import {
  Plus_Jakarta_Sans,
  Inter,
  Merriweather_Sans,
  Oswald,
  Cormorant_Garamond,
} from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const gaId = process.env.NEXT_PUBLIC_GA_ID || "";
const gscId = process.env.NEXT_PUBLIC_GSC_ID || "";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-merriweather",
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  style: ["normal", "italic"],
});

const siteUrl = "https://growinfinity.ae";

export const metadata: Metadata = {
  title: {
    default: "Grow Infinity | Business Setup in Dubai & UAE",
    template: "%s | Grow Infinity UAE",
  },
  description:
    "Start and grow your business in Dubai and the UAE with company formation, trade licenses, bank account support, visas, tax and compliance help.",
  metadataBase: new URL(siteUrl),
  applicationName: "Grow Infinity",
  creator: "Grow Infinity",
  publisher: "Grow Infinity",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.png?v=2", sizes: "any" },
      { url: "/favicon.png?v=2", type: "image/png" }
    ],
    shortcut: "/favicon.png?v=2",
    apple: "/favicon.png?v=2",
  },
  openGraph: {
    title: "Grow Infinity | Business Setup in Dubai & UAE",
    description:
      "Company formation, trade licenses, bank account support, visas, tax and compliance help for businesses in Dubai and the UAE.",
    url: siteUrl,
    siteName: "Grow Infinity",
    images: [
      {
        url: `${siteUrl}/logo-black.png`,
        width: 1200,
        height: 630,
        alt: "Grow Infinity Logo",
      },
    ],
    locale: "en_AE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grow Infinity | Business Setup in Dubai & UAE",
    description:
      "Simple business setup, company formation, banking, visa, tax and compliance support in Dubai and the UAE.",
    images: [`${siteUrl}/logo-black.png`],
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grow Infinity",
  url: siteUrl,
  logo: `${siteUrl}/logo-black.png`,
  description: "Business setup and corporate services provider in Dubai, UAE. Specializing in company formation, trade licenses, banking, visas, tax and compliance.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office 1517, 15th Floor, Burjuman Business Tower, Shaikh Khalifa Bin Zayed Street",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+971-50-866-3700",
    contactType: "customer service",
    email: "info@growinfinity.ae",
  },
  sameAs: [
    "https://www.instagram.com/grow.infinity_?igsh=MW50eWtmOXhzMG1peQ==",
  ],
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Grow Infinity",
  image: `${siteUrl}/logo-black.png`,
  url: siteUrl,
  telephone: "+971-50-866-3700",
  email: "info@growinfinity.ae",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Office 1517, 15th Floor, Burjuman Business Tower, Shaikh Khalifa Bin Zayed Street",
    addressLocality: "Dubai",
    addressCountry: "AE",
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {gscId && (
          <meta name="google-site-verification" content={gscId} />
        )}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${merriweatherSans.variable} ${oswald.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        {gaId && (
          <>
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} />
            <script
              dangerouslySetInnerHTML={{
                __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${gaId}');`,
              }}
            />
          </>
        )}
      </body>
    </html>
  );
}
