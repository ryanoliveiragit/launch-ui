import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";
import { SectionHeader } from "../../ui/section-header";

const metrics = [
  {
    label: "Uso de CPU",
    subtitle: "Redução de picos em segundo plano",
    before: "2–10%",
    after: "~0%",
  },
  {
    label: "Uso de RAM",
    subtitle: "~1,5 GB liberados na inicialização",
    before: "~2,9 GB",
    after: "~1,4 GB",
  },
  {
    label: "FPS em jogos",
    subtitle: "Maior FPS médio em títulos competitivos",
    before: "217 FPS",
    after: "366 FPS",
  },
];

export default function Benchmarks() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          label="Benchmarks"
          title={
            <>
              Synapse <span className="text-muted-foreground">vs</span> Windows
              padrão
            </>
          }
          description="Menos uso de recursos, mais privacidade e desempenho. Vale a pena considerar a troca."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {metrics.map((m) => (
            <div
              key={m.label}
              className={cn(
                "rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-brand/20 lg:p-8",
              )}
            >
              <p className="text-muted-foreground text-sm font-medium">
                {m.label}
              </p>
              <p className="mt-2 text-lg font-semibold">{m.subtitle}</p>
              <div className="mt-6 flex items-center justify-center gap-4 text-sm">
                <span className="text-muted-foreground">{m.before}</span>
                <span className="text-muted-foreground">→</span>
                <span className="text-brand font-semibold">{m.after}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
