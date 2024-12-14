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
import { Expand, Heart, ShoppingCart } from "lucide-react";
import IconButton from "./icon-button";
import { useRouter } from "next/navigation";
import { formatPrice } from "@/lib/formatPrice";
import { useCart } from "@/hooks/use-cart";
import React from "react";
import { toast } from "./ui/use-toast";
import ComboBoxColors from "./comboBox-colors";
import { useLovedProducts } from "@/hooks/use-loved-products";

const FeaturedProducts = () => {
  const { loading, result }: ResponseType = useGetFeaturedProducts();
  const router = useRouter();
  const { addItem } = useCart();
  const [value, setValue] = React.useState("");
  const {addLoveItems}=useLovedProducts();
  return (
    <div className="max-w-7xl py-4 mx-auto sm:px-24">
      <h3 className="px-2 text-4xl sm:pb-5 text-center font-bold -mt-3">
        Productos destacados
      </h3>
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
                    <Card className="py-7 border border-gray-200 dark:border-gray-800 hover:shadow-gray-900 dark:hover:shadow-white bg-slate-100 dark:bg-slate-900">
                      <CardContent className="relative flex items-center justify-center px-6 h-[300px]">
                        <div className="absolute px-2 z-[2] top-1 right-7 flex flex-col gap-1 items-end">
                          <p className="px-2 py-1 text-xs font-serif text-white rounded-lg bg-black dark:bg-white dark:text-black w-fit">
                            {product.category.categoryName}
                          </p>
                          <p className="px-2 py-1 text-xs font-serif text-white rounded-lg bg-black dark:bg-white dark:text-black w-fit">
                            {product.material}
                          </p>
                        </div>
                        <img
                          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
                          alt="Image featured"
                          className="h-[280px] w-[280px] object-cover rounded-lg"
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
                            <IconButton
                              onclick={() => {
                                if (value !== "") {
                                  product.value = value;
                                  addItem(product);
                                } else {
                                  toast({
                                    title:
                                      "Debes seleccionar un color para tu producto 🎨",
                                    variant: "destructive",
                                  });
                                }
                              }}
                              icon={<ShoppingCart size={18} />}
                              className="text-black"
                            />
                            <IconButton
                            onclick={()=> addLoveItems(product)}
                            icon={<Heart size={18}/>}
                            className="text-black"
                            />
                          </div>
                        </div>
                      </CardContent>
                      <div className="flex flex-col items-center">
                        <h3 className="text-xl -mt-4 font-bold text-center">
                          {product.productName}
                        </h3>
                        <div className="flex gap-4 items-center -mt-1">
                          <p className="text-md font-medium">
                            {formatPrice(product.price)}
                          </p>
                          <p className="flex text-lg  font-serif font-bold items-center bg-red-600  px-2 rounded-lg text-white">
                            -{product.discountNumber}%
                          </p>
                          <p className="my-4 text-md line-through">
                            {formatPrice(
                              product.price /
                                ((100 - product.discountNumber) / 100)
                            )}
                          </p>
                        </div>
                        <ComboBoxColors
                          images={product.images}
                          value={value}
                          setValue={setValue}
                        />
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
