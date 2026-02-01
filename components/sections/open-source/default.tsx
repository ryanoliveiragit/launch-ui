import { Star } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import { SectionHeader } from "../../ui/section-header";

export default function OpenSource() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionHeader
          label="Open source"
          title={
            <>
              Projeto <span className="text-brand">open-source</span>, licença
              GPL-3.0
            </>
          }
          description="Somos um projeto open-source e comunitário. Dê uma olhada no repositório e, se quiser, contribua com a nossa visão."
        />
        <Button variant="outline" size="lg" className="mt-10" asChild>
          <a
            href={siteConfig.links.github}
            className="inline-flex items-center gap-2"
          >
            <Star className="size-4" />
            Ver no GitHub
          </a>
        </Button>
      </div>
    </Section>
  );
}
