import { ReactNode } from "react";

interface SectionProps {
  id: string;
  title: string;
  children: ReactNode;
  subtitle?: string;
}

export function Section({ id, title, subtitle, children }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-b border-stone-200/60 py-16 px-6 md:py-24"
    >
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="mb-2 font-serif text-3xl font-semibold tracking-tight text-stone-900 md:text-4xl">
          {title}
        </h2>
        {subtitle && (
          <p className="mb-12 text-stone-500">{subtitle}</p>
        )}
        <div className="prose prose-stone max-w-none">{children}</div>
      </div>
    </section>
  );
}
