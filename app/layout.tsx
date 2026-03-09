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

export const metadata: Metadata = {
  title: "Grow Infinity | Premium UAE Business Setup & Corporate Advisory",
  description:
    "Architecting Businesses. Securing Legacies. Growing Infinitely. Elite business setup and banking advisory in Dubai, UAE.",
  keywords:
    "business setup dubai, uae company formation, banking advisory uae, golden visa, corporate tax uae",
  metadataBase: new URL("https://grow-infinity.com"), // Replace with actual domain
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [
      { url: "/favicon.png?v=1", sizes: "any" },
      { url: "/favicon.png?v=1", type: "image/png" }
    ],
    shortcut: "/favicon.png?v=1",
    apple: "/favicon.png?v=1",
  },
  openGraph: {
    title: "Grow Infinity | Premium UAE Business Setup & Corporate Advisory",
    description: "Architecting Businesses. Securing Legacies. Growing Infinitely. Elite business setup and banking advisory in Dubai, UAE.",
    url: "https://grow-infinity.com",
    siteName: "Grow Infinity",
    images: [
      {
        url: "/logo-black.png",
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
    title: "Grow Infinity | Premium UAE Business Setup",
    description: "Elite business setup and banking advisory in Dubai, UAE.",
    images: ["/logo-black.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakarta.variable} ${merriweatherSans.variable} ${oswald.variable} ${cormorant.variable} font-sans antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" forcedTheme="light" enableSystem={false}>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
