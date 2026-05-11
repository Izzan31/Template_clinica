import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { PageShell } from "@/components/PageShell";
import { ServiceHero } from "@/components/ServiceHero";
import { ServicePageLayout } from "@/components/ServicePageLayout";
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
          <div className="grid gap-8 border-y border-[var(--color-border-soft)] py-10 lg:grid-cols-[0.74fr_1.26fr] lg:items-start">
            <div>
              <Badge>Outros serviços</Badge>
              <h2 className="mt-4 text-4xl font-semibold leading-tight tracking-tight text-[var(--color-text-dark)]">
                Continue explorando cuidados disponíveis
              </h2>
            </div>
            <div className="grid gap-0">
              {relatedServices.map((item, index) => (
                <Link
                  className="group grid gap-4 border-b border-[var(--color-border-soft)] py-5 transition duration-300 last:border-b-0 hover:pl-2 sm:grid-cols-[72px_1fr_auto] sm:items-center"
                  href={`/servicos/${item.slug}`}
                  key={item.slug}
                >
                  <span className="text-3xl font-semibold tracking-tight text-[rgba(6,42,56,0.18)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block text-lg font-semibold text-[var(--color-text-dark)]">
                      {item.shortTitle}
                    </span>
                    <span className="mt-1 block text-sm leading-6 text-[var(--color-text-muted)]">
                      {item.description}
                    </span>
                  </span>
                  <ArrowRight className="h-5 w-5 text-[var(--color-primary)] transition duration-300 group-hover:translate-x-1" />
                </Link>
              ))}
            </div>
          </div>
        </Container>
      </section>
    </PageShell>
  );
}
