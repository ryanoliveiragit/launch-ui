"use client";

import { useState } from "react";
import Link from "next/link";

import { ExternalLink } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Button } from "../../ui/button";
import { Card, CardContent, CardHeader } from "../../ui/card";
import { Section } from "../../ui/section";
import { SectionHeader } from "../../ui/section-header";

export default function Installing() {
  const [followGuide, setFollowGuide] = useState(false);
  const [acceptTerms, setAcceptTerms] = useState(false);
  const canDownload = followGuide && acceptTerms;

  return (
    <Section id="instalacao" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4">
        <SectionHeader
          label="Instalação"
          title="Como instalar o app e o sistema"
          description="Siga o guia de instalação em outra aba. Aqui você confirma que leu o guia e aceita os termos para liberar o download."
        />

        <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Coluna esquerda: CTA para abrir o guia */}
          <div className="lg:col-span-5">
            <Card className="border-brand/20 bg-card/50">
              <CardHeader>
                <h3 className="text-xl font-semibold">Guia de instalação</h3>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  Documentação passo a passo: pré-requisitos, instalação do app
                  e (opcional) do sistema operacional.
                </p>
              </CardHeader>
              <CardContent>
                <Button variant="default" className="w-full sm:w-auto" asChild>
                  <a
                    href={siteConfig.docsInstallUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    Abrir guia em nova aba
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Coluna direita: Checkboxes + Download */}
          <div className="lg:col-span-7">
            <Card>
              <CardHeader>
                <h3 className="text-xl font-semibold">Downloads</h3>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">
                  Libere o botão de download marcando que você está seguindo o
                  guia e que aceitou os Termos de Uso e a Política de Privacidade.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="rounded-lg border border-amber-500/30 bg-amber-500/5 px-4 py-3 text-sm">
                  <p className="font-medium text-amber-700 dark:text-amber-400">
                    Aviso: baixe apenas quando o guia de instalação indicar.
                  </p>
                </div>

                <div className="space-y-4">
                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted/30">
                    <input
                      type="checkbox"
                      checked={followGuide}
                      onChange={(e) => setFollowGuide(e.target.checked)}
                      className="mt-1 size-4 rounded border-border"
                    />
                    <span className="text-sm leading-relaxed">
                      Confirmo que estou seguindo o{" "}
                      <a
                        href={siteConfig.docsInstallUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground underline hover:no-underline"
                      >
                        guia de instalação
                      </a>{" "}
                      (em outra aba).
                    </span>
                  </label>

                  <label className="flex cursor-pointer items-start gap-3 rounded-lg border border-border p-4 transition-colors hover:bg-muted/30">
                    <input
                      type="checkbox"
                      checked={acceptTerms}
                      onChange={(e) => setAcceptTerms(e.target.checked)}
                      className="mt-1 size-4 rounded border-border"
                    />
                    <span className="text-sm leading-relaxed">
                      Li e aceito os{" "}
                      <Link
                        href={siteConfig.termsOfUseUrl}
                        className="text-foreground underline hover:no-underline"
                      >
                        Termos de Uso
                      </Link>{" "}
                      e a{" "}
                      <Link
                        href={siteConfig.privacyPolicyUrl}
                        className="text-foreground underline hover:no-underline"
                      >
                        Política de Privacidade
                      </Link>
                      .
                    </span>
                  </label>
                </div>

                <div className="flex flex-wrap gap-3 border-t border-border pt-4">
                  <Button variant="default" size="lg" disabled={!canDownload} asChild>
                    <a
                      href={canDownload ? siteConfig.getStartedUrl : "#"}
                      aria-disabled={!canDownload}
                    >
                      Baixar Synapse
                    </a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a
                      href={siteConfig.docsInstallUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2"
                    >
                      Abrir guia
                      <ExternalLink className="size-4" />
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Section>
  );
}
