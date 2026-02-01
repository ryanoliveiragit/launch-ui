import { siteConfig } from "@/config/site";

import { Section } from "../../ui/section";

interface StatItemProps {
  label?: string;
  value: string | number;
  suffix?: string;
  description?: string;
}

interface StatsProps {
  items?: StatItemProps[] | false;
  className?: string;
}

export default function Stats({
  items = [
    {
      label: "",
      value: siteConfig.stats.presets,
      description: "presets de otimização (Básico, Intermediário, Avançado)",
    },
    {
      label: "",
      value: siteConfig.stats.modulos,
      description: "módulos avançados (Kernel, CPU, Memória, GPU, I/O, Rede)",
    },
    {
      label: "",
      value: siteConfig.stats.isos,
      description: "ISOs de Windows otimizadas",
    },
    {
      label: "",
      value: siteConfig.stats.integracoes,
      description: "integrações (FPS Ultra, Process Lasso, Rede, ISOs)",
    },
  ],
  className,
}: StatsProps) {
  return (
    <Section className={className}>
      {items !== false && items.length > 0 && (
        <div className="glass-liquid mx-auto flex max-w-4xl flex-wrap justify-center gap-8 rounded-2xl px-8 py-10 sm:gap-12 sm:px-12">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 text-center"
            >
              <div className="from-foreground to-foreground dark:to-brand bg-linear-to-r bg-clip-text text-3xl font-semibold text-transparent sm:text-4xl">
                {item.value}
              </div>
              {item.suffix && (
                <span className="text-brand text-lg font-medium">{item.suffix}</span>
              )}
              {item.description && (
                <p className="text-muted-foreground max-w-[200px] text-sm">
                  {item.description}
                </p>
              )}
            </div>
          ))}
        </div>
      )}
    </Section>
  );
}
