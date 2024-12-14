import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
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
    <div className="mb-4">
      <Carousel>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.id}>
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                alt="image product"
                className="rounded-lg object-cover border-2"
                width={2000}
                height={2000}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden sm:flex md:ml-10" />
        <CarouselNext className="hidden sm:flex md:mr-10" />
      </Carousel>
    </div>
  );
};

export default CarouselProduct;
