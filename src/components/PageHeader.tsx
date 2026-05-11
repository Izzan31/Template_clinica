import type { ReactNode } from "react";
import { PageHero } from "@/components/PageHero";

type PageHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageHeader({
  eyebrow,
  title,
  description,
  children
}: PageHeaderProps) {
  return (
    <PageHero description={description} eyebrow={eyebrow} title={title}>
      {children}
    </PageHero>
  );
}
