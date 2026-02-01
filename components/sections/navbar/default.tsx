"use client";

import { Menu } from "lucide-react";

import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import Synapse from "../../logos/synapse";
import { Button } from "../../ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "../../ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "../../ui/sheet";

const navLinks = [
  { text: "App e sistema", href: "#app-e-sistema" },
  { text: "Instalação", href: "#instalacao" },
  { text: "Guia (nova aba)", href: siteConfig.docsInstallUrl, newTab: true },
  { text: "FAQ", href: "#faq" },
  { text: "Apoie-nos", href: siteConfig.links.support },
];

export default function Navbar() {
  return (
    <header className={cn("sticky top-0 z-50 -mb-4 px-4 pb-4")}>
      <div className="fade-bottom bg-background/15 absolute left-0 h-24 w-full backdrop-blur-lg" />
      <div className="max-w-6xl relative mx-auto">
        <NavbarComponent>
          <NavbarLeft>
            <a
              href="/"
              className="flex items-center gap-2 text-xl font-bold"
            >
              <Synapse />
              {siteConfig.name}
            </a>
            <nav className="hidden md:flex items-center gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.text}
                  href={link.href}
                  target={link.newTab ? "_blank" : undefined}
                  rel={link.newTab ? "noopener noreferrer" : undefined}
                  className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
                >
                  {link.text}
                </a>
              ))}
            </nav>
          </NavbarLeft>
          <NavbarRight>
            <a
              href={siteConfig.links.github}
              className="text-muted-foreground hover:text-foreground hidden text-sm md:block"
            >
              GitHub
            </a>
            <a
              href={siteConfig.links.discord}
              className="text-muted-foreground hover:text-foreground hidden text-sm md:block"
            >
              Discord
            </a>
            <Button variant="default" size="sm" asChild>
              <a href="#instalacao">Começar</a>
            </Button>
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
                  <Menu className="size-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <a href="/" className="flex items-center gap-2 text-xl font-bold">
                    {siteConfig.name}
                  </a>
                  {navLinks.map((link) => (
                    <a
                      key={link.text}
                      href={link.href}
                      target={link.newTab ? "_blank" : undefined}
                      rel={link.newTab ? "noopener noreferrer" : undefined}
                      className="text-muted-foreground hover:text-foreground"
                    >
                      {link.text}
                    </a>
                  ))}
                  <a href={siteConfig.links.github}>GitHub</a>
                  <a href={siteConfig.links.discord}>Discord</a>
                  <a href={siteConfig.termsOfUseUrl}>Termos de Uso</a>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>
    </header>
  );
}
