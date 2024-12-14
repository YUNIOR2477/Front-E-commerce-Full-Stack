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
import { Expand, Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { toast } from "@/components/ui/use-toast";
import ComboBoxColors from "@/components/comboBox-colors";
import { useLovedProducts } from "@/hooks/use-loved-products";

type ProductCardProps = {
  product: ProductType;
};

const ProductCard = (props: ProductCardProps) => {
  const { product } = props;
  const router = useRouter();
  const [value, setValue] = useState("");
  const { addItem } = useCart();
  const { addLoveItems } = useLovedProducts();
  return (
    <div className="relative p-2 transition-all duration-100 rounded-lg bg-slate-200 dark:bg-slate-900 shadow-xl">
      <div className="absolute flex flex-col items-end gap-1 px-2 z-[1] top-4 right-2">
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
              <div className="flex items-center justify-center">
                <img
                  src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${image.url}`}
                  alt="Image"
                  className="rounded-md h-[250px] w-[250px] object-cover mt-1"
                />
              </div>
              <div className="absolute w-full px-6 transition duration-200 opacity-0 group-hover:opacity-100 bottom-5">
                <div className="flex justify-center gap-x-6">
                  <IconButton
                    onclick={() => router.push(`/product/${product.slug}`)}
                    icon={<Expand size={20} className="text-black" />}
                  ></IconButton>
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
                    icon={<ShoppingCart size={20} className="text-black" />}
                  ></IconButton>
                  <IconButton
                    onclick={() => addLoveItems(product)}
                    icon={<Heart size={18} />}
                    className="text-black"
                  />
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="ml-11 hidden sm:flex dark:text-white" />
        <CarouselNext className="hidden sm:flex mr-11 dark:text-white" />
      </Carousel>
      <div className="flex flex-col items-center mt-2">
        <p className="text-lg font-bold text-center md:text-black dark:text-white   ">
          {product.productName}
        </p>
        <div className="flex gap-1 items-center -mt-2">
          <p className="text-sm font-medium">{formatPrice(product.price)}</p>
          <p className="flex text-md  font-serif font-bold items-center bg-red-600  px-2 rounded-lg text-white">
            -{product.discountNumber}%
          </p>
          <p className="my-4 text-sm line-through">
            {formatPrice(
              product.price / ((100 - product.discountNumber) / 100)
            )}
          </p>
        </div>
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
