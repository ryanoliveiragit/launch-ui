import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";
import { SectionHeader } from "../../ui/section-header";

export default function Reviews() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          label="Comunidade"
          title={
            <>
              O que a <span className="text-brand">comunidade</span> acha?
            </>
          }
          description="Nossa comunidade nos avalia muito bem. Temos orgulho da nota alta e do compromisso em melhorar o Synapse."
        />

        <div className="mt-14 rounded-2xl border border-border bg-card p-8 shadow-sm sm:p-12">
          <blockquote className="text-lg italic text-muted-foreground sm:text-xl">
            &quot;Se você pode rodar o Windows com esse tipo de performance…
            impressionante.&quot;
          </blockquote>
          <p className="mt-6 font-semibold">— Criador de conteúdo</p>
        </div>
      </div>
    </Section>
  );
}
