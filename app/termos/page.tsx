import Link from "next/link";

import { siteConfig } from "@/config/site";

import Synapse from "../../components/logos/synapse";
import { Section } from "../../components/ui/section";

export const metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do Synapse.",
};

export default function TermosPage() {
  return (
    <main className="bg-background text-foreground min-h-screen">
      <header className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-lg">
        <div className="mx-auto flex h-14 max-w-4xl items-center justify-between px-4">
          <Link href="/" className="flex items-center gap-2 text-lg font-bold">
            <Synapse />
            {siteConfig.name}
          </Link>
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground text-sm font-medium"
          >
            Voltar ao início
          </Link>
        </div>
      </header>

      <Section className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold tracking-tight">Termos de Uso</h1>
        <p className="text-muted-foreground mt-2">
          Última atualização: Outubro 2025
        </p>

        <div className="prose prose-neutral dark:prose-invert mt-8 space-y-6 text-muted-foreground">
          <section>
            <h2 className="text-foreground text-xl font-semibold">1. Aceitação</h2>
            <p>
              Ao acessar, baixar ou utilizar o Synapse, você concorda com estes
              Termos de Uso. Se não concordar, não utilize o software nem os
              serviços associados.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold">
              2. Uso do software
            </h2>
            <p>
              O Synapse é fornecido para uso pessoal e não comercial. Você é
              responsável por seguir a documentação de instalação e por qualquer
              alteração feita no seu sistema. O uso do software é por sua conta
              e risco.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold">
              3. Privacidade e dados
            </h2>
            <p>
              Respeitamos sua privacidade. O que coletamos e como usamos dados
              está descrito em nossa política de privacidade. Ao usar o Synapse,
              você também aceita essa política.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold">
              4. Limitação de responsabilidade
            </h2>
            <p>
              O Synapse é oferecido &quot;como está&quot;. Não nos responsabilizamos por
              danos diretos ou indiretos decorrentes do uso ou da incapacidade
              de uso do software, incluindo perda de dados ou problemas de
              compatibilidade.
            </p>
          </section>

          <section>
            <h2 className="text-foreground text-xl font-semibold">5. Contato</h2>
            <p>
              Dúvidas sobre estes termos:{" "}
              <a
                href={siteConfig.links.email}
                className="text-foreground underline hover:no-underline"
              >
                {siteConfig.links.email.replace("mailto:", "")}
              </a>
              .
            </p>
          </section>
        </div>

        <div className="mt-12">
          <Link
            href="/"
            className="text-muted-foreground hover:text-foreground text-sm font-medium"
          >
            ← Voltar ao início
          </Link>
        </div>
      </Section>
    </main>
  );
}
