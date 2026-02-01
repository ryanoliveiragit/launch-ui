import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";
import { SectionHeader } from "../../ui/section-header";

const pillars = [
  {
    title: "Desempenho",
    description:
      "Menos processos em segundo plano, telemetria desativada e opções de economia de energia configuráveis.",
  },
  {
    title: "Usabilidade",
    description:
      "Sem anúncios do Windows e sem aquelas irritações que atrapalham o dia a dia.",
  },
  {
    title: "Privacidade",
    description:
      "Menos rastreamento da Microsoft, menos apps pré-instalados e menos bloatware.",
  },
];

export default function WhyUpgrade() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          label="Por que mudar"
          title={
            <>
              Windows pesado e invasivo.
              <br />
              <span className="text-brand">Atualize para o Synapse.</span>
            </>
          }
          description="Com o tempo, o Windows ficou lento e cheio de telemetria. O Synapse devolve desempenho e privacidade: mais responsivo, menos irritante e com melhor FPS em jogos."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className={cn(
                "rounded-2xl border border-border bg-card p-6 transition-colors hover:border-brand/30 lg:p-8",
              )}
            >
              <h3 className="text-lg font-semibold text-brand">{p.title}</h3>
              <p className="text-muted-foreground mt-3 text-sm leading-relaxed">
                {p.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
