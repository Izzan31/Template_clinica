import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  className?: string;
};

export function PageShell({ children, className = "" }: PageShellProps) {
  return (
    <main className={`bg-[var(--color-background)] ${className}`}>
      {children}
    </main>
  );
}
