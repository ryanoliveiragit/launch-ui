import Image from "next/image";
import { Star } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Badge } from "../../ui/badge";
import { Button } from "../../ui/button";
import { Section } from "../../ui/section";

/** Placeholder: substitua por screenshot real do seu app */
const HERO_IMAGE =
  "https://picsum.photos/seed/synapse-hero/1200/700";

export default function Hero() {
  return (
    <Section className={cn("fade-bottom overflow-hidden pb-4 sm:pb-8")}>
      <div className="mx-auto max-w-6xl px-4 pt-12 sm:pt-16 md:pt-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 lg:items-center">
          <div className="lg:col-span-6">
            <p className="text-brand mb-4 text-sm font-semibold uppercase tracking-wider">
              App + Sistema operacional
            </p>
            <h1 className="animate-appear from-foreground to-foreground dark:to-muted-foreground max-w-xl bg-linear-to-r bg-clip-text text-4xl font-bold leading-[1.1] text-balance text-transparent sm:text-5xl md:text-6xl">
              Seu app. Seu Windows. Otimizados.
            </h1>
            <p className="text-muted-foreground animate-appear mt-6 max-w-lg text-balance text-lg leading-relaxed opacity-0 delay-100">
              O Synapse é o seu app de otimização e, se quiser, um sistema
              operacional leve: menos bloatware, mais desempenho e privacidade
              para entusiastas e jogadores.
            </p>
            <div className="animate-appear mt-6 opacity-0 delay-200">
              <Badge variant="outline" className="text-sm font-normal">
                {siteConfig.version} — {siteConfig.versionDate}
              </Badge>
            </div>
            <div className="animate-appear mt-8 flex flex-wrap gap-4 opacity-0 delay-300">
              <Button variant="default" size="lg" asChild>
                <a href="#instalacao">Começar</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a
                  href={siteConfig.links.github}
                  className="flex items-center gap-2"
                >
                  <Star className="size-4" />
                  Star no GitHub
                </a>
              </Button>
            </div>
          </div>
          <div className="relative lg:col-span-6">
            <div className="animate-appear relative overflow-hidden rounded-2xl border border-border bg-card shadow-xl opacity-0 delay-500">
              <Image
                src={HERO_IMAGE}
                alt="Interface do app Synapse (placeholder — substitua por screenshot real)"
                width={1200}
                height={700}
                className="h-auto w-full object-cover"
                priority
                unoptimized
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/50" />
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
