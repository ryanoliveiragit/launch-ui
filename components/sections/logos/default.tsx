import { siteConfig } from "@/config/site";
import { cn } from "@/lib/utils";

import { Section } from "../../ui/section";

const logos = [
  { name: "TechSpot", href: "https://www.techspot.com", label: "TechSpot" },
  { name: "PC Guide", href: "https://www.pcguide.com", label: "PC Guide" },
  { name: "WePC", href: "https://www.wepc.com", label: "WePC" },
  { name: "It's FOSS", href: "https://news.itsfoss.com", label: "It's FOSS" },
];

export default function Logos() {
  return (
    <Section className="py-12 sm:py-16">
      <p className="text-muted-foreground text-center text-sm font-semibold uppercase tracking-wider">
        Citado por
      </p>
      <div className="mx-auto mt-6 flex max-w-4xl flex-wrap items-center justify-center gap-10 sm:gap-14">
        {logos.map((logo) => (
          <a
            key={logo.name}
            href={logo.href}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              "text-muted-foreground hover:text-foreground text-lg font-semibold transition-colors",
            )}
          >
            {logo.label}
          </a>
        ))}
      </div>
    </Section>
  );
}
