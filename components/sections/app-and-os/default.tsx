import Image from "next/image";

import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";
import { SectionHeader } from "../../ui/section-header";

/** Placeholders: substitua por screenshots reais do seu app e do seu sistema */
const APP_IMAGE = "https://picsum.photos/seed/synapse-app/800/500";
const OS_IMAGE = "https://picsum.photos/seed/synapse-os/800/500";

export default function AppAndOs() {
  return (
    <Section id="app-e-sistema" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          label="Produto"
          title="O app e o sistema operacional"
          description="O Synapse é duas coisas: um app que otimiza o seu Windows e, opcionalmente, um sistema operacional leve que você pode instalar no lugar do Windows padrão."
        />

        <div className="mt-14 grid gap-16 lg:grid-cols-2 lg:gap-20">
          <article className="group">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-shadow hover:shadow-xl">
              <Image
                src={APP_IMAGE}
                alt="Interface do app Synapse (placeholder — substitua por screenshot real)"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/30" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Synapse App</h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              Roda em cima do seu Windows. Analisa o sistema, aplica presets de
              otimização, ajusta rede e FPS. Você mantém o Windows que já tem
              e ganha performance com um clique.
            </p>
          </article>

          <article className="group">
            <div className="relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg transition-shadow hover:shadow-xl">
              <Image
                src={OS_IMAGE}
                alt="Sistema operacional Synapse (placeholder — substitua por screenshot real)"
                width={800}
                height={500}
                className="h-auto w-full object-cover"
                unoptimized
              />
              <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border/30" />
            </div>
            <h3 className="mt-6 text-xl font-semibold">Synapse OS</h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              Sistema operacional otimizado para quem quer o máximo de
              desempenho e privacidade. Instalação opcional; o app funciona
              sem ele.
            </p>
          </article>
        </div>
      </div>
    </Section>
  );
}
