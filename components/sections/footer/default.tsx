import Link from "next/link";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import Synapse from "../../logos/synapse";
import {
  Footer,
  FooterBottom,
  FooterColumn,
  FooterContent,
} from "../../ui/footer";

export default function FooterSection() {
  return (
    <footer className={cn("bg-background w-full border-t border-border px-4 py-16")}>
      <div className="mx-auto max-w-6xl">
        <Footer>
          <FooterContent className="flex flex-col items-center gap-12 text-center sm:flex-row sm:flex-wrap sm:justify-between sm:gap-x-16 sm:text-left">
            <FooterColumn className="items-center sm:items-start">
              <div className="flex items-center justify-center gap-2 sm:justify-start">
                <Synapse />
                <h3 className="text-xl font-bold">{siteConfig.name}</h3>
              </div>
            </FooterColumn>
            <FooterColumn className="items-center sm:items-start">
              <h3 className="text-sm font-semibold">Produto</h3>
              <a
                href={siteConfig.docsInstallUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground text-sm hover:text-foreground"
              >
                Guia de instalação
              </a>
              <a
                href="#instalacao"
                className="text-muted-foreground text-sm hover:text-foreground"
              >
                Download
              </a>
            </FooterColumn>
            <FooterColumn className="items-center sm:items-start">
              <h3 className="text-sm font-semibold">Comunidade</h3>
              <a
                href={siteConfig.links.discord}
                className="text-muted-foreground text-sm hover:text-foreground"
              >
                Discord
              </a>
              <a
                href={siteConfig.links.twitter}
                className="text-muted-foreground text-sm hover:text-foreground"
              >
                X (Twitter)
              </a>
              <a
                href={siteConfig.links.github}
                className="text-muted-foreground text-sm hover:text-foreground"
              >
                GitHub
              </a>
            </FooterColumn>
            <FooterColumn className="items-center sm:items-start">
              <h3 className="text-sm font-semibold">Legal</h3>
              <Link
                href={siteConfig.termsOfUseUrl}
                className="text-muted-foreground text-sm hover:text-foreground"
              >
                Termos de Uso
              </Link>
            </FooterColumn>
          </FooterContent>
          <FooterBottom>
            <div className="text-center text-muted-foreground text-sm sm:text-left">
              © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos
              reservados.
            </div>
          </FooterBottom>
        </Footer>
      </div>
    </footer>
  );
}
