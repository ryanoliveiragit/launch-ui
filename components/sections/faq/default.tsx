import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../ui/accordion";
import { Section } from "../../ui/section";
import { SectionHeader } from "../../ui/section-header";

const faqs = [
  {
    q: "Quais versões do Windows são suportadas?",
    a: "O Synapse suporta oficialmente o Windows 11.",
  },
  {
    q: "Meus aplicativos continuam funcionando?",
    a: "Sim. O Synapse é o mesmo Windows padrão: mantemos funcionalidade e compatibilidade com anti-cheats.",
  },
  {
    q: "Como instalo o Synapse?",
    a: (
      <>
        É obrigatório seguir o{" "}
        <a
          href={siteConfig.docsInstallUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-foreground underline hover:no-underline"
        >
          guia de instalação
        </a>
        . Instalações feitas fora da documentação não são suportadas.
      </>
    ),
  },
  {
    q: "Posso voltar ao Windows padrão?",
    a: "Não há rollback automático. É necessário reinstalar o Windows, como faria para instalar o Synapse. Temos um guia de reversão na documentação.",
  },
];

export default function FAQ() {
  return (
    <Section id="faq" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          label="Suporte"
          title="Perguntas frequentes"
          description="Respostas rápidas sobre o app e o sistema."
        />

        <Accordion type="single" collapsible className="mt-14 max-w-2xl">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger>{faq.q}</AccordionTrigger>
              <AccordionContent>{faq.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-muted-foreground mt-8 text-sm">
          <a
            href={siteConfig.docsInstallUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-foreground hover:underline"
          >
            Mais FAQs na documentação →
          </a>
        </p>
      </div>
    </Section>
  );
}
