import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import { SectionHeader } from "../../ui/section-header";

export default function CTA() {
  return (
    <Section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 text-center">
        <SectionHeader
          label="Comunidade"
          title={
            <>
              Faça parte da{" "}
              <span className="text-brand">comunidade Synapse</span>
            </>
          }
          description="Junte-se a milhares de membros. Conecte-se, compartilhe e fique por dentro das novidades."
        />
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button variant="default" size="lg" asChild>
            <a href={siteConfig.links.discord}>Entrar no Discord</a>
          </Button>
          <Button variant="outline" size="lg" asChild>
            <a href={siteConfig.links.twitter}>Seguir no X</a>
          </Button>
        </div>
      </div>
    </Section>
  );
}
