/* eslint-disable @next/next/no-img-element */
import { formatPrice } from "@/lib/formatPrice";
import { useRouter } from "next/navigation";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InfoShopping = (props: { product: any }) => {
  const { product } = props;
  const router = useRouter();
  return (
    <li className="flex py-6 bg-slate-200 dark:bg-slate-900 -ml-3 pl-3 rounded-lg mb-2">
    <div
      className="cursor-pointer"
      onClick={() => router.push(`/product/${product.slug}`)}
    >
      <img
        src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
        alt={"product-image: " + product.slug}
        className="w-[100px] h-[100px] overflow-hidden rounded-md md:w-[130px] md:h-[130px] object-cover shadow-xl"
      />
    </div>
    <div className="flex justify-between flex-1 px-6">
      <div className="">
        <h2 className="text-md md:text-lg font-bold md:mb-2">
          {product.productName}
        </h2>
        <div className="flex gap-2 items-center -mt-1">
          <p className="md:text-sm text-md font-medium">{formatPrice(product.price)}</p>
          <p className="flex md:text-md  text-sm font-serif font-bold items-center bg-red-600  px-2 rounded-lg text-white">
            -{product.discountNumber}%
          </p>
          <p className="my-4 md:text-sm text-xs line-through">
            {formatPrice(
              product.price / ((100 - product.discountNumber) / 100)
            )}
          </p>
        </div>
        <div className="flex items-end justify-between md:gap-3 gap-1">
          <p className="px-2 py-1 md:text-xs text-[10px] font-serif text-white rounded-lg bg-black dark:bg-white dark:text-black w-fit">
            Color: {product.value === "" ? "sin color" : product.value}
          </p>
          <p className="px-2 mt-1 py-1 md:text-xs text-[10px] font-serif text-white rounded-lg bg-black dark:bg-white dark:text-black w-fit">
            {product.category.categoryName}
          </p>
          <p className="px-2 py-1 md:text-xs text-[10px] font-serif text-white rounded-lg bg-black dark:bg-white dark:text-black w-fit">
            {product.material}
          </p>
          <p className="px-2 py-1 md:text-xs text-[10px] font-serif text-white rounded-lg bg-black dark:bg-white dark:text-black w-fit">
            {product.origin}
          </p>
        </div>
      </div>
    </div>
  </li>
  );
};

export default InfoShopping;
