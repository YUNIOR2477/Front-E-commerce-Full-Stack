/* eslint-disable @next/next/no-img-element */
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import React from "react";

interface CarouselProductProps {
  images: {
    id: number;
    url: string;
  }[];
}

const CarouselProduct = (props: CarouselProductProps) => {
  const { images } = props;
  return (
    <div className="px-6 mb-4">
      <Carousel>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                alt="image product"
                className="rounded-lg object-cover border-2"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex md:ml-10"/>
        <CarouselNext className="hidden sm:flex md:mr-10"/>
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
