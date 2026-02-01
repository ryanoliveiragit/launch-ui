"use client";

import Image from "next/image";
import { cn } from "@/lib/utils";

interface ImageBlockProps {
  src: string;
  srcDark?: string;
  alt: string;
  /** md: 16/10, lg: 21/9 */
  size?: "md" | "lg";
  caption?: string;
  className?: string;
  priority?: boolean;
}

export function ImageBlock({
  src,
  srcDark,
  alt,
  size = "md",
  caption,
  className,
  priority = false,
}: ImageBlockProps) {
  return (
    <figure className={cn("flex flex-col items-center text-center", className)}>
      <div
        className={cn(
          "glass-liquid relative w-full max-w-3xl overflow-hidden",
          size === "md" && "aspect-[16/10]",
          size === "lg" && "aspect-[21/9]",
        )}
      >
        {srcDark ? (
          <>
            <Image
              src={src}
              alt={alt}
              fill
              className="object-cover dark:hidden"
              sizes="(max-width: 768px) 100vw, 896px"
              priority={priority}
            />
            <Image
              src={srcDark}
              alt={alt}
              fill
              className="hidden object-cover dark:block"
              sizes="(max-width: 768px) 100vw, 896px"
              priority={priority}
            />
          </>
        ) : (
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 896px"
            priority={priority}
          />
        )}
      </div>
      {caption && (
        <figcaption className="text-muted-foreground mt-3 max-w-xl text-sm">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
