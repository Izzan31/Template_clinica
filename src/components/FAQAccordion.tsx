import { ChevronDown } from "lucide-react";

type FAQAccordionProps = {
  items: readonly {
    question: string;
    answer: string;
  }[];
};

export function FAQAccordion({ items }: FAQAccordionProps) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <details
          className="group rounded-[22px] border border-[var(--color-border-soft)] bg-[var(--color-surface)] p-5 shadow-sm transition duration-300 hover:border-[var(--color-accent)] hover:shadow-soft"
          key={item.question}
        >
          <summary className="flex cursor-pointer items-start justify-between gap-4 text-left text-base font-semibold text-[var(--color-text-dark)]">
            {item.question}
              <ChevronDown className="mt-1 h-5 w-5 shrink-0 text-[var(--color-primary)] transition group-open:rotate-180" />
          </summary>
          <p className="mt-4 text-sm leading-7 text-[var(--color-text-muted)]">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
