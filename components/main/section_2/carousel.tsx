"use client";

import {
  Carousel as CarouselContainer,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Each } from "@/components/utilities/each/each";
import { Typography } from "@/components/typography/typography";
import { useTranslations } from "next-intl";
import Autoplay from "embla-carousel-autoplay";

const hooksTranslation: string = "Data.Hooks.Items";
const utilsTranslation: string = "Data.Utilities.Items";

interface carouselProps {
  array: string[][];
}

/**
 * Carousel component to display items with translations.
 * The items are displayed as part of two categories: Hooks and Utilities.
 *
 * Props:
 * - array (array): Two dimensional string array which contains name of hooks and utils.
 *
 * @param {carouselProps} props- Component props.
 * @returns {JSX.Element} - Rendered carousel component.
 */
export default function Carousel({ array }: carouselProps) {
  const hooks = useTranslations(hooksTranslation);
  const utils = useTranslations(utilsTranslation);

  return (
    <CarouselContainer
      className="w-[70%]"
      aria-roledescription="carousel"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        <Each
          of={array[0]}
          render={(item, index) => {
            return (
              <CarouselItem key={index}>
                <Typography type="p" className="font-bold text-xl mb-3">
                  {hooks(`${item}.Name`)}
                </Typography>
                <Typography type="span">
                  {hooks(`${item}.Content.Description`).slice(0, 300)}...
                </Typography>
              </CarouselItem>
            );
          }}
        />
        <Each
          of={array[1]}
          render={(item, index) => {
            return (
              <CarouselItem key={index}>
                <Typography type="p" className="font-bold text-xl mb-3">
                  {utils(`${item}.Name`)}
                </Typography>
                <Typography type="span">
                  {utils(`${item}.Content.Description`).slice(0, 300)}...
                </Typography>
              </CarouselItem>
            );
          }}
        />
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </CarouselContainer>
  );
}
