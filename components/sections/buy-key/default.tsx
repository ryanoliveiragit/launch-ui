"use client";

import { Key, Sparkles } from "lucide-react";
import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";
import { Section } from "../../ui/section";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../ui/tabs";

const plans = [
  {
    id: "mensal",
    name: "Mensal",
    price: "19",
    period: "/mês",
    features: ["Acesso a todas as otimizações", "Atualizações inclusas", "Suporte por Discord"],
    href: `${siteConfig.checkoutBaseUrl}/mensal`,
    featured: false,
  },
  {
    id: "anual",
    name: "Anual",
    price: "149",
    period: "/ano",
    features: ["Tudo do Mensal", "2 meses grátis", "Prioridade no suporte"],
    href: `${siteConfig.checkoutBaseUrl}/anual`,
    featured: true,
  },
  {
    id: "lifetime",
    name: "Lifetime",
    price: "299",
    period: " única",
    features: ["Acesso vitalício", "Todas as atualizações", "Suporte prioritário"],
    href: `${siteConfig.checkoutBaseUrl}/lifetime`,
    featured: false,
  },
];

export default function BuyKey({ className }: { className?: string }) {
  return (
    <Section id="comprar" className={className}>
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-10 text-center sm:gap-14">
        <div className="flex flex-col items-center gap-3">
          <h2 className="text-2xl font-semibold tracking-tight sm:text-4xl">
            Adquirir licença
          </h2>
          <p className="text-muted-foreground max-w-md text-sm sm:text-base">
            Escolha o plano e seja direcionado ao checkout seguro.
          </p>
        </div>

        <Tabs defaultValue="planos" className="w-full">
          <TabsList className="glass-liquid mx-auto mb-2 flex h-11 w-fit gap-1 p-1">
            <TabsTrigger value="planos" className="rounded-lg px-4 text-sm">
              Planos
            </TabsTrigger>
            <TabsTrigger value="resgatar" className="rounded-lg px-4 text-sm">
              Resgatar key
            </TabsTrigger>
          </TabsList>

          <TabsContent value="planos" className="mt-8">
            <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-3">
              {plans.map((p) => (
                <div
                  key={p.id}
                  className={cn(
                    "glass-liquid flex flex-col overflow-hidden rounded-2xl p-6 transition hover:border-white/20",
                    p.featured && "ring-1 ring-brand/30 dark:ring-brand/40",
                  )}
                >
                  {p.featured && (
                    <span className="bg-brand/10 text-brand mb-4 inline-flex w-fit items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-medium">
                      <Sparkles className="size-3" /> Popular
                    </span>
                  )}
                  <h3 className="text-lg font-semibold">{p.name}</h3>
                  <div className="mt-2 flex items-baseline gap-1">
                    <span className="text-3xl font-bold tabular-nums">
                      R$ {p.price}
                    </span>
                    <span className="text-muted-foreground text-sm">{p.period}</span>
                  </div>
                  <ul className="text-muted-foreground mt-4 flex-1 space-y-2 text-sm">
                    {p.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="bg-brand/20 size-1.5 shrink-0 rounded-full" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Button
                    variant={p.featured ? "default" : "outline"}
                    size="sm"
                    className="mt-6 w-full"
                    asChild
                  >
                    <a href={p.href} target="_blank" rel="noopener noreferrer">
                      Comprar
                    </a>
                  </Button>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="resgatar" className="mt-8">
            <div className="glass-liquid mx-auto flex max-w-md flex-col items-center gap-4 rounded-2xl p-8 text-center">
              <Key className="text-muted-foreground size-10" />
              <h3 className="font-semibold">Já tem uma key?</h3>
              <p className="text-muted-foreground text-sm">
                Abra o Synapse, vá em Configurações → Licença e cole o código
                que você recebeu por e-mail.
              </p>
              <Button variant="outline" size="sm" asChild>
                <Link href={siteConfig.getStartedUrl}>Baixar Synapse</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Section>
  );
}
