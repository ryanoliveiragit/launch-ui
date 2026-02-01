import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";
import { SectionHeader } from "../../ui/section-header";

const features = [
  {
    title: "Privacidade por padrão",
    description:
      "Menos telemetria e coleta de dados, com políticas focadas em privacidade.",
  },
  {
    title: "Desempenho otimizado",
    description:
      "Melhor responsividade e menor latência, sem perder estabilidade.",
  },
  {
    title: "Segurança flexível",
    description:
      "Defender e SmartScreen configuráveis. Você escolhe o equilíbrio entre proteção e performance.",
  },
  {
    title: "Usabilidade limpa",
    description:
      "Sem bloatware e sem anúncios, interface mais rápida e objetiva.",
  },
  {
    title: "Sempre atualizado",
    description:
      "Recebe patches de segurança e atualizações cumulativas; atualizações de recurso opcionais.",
  },
  {
    title: "Desktop e laptop",
    description:
      "Configurações de energia para até ~3h a mais de bateria em testes internos.",
  },
  {
    title: "Aberto e transparente",
    description:
      "Projeto open-source no GitHub. Você pode auditar e customizar tudo.",
  },
  {
    title: "Legal e reversível",
    description:
      "Compatível com os termos da Microsoft (sem redistribuir ISO). Uso tranquilo.",
  },
];

export default function Features() {
  return (
    <Section id="por-que" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          label="Benefícios"
          title={
            <>
              Por que escolher o <span className="text-brand">Synapse</span>?
            </>
          }
          description="Uma modificação leve do Windows, feita para entusiastas que querem desempenho e confiança sem abrir mão da funcionalidade."
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f) => (
            <div
              key={f.title}
              className={cn(
                "rounded-2xl border border-border bg-card p-5 transition-colors hover:border-brand/30 lg:p-6",
              )}
            >
              <h3 className="font-semibold">{f.title}</h3>
              <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
