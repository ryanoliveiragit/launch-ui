import { Section } from "../../ui/section";
import { ImageBlock } from "../../ui/image-block";

export default function WhatIs({
  title = "O que é o Synapse",
  body = "Synapse é um optimizer de Windows para gaming com foco em reduzir latência, estabilizar FPS e simplificar tweaks complexos em uma interface visual, escura e moderna. Em vez de dezenas de scripts soltos e guias confusos, você tem presets guiados, módulos avançados por categoria (kernel, CPU, memória, rede, I/O) e ferramentas extras como FPS Ultra e ISOs já tunadas para jogos.",
  showImage = true,
  className,
}: {
  title?: string;
  body?: string;
  showImage?: boolean;
  className?: string;
}) {
  return (
    <Section id="o-que-e" className={className}>
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-10 text-center sm:gap-12">
        <h2 className="text-3xl font-semibold leading-tight sm:text-4xl md:text-5xl">
          {title}
        </h2>
        <p className="text-muted-foreground max-w-2xl text-balance text-base font-medium sm:text-lg">
          {body}
        </p>
        {showImage && (
          <ImageBlock
            src="/synapsesite.png"
            srcDark="/dashboard-dark.png"
            alt="Interface do Synapse"
            size="md"
            className="w-full"
          />
        )}
      </div>
    </Section>
  );
}
