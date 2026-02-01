import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import Synapse from "../../components/logos/synapse";

const docNav = [
  { label: "Instalação", href: "/docs/instalacao" },
  { label: "Pré-requisitos", href: "/docs/instalacao#pre-requisitos" },
  { label: "Passo a passo", href: "/docs/instalacao#passo-a-passo" },
  { label: "FAQ", href: "/docs/instalacao#faq" },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-background text-foreground min-h-screen">
      <aside className="fixed left-0 top-0 z-40 hidden h-screen w-64 border-r border-border bg-card/50 backdrop-blur-sm lg:block">
        <div className="flex h-14 items-center gap-2 border-b border-border px-4">
          <Link href="/" className="flex items-center gap-2 font-semibold">
            <Synapse />
            {siteConfig.name}
          </Link>
        </div>
        <nav className="p-4">
          <p className="text-muted-foreground mb-3 text-xs font-semibold uppercase tracking-wider">
            Documentação
          </p>
          <ul className="space-y-1">
            {docNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground block rounded-md px-3 py-2 text-sm font-medium transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-8 border-t border-border pt-4">
            <Link
              href="/"
              className="text-muted-foreground hover:text-foreground text-sm font-medium"
            >
              ← Voltar ao site
            </Link>
          </div>
        </nav>
      </aside>
      <div className="flex border-b border-border bg-card/30 px-4 py-3 lg:hidden">
        <Link href="/" className="flex items-center gap-2 font-semibold">
          <Synapse />
          {siteConfig.name}
        </Link>
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground ml-auto text-sm font-medium"
        >
          ← Voltar
        </Link>
      </div>
      <main className="lg:pl-64">
        <div className="mx-auto max-w-3xl px-4 py-10 sm:px-6 lg:py-16">{children}</div>
      </main>
    </div>
  );
}
