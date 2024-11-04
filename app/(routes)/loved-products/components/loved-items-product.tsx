/* eslint-disable @next/next/no-img-element */
import { Button } from "@/components/ui/button";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

interface LovedItemsProps {
  product: ProductType;
}

const LovedItemsProduct = (props: LovedItemsProps) => {
  const { product } = props;
  const router = useRouter();
  const { removeLovedItem } = useLovedProducts();
  const { addItem } = useCart();
  const addToCheckOut = () => {
    addItem(product);
    removeLovedItem(product.id);
  };
  return (
    <li className="flex py-6 border-b">
      <div onClick={() => router.push(`/product/${product.slug}`)}>
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
          alt={`product` + product.productName}
          className="w-32 h-32 overflow-hidden rounded-md sm:w-auto sm:h-32 object-cover cursor-pointer"
        />
      </div>
      <div className="flex justify-between flex-1 px-6 ">
        <div>
          <h2 className="text-lg font-bold">{product.productName}</h2>
          <p className="font-medium mb-2">{formatPrice(product.price)}</p>
          <div className="flex items-center gap-2">
            <p className="px-2 py-1 text-xs text-white bg-black rounded-lg dark:text-black w-fit dark:bg-white font-serif">
              {product.material}
            </p>
            <p className="px-2 py-1 text-xs text-white bg-black dark:bg-white rounded-lg dark:text-black w-fit font-serif">
              {product.origin}
            </p>
          </div>
          <Button
            className="mt-3 rounded-full w-full"
            onClick={() => addToCheckOut()}
          >
            Añadir al carrito 🛒
          </Button>
        </div>
        <div>
          <button
            className={cn(
              "rounded-full flex items-center justify-center bg-white border shadow-md p-1 hover:scale-110 transition"
            )}
          >
            <X size={20} className="text-red-700" onClick={() => removeLovedItem(product.id)} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default LovedItemsProduct;
