/* eslint-disable @next/next/no-img-element */
"use client";
import { useRouter } from "next/navigation";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import { Card, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import { useGetDiscount } from "@/api/getDiscounts";
import SkeletonSchema from "./skeletonSchema";
import { DiscountType } from "@/types/discount";
import { ResponseType } from "@/types/response";

const CarouselTextBanner = () => {
  const { loading, result }: ResponseType = useGetDiscount();
  const router = useRouter();
  return (
    <div>
      <Carousel
        className="w-full h-[65px] md:w-full  md:h-[150px] mb-6 md:mb-1"
        plugins={[
          Autoplay({
            delay: 3000,
          }),
        ]}
      >
        <CarouselContent>
          {loading && <SkeletonSchema grid={0} />}
          {result != null &&
            result.map((discount: DiscountType) => {
              return (
                <CarouselItem
                  key={discount.id}
                  onClick={() => router.push(discount.slug)}
                  className="cursor-pointer"
                >
                  <div>
                    <Card className="shadow-none border-none bg-transparent">
                      <CardContent className="flex flex-col justify-center items-center text-center">
                        <img
                          className="h-[65px] object-cover md:h-full w-full rounded-md border-2"
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${discount.image.url}`}
                          alt="Image discount"
                        ></img>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default CarouselTextBanner;
