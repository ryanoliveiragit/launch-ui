import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "Guia de instalação",
  description: "Passo a passo para instalar o Synapse (app e sistema).",
};

export default function DocsInstalacaoPage() {
  return (
    <article className="prose prose-neutral dark:prose-invert max-w-none">
      <header className="mb-12">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Guia de instalação
        </h1>
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          Siga este guia para instalar o app Synapse e, se desejar, o sistema
          operacional otimizado. Recomendamos ler tudo antes de começar.
        </p>
      </header>

      <section id="pre-requisitos" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-2 mt-12">
          Pré-requisitos
        </h2>
        <ul className="mt-6 list-disc space-y-2 pl-6 text-muted-foreground">
          <li>Windows 11 (versão suportada oficialmente)</li>
          <li>Backup dos seus dados importantes</li>
          <li>USB bootável ou mídia de instalação (para o sistema)</li>
          <li>Conectar à internet para baixar o app e atualizações</li>
        </ul>
      </section>

      <section id="passo-a-passo" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-2 mt-12">
          Passo a passo
        </h2>

        <div className="mt-8 space-y-10">
          <div>
            <h3 className="text-lg font-semibold text-brand">1. Baixar o app</h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              Na página principal, vá até a seção &quot;Instalação&quot;, marque que
              leu o guia e aceitou os{" "}
              <Link href={siteConfig.termsOfUseUrl} className="text-foreground underline hover:no-underline">
                Termos de Uso
              </Link>
              , e clique em &quot;Baixar Synapse&quot;. Execute o instalador e siga as
              instruções na tela.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-brand">2. Primeira execução</h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              Abra o Synapse. Na primeira vez, o app pode pedir permissões de
              administrador para analisar o sistema. Aceite para que as
              otimizações funcionem corretamente.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-brand">3. (Opcional) Sistema operacional</h3>
            <p className="text-muted-foreground mt-2 leading-relaxed">
              Se quiser usar o sistema operacional otimizado em vez do Windows
              padrão, baixe a imagem pela documentação, crie uma mídia bootável
              e instale seguindo o assistente. Recomendamos fazer isso em uma
              máquina de teste ou após backup completo.
            </p>
          </div>
        </div>
      </section>

      <section id="faq" className="scroll-mt-24">
        <h2 className="text-2xl font-semibold tracking-tight border-b border-border pb-2 mt-12">
          FAQ da instalação
        </h2>
        <dl className="mt-6 space-y-6">
          <div>
            <dt className="font-semibold">Posso usar só o app, sem trocar o sistema?</dt>
            <dd className="text-muted-foreground mt-1 text-sm leading-relaxed">
              Sim. O app Synapse funciona em cima do Windows padrão. O sistema
              operacional otimizado é opcional.
            </dd>
          </div>
          <div>
            <dt className="font-semibold">Como desinstalo?</dt>
            <dd className="text-muted-foreground mt-1 text-sm leading-relaxed">
              O app pode ser desinstalado pelo Painel de Controle ou Configurações.
              Para voltar ao Windows original no sistema, é necessário
              reinstalar o Windows.
            </dd>
          </div>
        </dl>
      </section>

      <footer className="mt-16 flex flex-wrap gap-4 border-t border-border pt-8">
        <Link
          href="/#instalacao"
          className="text-brand hover:underline font-medium text-sm"
        >
          ← Voltar para downloads
        </Link>
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground text-sm font-medium"
        >
          Início
        </Link>
      </footer>
    </article>
  );
}
