/* eslint-disable @next/next/no-img-element */
import IconButton from "@/components/icon-button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import { Expand, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import ComboBoxColors from "./comboBox-colors";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const router = useRouter();
  const [value, setValue] = useState("");
  const { addItem } = useCart();

  return (
    <div className="relative p-2 mb-8 transition-all duration-100 rounded-lg md:border-2 dark:shadow-gray-500 bg-slate-300 dark:bg-slate-900 ">
      <div className="absolute flex flex-col items-end gap-1 px-2 z-[1] top-3 right-1">
        <p className="px-2 py-1 text-xs font-serif text-white rounded-lg bg-black dark:bg-white dark:text-black w-fit">
          {product.material}
        </p>
        <p className="px-2 py-1 text-xs font-serif text-white rounded-lg bg-black dark:bg-white dark:text-black w-fit">
          {product.origin}
        </p>
      </div>
      <Carousel
        opts={{
          align: "start",
        }}
        className="md:w-full md:max-w-sm"
      >
        <CarouselContent>
          {product.images.map((image) => (
            <CarouselItem key={image.id} className="group">
              <img
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                alt="Image"
                className="rounded-xl object-cover"
              />
              <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                <div className="flex justify-center gap-x-6">
                  <IconButton
                    onclick={() => router.push(`/product/${product.slug}`)}
                    icon={<Expand size={20} className="text-black" />}
                  ></IconButton>
                  <IconButton
                    onclick={() => {
                      product.value=value
                      addItem(product)}}
                    icon={<ShoppingCart size={20} className="text-black" />}
                  ></IconButton>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-11 hidden sm:flex dark:text-white" />
        <CarouselNext className="hidden sm:flex mr-11 dark:text-white" />
      </Carousel>
      <div className="flex flex-col items-center">
        <p className="text-2xl text-center md:text-black dark:text-white   ">
          {product.productName}
        </p>
        <p className="font-bold text-center md:text-black dark:text-white mb-2">
          {formatPrice(product.price)}
        </p>
        <ComboBoxColors
          value={value}
          setValue={setValue}
          images={product.images}
        />
      </div>
    </div>
  );
};

export default ProductCard;
