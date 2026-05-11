import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { ServiceHero } from "@/components/ServiceHero";
import { ServicePageLayout } from "@/components/ServicePageLayout";
import { ServicePreviewCard } from "@/components/ServicePreviewCard";
import { clinicConfig, getServiceBySlug } from "@/config/clinic.config";

type ServicePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return clinicConfig.services.map((service) => ({
    slug: service.slug
  }));
}

export async function generateMetadata({
  params
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    return {};
  }

  return {
    title: `${service.seoTitle} | ${clinicConfig.name}`,
    description: service.description
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);

  if (!service) {
    notFound();
  }

  const relatedServices = clinicConfig.services
    .filter((item) => item.slug !== service.slug)
    .slice(0, 3);

  return (
    <PageShell>
      <ServiceHero service={service} />
      <ServicePageLayout service={service} />

      <section className="bg-[var(--color-background)] pb-20 sm:pb-24">
        <Container>
          <div className="mb-8 max-w-2xl">
            <Badge>Outros serviços</Badge>
            <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)]">
              Continue explorando cuidados disponíveis
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {relatedServices.map((item) => (
              <ServicePreviewCard key={item.slug} service={item} />
            ))}
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
