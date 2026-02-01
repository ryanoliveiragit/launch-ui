import {
  BlocksIcon,
  EclipseIcon,
  FastForwardIcon,
  LanguagesIcon,
  MonitorSmartphoneIcon,
  RocketIcon,
  ScanFaceIcon,
  SquarePenIcon,
} from "lucide-react";
import { ReactNode } from "react";

import { Item, ItemDescription, ItemIcon, ItemTitle } from "../../ui/item";
import { Section } from "../../ui/section";

interface ItemProps {
  title: string;
  description: string;
  icon: ReactNode;
}

interface ItemsProps {
  id?: string;
  title?: string;
  description?: string;
  imageBlock?: ReactNode;
  items?: ItemProps[] | false;
  className?: string;
}

export default function Items({
  id,
  title = "Everything you need. Nothing you don't.",
  description,
  imageBlock,
  items = [
    {
      title: "Accessibility first",
      description: "Fully WCAG 2.0 compliant, made with best a11y practices",
      icon: <ScanFaceIcon className="size-5 stroke-1" />,
    },
    {
      title: "Responsive design",
      description: "Looks and works great on any device and screen size",
      icon: <MonitorSmartphoneIcon className="size-5 stroke-1" />,
    },
    {
      title: "Light and dark mode",
      description:
        "Seamless switching between color schemes, 6 themes included",
      icon: <EclipseIcon className="size-5 stroke-1" />,
    },
    {
      title: "Easy to customize",
      description: "Flexible options to match your product or brand",
      icon: <BlocksIcon className="size-5 stroke-1" />,
    },
    {
      title: "Top-level performance",
      description: "Made for lightning-fast load times and smooth interactions",
      icon: <FastForwardIcon className="size-5 stroke-1" />,
    },
    {
      title: "Production ready",
      description: "Thoroughly tested and launch-prepared",
      icon: <RocketIcon className="size-5 stroke-1" />,
    },
    {
      title: "Made for localisation",
      description:
        "Easy to implement support for multiple languages and regions",
      icon: <LanguagesIcon className="size-5 stroke-1" />,
    },
    {
      title: "CMS friendly",
      description:
        "Built to work with your any headless content management system",
      icon: <SquarePenIcon className="size-5 stroke-1" />,
    },
  ],
  className,
}: ItemsProps) {
  return (
    <Section id={id} className={className}>
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-12 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4">
          <h2 className="max-w-2xl text-2xl font-semibold leading-tight sm:text-4xl md:text-5xl">
            {title}
          </h2>
          {description && (
            <p className="text-muted-foreground max-w-xl text-base font-medium sm:text-lg">
              {description}
            </p>
          )}
        </div>
        {imageBlock && <div className="w-full max-w-3xl">{imageBlock}</div>}
        {items !== false && items.length > 0 && (
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <Item
                key={index}
                className="glass-liquid rounded-2xl p-5 text-left"
              >
                <ItemTitle className="flex items-center gap-2">
                  <ItemIcon>{item.icon}</ItemIcon>
                  {item.title}
                </ItemTitle>
                <ItemDescription className="max-w-none">
                  {item.description}
                </ItemDescription>
              </Item>
            ))}
          </div>
        )}
      </div>
    </Section>
  );
}
