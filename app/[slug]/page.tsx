import React from 'react';
import { notFound } from 'next/navigation';
import ServicePage from '@/components/ServicePage';
import { SERVICES } from '@/constants/services';
import { Metadata } from 'next';

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
      title: 'Service Not Found',
    };
  }

  return {
    title: `${service.title} | Grow Infinity UAE`,
    description: service.description[0],
    openGraph: {
      title: service.title,
      description: service.description[0],
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  return (
    <ServicePage
      title={service.title}
      subtitle={service.subtitle}
      description={service.description}
      advantages={service.advantages}
      sections={service.sections}
    />
  );
}
