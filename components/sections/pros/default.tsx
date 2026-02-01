import Image from "next/image";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";
import { SectionHeader } from "../../ui/section-header";

const pros = [
  { name: "Pro Player 1", game: "Valorant", x: "#", twitch: "#" },
  { name: "Pro Player 2", game: "Valorant", x: "#", twitch: "#" },
  { name: "Criador", game: "Valorant (ex-pro)", x: "#", twitch: "#" },
];

/** Placeholder: substitua por fotos reais dos pros */
const PRO_IMAGE = "https://picsum.photos/seed/pro/96/96";

export default function Pros() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          label="Performance"
          title={
            <>
              A escolha para{" "}
              <span className="text-brand">pico de performance</span>
            </>
          }
          description="Milissegundos decidem partidas. Competidores de alto nível confiam no Synapse para um ambiente estável e de baixa latência."
        />

        <ul className="mt-10 grid gap-4 sm:grid-cols-3">
          <li className="flex items-center gap-2 text-sm">
            <span className="text-brand font-semibold">•</span>
            Performance estável e sem travamentos
          </li>
          <li className="flex items-center gap-2 text-sm">
            <span className="text-brand font-semibold">•</span>
            Entrada instantânea e menos input lag
          </li>
          <li className="flex items-center gap-2 text-sm">
            <span className="text-brand font-semibold">•</span>
            Resposta otimizada para aproveitar melhor o hardware
          </li>
        </ul>

        <p className="mt-8">
          <a
            href={siteConfig.links.email}
            className="text-brand hover:underline font-medium"
          >
            Entre em contato
          </a>{" "}
          se você é pro e usa ou quer começar com o Synapse.
        </p>

        <div className="mt-14 grid gap-8 sm:grid-cols-3">
          {pros.map((p) => (
            <div
              key={p.name}
              className={cn(
                "rounded-2xl border border-border bg-card p-6 text-center transition-colors hover:border-brand/20",
              )}
            >
              <Image
                src={PRO_IMAGE}
                alt=""
                width={96}
                height={96}
                className="mx-auto rounded-full object-cover"
                unoptimized
              />
              <h3 className="mt-4 font-semibold">{p.name}</h3>
              <p className="text-muted-foreground text-sm">{p.game}</p>
              <div className="mt-3 flex justify-center gap-4 text-xs">
                <a
                  href={p.x}
                  className="text-muted-foreground hover:text-foreground"
                >
                  X
                </a>
                <a
                  href={p.twitch}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Twitch
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
