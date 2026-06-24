import React from "react";

const siteUrl = "https://growinfinity.ae";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Grow Infinity",
  url: siteUrl,
};

export const metadata = {
  title: "Terms of Service | Grow Infinity UAE",
  description:
    "Grow Infinity Terms of Service. Read the terms and conditions governing the use of our business setup and corporate services in Dubai and the UAE.",
  alternates: {
    canonical: `${siteUrl}/terms-of-service`,
  },
  openGraph: {
    title: "Terms of Service | Grow Infinity UAE",
    description:
      "Read the terms and conditions governing the use of our business setup and corporate services in Dubai and the UAE.",
    url: `${siteUrl}/terms-of-service`,
    images: [{ url: `${siteUrl}/logo-black.png`, width: 1200, height: 630, alt: "Grow Infinity" }],
  },
};

export default function TermsOfService() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <main className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-8">Terms of Service</h1>
          <p className="text-foreground/50 text-sm mb-12">Last updated: June 2025</p>

          <div className="space-y-8 text-foreground/70 leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing or using the Grow Infinity website and services, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you should not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Services Description</h2>
              <p>
                Grow Infinity provides business setup, company formation, corporate banking, compliance, tax advisory, and related corporate services in the UAE, India, Saudi Arabia, and Qatar. We act as a consulting and service facilitation partner, assisting clients with documentation, government liaison, and compliance requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Client Responsibilities</h2>
              <p>As a client of Grow Infinity, you agree to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Provide accurate and complete information required for our services</li>
                <li>Timely review and approval of documents prepared on your behalf</li>
                <li>Comply with all applicable laws and regulations in your jurisdiction</li>
                <li>Make timely payments for services rendered as per the agreed fee structure</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Intellectual Property</h2>
              <p>
                All content on our website, including text, graphics, logos, and software, is the property of Grow Infinity and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our prior written consent.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Limitation of Liability</h2>
              <p>
                Grow Infinity shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability is limited to the amount paid by you for the specific service giving rise to the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Third-Party Services</h2>
              <p>
                We may link to or facilitate services provided by third parties. We do not endorse or assume responsibility for the accuracy, completeness, or reliability of any third-party services, content, or websites.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of the United Arab Emirates. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts of Dubai, UAE.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting on our website. Your continued use of our services after changes constitutes acceptance of the revised terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Contact Information</h2>
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
