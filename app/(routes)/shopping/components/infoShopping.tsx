/* eslint-disable @next/next/no-img-element */
import { formatPrice } from "@/lib/formatPrice";
import { useRouter } from "next/navigation";
import React from "react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const InfoShopping = (props: { product: any }) => {
  const { product } = props;
  const router = useRouter();
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
          <h2 className="text-md md:text-lg font-bold">
            {product.productName}
          </h2>
          <p className="font-semibold text-sm md:text-lg">
            {formatPrice(product.price)}
          </p>
        </div>
        <div className="flex items-end justify-between gap-3">
          <p className="px-2 py-1 text-white bg-black rounded-lg text-sm md:text-md dark:bg-white dark:text-black w-fit font-serif">
            Rojo, Negro
          </p>
          <p className="px-2 py-1 text-white bg-black rounded-lg text-sm md:text-md dark:bg-white dark:text-black w-fit font-serif">
            {product.origin}
          </p>
        </div>
        <div></div>
      </div>
    </li>
  );
};

export default InfoShopping;
