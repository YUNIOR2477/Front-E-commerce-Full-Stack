/* eslint-disable @next/next/no-img-element */
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";
interface CartItemProps {
  product: ProductType;
}

const CartItem = (props: CartItemProps) => {
  const { product } = props;
  const router = useRouter();
  const { removeItem } = useCart();
  return (
    <li className="flex py-6 border-b">
      <div
        className="cursor-pointer"
        onClick={() => router.push(`/product/${product.slug}`)}
      >
        <img
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
          alt={"product-image: " + product.slug}
          className="w-20 h-20 overflow-hidden rounded-md md:w-32 md:h-32 object-contain"
        />
      </div>
      <div className="flex justify-between flex-1 px-6">
        <div className="">
        <h2 className="text-md md:text-lg font-bold">{product.productName}</h2>
        <p className="font-semibold text-sm md:text-lg">{formatPrice(product.price)}</p>
        </div>
        <div className="flex items-end justify-between gap-3">
          <p className="px-2 py-1 text-white bg-black rounded-lg text-sm md:text-md dark:bg-white dark:text-black w-fit font-serif">
            {product.material}
          </p>
          <p className="px-2 py-1 text-white bg-black rounded-lg text-sm md:text-md dark:bg-white dark:text-black w-fit font-serif">
            {product.value===""?"sin color":product.value}
          </p>
        </div>
        <div>
           <button className={cn("rounded-full flex items-center bg-white dark:bg-slate-950 border-2 shadow-md p-1 hover:scale-110 transition text-red-700")}  onClick={()=>removeItem(product.id)}>
            <Trash2 size={20}/>
           </button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
