import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
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
      <body className={`${inter.variable} ${plusJakarta.variable} font-sans antialiased`}>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
