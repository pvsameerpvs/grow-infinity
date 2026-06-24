import React from "react";
import { notFound } from "next/navigation";
import ServicePage from "@/components/ServicePage";
import { SERVICES } from "@/constants/services";
import { Metadata } from "next";

const siteUrl = "https://growinfinity.ae";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  const description = service.description[0]?.slice(0, 160);
  const canonicalPath = `/${service.slug}`;

  return {
    title: service.title,
    description: description,
    alternates: {
      canonical: `${siteUrl}${canonicalPath}`,
    },
    openGraph: {
      title: `${service.title} | Grow Infinity UAE`,
      description: description,
      url: `${siteUrl}${canonicalPath}`,
      siteName: "Grow Infinity",
      images: [
        {
          url: `${siteUrl}/logo-black.png`,
          width: 1200,
          height: 630,
          alt: service.title,
        },
      ],
      locale: "en_AE",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | Grow Infinity UAE`,
      description: description,
      images: [`${siteUrl}/logo-black.png`],
    },
  };
}

function generateFaqSchema(service: typeof SERVICES[0]) {
  const faqs = [
    {
      question: `What is ${service.title}?`,
      answer: service.description[0]?.slice(0, 300) || "",
    },
    {
      question: `What are the benefits of ${service.title.toLowerCase()}?`,
      answer: service.advantages.join(". ") + ".",
    },
    {
      question: `How long does it take to complete ${service.title.toLowerCase()}?`,
      answer: `The timeline for ${service.title.toLowerCase()} varies based on your specific requirements. Contact our team for a personalized timeline estimate.`,
    },
    {
      question: `How can Grow Infinity help with ${service.title.toLowerCase()}?`,
      answer: "Grow Infinity provides end-to-end support, handling all documentation, government liaison, and compliance requirements. Our team of experts guides you through every step of the process.",
    },
  ];

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const faqSchema = generateFaqSchema(service);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <ServicePage
        slug={service.slug}
        title={service.title}
        subtitle={service.subtitle}
        description={service.description}
        advantages={service.advantages}
        sections={service.sections}
        image={service.image}
      />
    </>
  );
}
