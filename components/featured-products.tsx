/* eslint-disable @next/next/no-img-element */
"use client";

import { useGetFeaturedProducts } from "@/api/useGetFeaturedProducts";
import { ResponseType } from "@/types/response";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import SkeletonSchema from "./skeletonSchema";
import { ProductType } from "@/types/product";
import { Card, CardContent } from "./ui/card";
import { Expand } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/formatPrice";

const FeaturedProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();
  return (
    <div className="max-w-7xl py-6 mx-auto sm:py-6 sm:px-24">
      <h3 className="px-2 text-3xl sm:pb-5">Productos destacados</h3>
      <Carousel>
        <CarouselContent className="-ml-2 md:-ml-4">
          {loading && <SkeletonSchema grid={3} />}
          {result != null &&
            result.map((product: ProductType) => {
              return (
                <CarouselItem
                  key={product.id}
                  className="md:basis-1/2 lg:basis-1/3 group"
                >
                  <div className="p-1">
                    <Card className="py-4 border border-gray-200 dark:border-gray-800 hover:shadow-gray-900 dark:hover:shadow-white bg-slate-100 dark:bg-slate-900">
                      <CardContent className="relative flex items-center justify-center px-6 py-2 h-[300px]">
                        <img
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                          alt="Image featured"
                          className="max-h-[280px] object-cover rounded-lg"
                        />
                        <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-7">
                          <div className="flex justify-center gap-x-6">
                            <IconButton
                              onclick={() =>
                                router.push(`/product/${product.slug}`)
                              }
                              icon={<Expand size={18} />}
                              className="text-black"
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex justify-between gap-4 px-8 ">
                        <h3 className="text-lg font-bold">
                          {product.productName}
                        </h3>
                        <div className="flex items-center justify-between gap-3">
                          <p className="px-1 py-1 text-white bg-black rounded-lg dark:bg-white dark:text-black w-fit text-sm text-center font-serif">
                            {product.category.categoryName}
                          </p>
                          <p className="px-2 py-1 text-white bg-black rounded-md dark:bg-white dark:text-black w-fit text-sm font-medium text-center">
                            {formatPrice(product.price)}
                          </p>
                        </div>
                      </div>
                    </Card>
                  </div>
                </CarouselItem>
              );
            })}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext className="hidden sm:flex" />
      </Carousel>
    </div>
  );
};

export default FeaturedProducts;
