import React from "react";

const siteUrl = "https://growinfinity.ae";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grow Infinity",
  url: siteUrl,
};

export const metadata = {
  title: "Privacy Policy | Grow Infinity UAE",
  description:
    "Grow Infinity Privacy Policy. Learn how we collect, use, and protect your personal information when you use our business setup and corporate services.",
  alternates: {
    canonical: `${siteUrl}/privacy-policy`,
  },
  openGraph: {
    title: "Privacy Policy | Grow Infinity UAE",
    description:
      "Grow Infinity Privacy Policy. Learn how we collect, use, and protect your personal information.",
    url: `${siteUrl}/privacy-policy`,
    images: [{ url: `${siteUrl}/logo-black.png`, width: 1200, height: 630, alt: "Grow Infinity" }],
  },
};

export default function PrivacyPolicy() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Privacy Policy</h1>
          <p className="text-foreground/50 text-sm mb-12">Last updated: June 2025</p>

          <div className="space-y-8 text-foreground/70 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p>
                Grow Infinity ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              <p>We may collect the following types of information:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li><strong>Personal Information:</strong> Name, email address, phone number, and other contact details you provide through our forms.</li>
                <li><strong>Business Information:</strong> Company name, business activity, jurisdiction preferences, and other details related to our services.</li>
                <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies when you interact with our website.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p>We use your information for the following purposes:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>To provide and manage our business setup and corporate services</li>
                <li>To communicate with you about your inquiries and requests</li>
                <li>To improve our website and services</li>
                <li>To comply with legal and regulatory obligations</li>
                <li>To send relevant updates and marketing communications (with your consent)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Data Protection</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. We use secure servers, encryption, and access controls to safeguard your data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Third-Party Disclosure</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or as necessary to provide our services (e.g., government authorities for license processing).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Cookies</h2>
              <p>
                Our website may use cookies to enhance your browsing experience. You can choose to disable cookies through your browser settings. However, this may affect the functionality of certain features on our website.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Access your personal information held by us</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Withdraw consent for marketing communications</li>
                <li>Lodge a complaint with relevant data protection authorities</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy or how we handle your data, please contact us:
              </p>
              <div className="mt-4 p-6 bg-foreground/5 rounded-2xl space-y-2">
                <p><strong>Email:</strong> info@growinfinity.ae</p>
                <p><strong>Phone:</strong> +971 50 866 3700</p>
                <p><strong>Address:</strong> Office 1517, 15th Floor, Burjuman Business Tower, Shaikh Khalifa Bin Zayed Street, Dubai, UAE</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </>
  );
}
