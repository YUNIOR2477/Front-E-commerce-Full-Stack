"use client";
import { useGetDiscount } from "@/api/getDiscounts";
import SkeletonSchema from "@/components/skeletonSchema";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { DiscountType } from "@/types/discount";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
import { ResponseType } from "@/types/response";
const Page = () => {
  const { loading, result }:ResponseType = useGetDiscount();
  const router = useRouter();
  return (
    <div className="max-w-7xl py-6 mx-auto sm:py-6 sm:px-24">
      {" "}
      <h3 className="px-2 text-4xl sm:pb-5 text-center font-bold">
        {" "}
        Super Descuentos{" "}
      </h3>{" "}
      <Carousel>
        {" "}
        <CarouselContent className="-ml-2 md:-ml-4">
          {" "}
          {loading && <SkeletonSchema grid={1} />}{" "}
          {result != null &&
            result.map((discount: DiscountType) => (
              <CarouselItem key={discount.id}>
                {" "}
                <div className="p-1">
                  {" "}
                  <Card className="pt-5 border border-gray-200 dark:border-gray-800 hover:shadow-gray-900 dark:hover:shadow-white bg-slate-100 dark:bg-slate-900">
                    {" "}
                    <CardContent className="relative flex flex-col gap-3 items-center justify-center h-[270px]">
                      {" "}
                      <Image
                        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${discount.image.url}`}
                        alt="Image Discount"
                        width={1000}
                        height={1000}
                        className="w-full object-cover rounded-lg"
                      />{" "}
                      <div className="h-[100px] flex gap-3 items-center justify-between p-2">
                        {" "}
                        <p className="text-center">
                          {discount.description}
                        </p>{" "}
                      </div>{" "}
                      <Button
                        className="w-[50%]"
                        onClick={() => router.push(discount.slug)}
                      >
                        {" "}
                        Obtener descuento{" "}
                      </Button>{" "}
                    </CardContent>{" "}
                  </Card>{" "}
                </div>{" "}
              </CarouselItem>
            ))}{" "}
        </CarouselContent>{" "}
        <CarouselPrevious /> <CarouselNext className="hidden sm:flex" />{" "}
      </Carousel>{" "}
      <h3 className="px-2 text-4xl sm:pb-5 text-center font-bold">
        {" "}
        Productos en Descuento{" "}
      </h3>{" "}
    </div>
  );
};
export default Page;