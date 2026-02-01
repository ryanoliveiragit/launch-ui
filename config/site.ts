export const siteConfig = {
  name: "Synapse",
  url: "https://synapse.app",
  getStartedUrl: "https://synapse.app/download",
  docsUrl: "https://docs.synapse.app",
  /** Guia de instalação (abre em nova aba, estilo documentação) */
  docsInstallUrl: "/docs/instalacao",
  /** Página de Termos de Uso (campo obrigatório para download/registro) */
  termsOfUseUrl: "/termos",
  ogImage: "https://synapse.app/og.jpg",
  description:
    "Seu app de otimização e seu sistema operacional. Windows otimizado para entusiastas e jogadores.",
  links: {
    twitter: "https://twitter.com/synapse",
    github: "https://github.com/synapse",
    discord: "https://discord.gg/synapse",
    email: "mailto:contato@synapse.app",
    /** Suporte / Doação (estilo AtlasOS "Support us") */
    support: "https://ko-fi.com/synapse",
  },
  /** Versão exibida no hero (estilo AtlasOS) */
  version: "v0.5.0",
  versionDate: "Outubro 2025",
};

export type SiteConfig = typeof siteConfig;
