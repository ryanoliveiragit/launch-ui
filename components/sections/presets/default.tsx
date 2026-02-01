import { Section } from "../../ui/section";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { cn } from "@/lib/utils";

const presets = [
  {
    id: "basico",
    title: "Básico",
    subtitle: "Seguro / baixo risco",
    description:
      "Otimizações essenciais para ganho de FPS sem quebrar nada do uso diário: plano de energia ultra performance, ajustes de NTFS, limpeza de lixos, desativação de Game DVR/AppCapture e redução de telemetria leve. É o preset recomendado para o primeiro uso e para usuários que não querem perder funcionalidades do Windows.",
    variant: "default" as const,
  },
  {
    id: "intermediario",
    title: "Intermediário",
    subtitle: "Alto ganho, algumas concessões",
    description:
      "Ativa tweaks que atacam diretamente latência e overhead de sistema: desativa VBS, ajusta Win32PrioritySeparation, habilita/ajusta HAGS, mexe em NetworkThrottling, corta serviços e tarefas de diagnóstico/telemetria e desliga crash dumps. Ideal para quem prioriza desempenho, aceita perder algumas automações e está disposto a testar impacto em seus jogos.",
    variant: "glow" as const,
  },
  {
    id: "avancado",
    title: "Avançado",
    subtitle: "Hardcore / máximo desempenho",
    description:
      "Vai ao limite: desativa dezenas de tarefas e serviços em background (incluindo agendamentos de update, alguns componentes do Xbox, biometria e manutenção), limpa logs, reduz processos ao mínimo e aplica ajustes de power/PCIe e interface para uma sessão de jogo o mais \"crua\" possível. Pensado para players competitivos e power users que entendem os riscos e querem o Windows como um \"firmware de jogo\".",
    variant: "default" as const,
  },
];

export default function Presets({ className }: { className?: string }) {
  return (
    <Section id="presets" className={className}>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 sm:gap-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Presets de Otimização
          </h2>
          <p className="text-muted-foreground max-w-xl text-base font-medium sm:text-lg">
            Básico, Intermediário e Avançado — do primeiro uso ao perfil competitivo.
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-4xl gap-4 md:grid-cols-3">
          {presets.map((p) => (
            <Card
              key={p.id}
              className={cn(
                "glass-liquid flex flex-col border-0 bg-transparent shadow-none",
                p.variant === "glow" && "ring-1 ring-brand/20",
              )}
            >
              <CardHeader>
                <CardTitle className="text-xl">{p.title}</CardTitle>
                <CardDescription className="font-medium text-foreground/80">
                  {p.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
