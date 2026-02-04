import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Merriweather_Sans, Oswald } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "next-themes";

const plusJakarta = Plus_Jakarta_Sans({ 
  subsets: ["latin"],
  variable: '--font-plus-jakarta',
});

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter',
});

const merriweatherSans = Merriweather_Sans({
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-merriweather-sans',
});

const oswald = Oswald({
  subsets: ["latin"],
  weight: ['200', '300', '400', '500', '600', '700'],
  variable: '--font-oswald',
});

export const metadata: Metadata = {
  title: "Grow Infinity | Premium UAE Business Setup & Corporate Advisory",
  description: "Architecting Businesses. Securing Legacies. Growing Infinitely. Elite business setup and banking advisory in Dubai, UAE.",
  keywords: "business setup dubai, uae company formation, banking advisory uae, golden visa, corporate tax uae",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${plusJakarta.variable} ${merriweatherSans.variable} ${oswald.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
