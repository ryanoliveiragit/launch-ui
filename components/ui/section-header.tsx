import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  title: React.ReactNode;
  description?: string;
  className?: string;
}

export function SectionHeader({
  label,
  title,
  description,
  className,
}: SectionHeaderProps) {
  return (
    <header className={cn("max-w-3xl", className)}>
      {label && (
        <p className="text-brand mb-2 text-sm font-semibold uppercase tracking-wider">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-balance sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground mt-4 text-lg leading-relaxed">
          {description}
        </p>
      )}
    </header>
  );
}
