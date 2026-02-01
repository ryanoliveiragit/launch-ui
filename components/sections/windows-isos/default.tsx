import {
  CpuIcon,
  HardDriveIcon,
  ShieldCheckIcon,
} from "lucide-react";

import { cn } from "@/lib/utils";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../../ui/card";
import { ImageBlock } from "../../ui/image-block";
import { Section } from "../../ui/section";

const isos = [
  {
    id: "win11-gaming",
    title: "Windows 11 Gaming Edition",
    icon: <CpuIcon className="size-5 stroke-1" />,
    description:
      "ISO baseada em Windows 11 com serviços de telemetria removidos, Xbox Game Bar desativado, Windows Update otimizado, Defender ajustado para uso gamer, tema escuro padrão e otimizações de rede para baixa latência.",
  },
  {
    id: "win10-lite",
    title: "Windows 10 Lite",
    icon: <HardDriveIcon className="size-5 stroke-1" />,
    description:
      "Versão minimalista de Windows 10 apenas com o essencial para jogos: bloatware e apps OEM removidos, Cortana e OneDrive desativados, Microsoft Store opcional e serviços de background ajustados para não competir com o jogo.",
    variant: "glow" as const,
  },
  {
    id: "win11-pro",
    title: "Windows 11 Pro Otimizado",
    icon: <ShieldCheckIcon className="size-5 stroke-1" />,
    description:
      "Mantém recursos corporativos (BitLocker, Remote Desktop, Sandbox, Hyper‑V) mas com todas as otimizações de desempenho aplicadas, para quem precisa de máquina de trabalho + arena de jogos no mesmo sistema.",
  },
];

export default function WindowsIsos({ className }: { className?: string }) {
  return (
    <Section id="windows" className={className}>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 sm:gap-16">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 text-center">
          <h2 className="text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            Windows Otimizado (ISOs)
          </h2>
          <p className="text-muted-foreground max-w-xl text-base font-medium sm:text-lg">
            ISOs Windows 10 e 11 com perfis prontos para jogos.
          </p>
        </div>
        <ImageBlock
          src="/dashboard-light.png"
          srcDark="/dashboard-dark.png"
          alt="Windows otimizado"
          size="md"
          className="w-full"
        />
        <div className="mx-auto grid w-full max-w-4xl gap-4 md:grid-cols-3">
          {isos.map((iso) => (
            <Card
              key={iso.id}
              className={cn(
                "glass-liquid border-0 bg-transparent shadow-none",
                iso.variant === "glow" && "ring-1 ring-brand/20",
              )}
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <span className="text-muted-foreground">{iso.icon}</span>
                  {iso.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-sm leading-relaxed">
                  {iso.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Section>
  );
}
