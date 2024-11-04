"use client";

import { useGetProductBySlug } from "@/api/getProductBySlug";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import SkeletonProduct from "./components/skeleton-product";
import CarouselProduct from "./components/carousel-product";
import InfoProduct from "./components/info-product";

export default function Page() {
  const { productSlug } = useParams() as { productSlug: string };
  const { result }: ResponseType = useGetProductBySlug(productSlug);
  if (result === null) {
    return <SkeletonProduct />;
  }
  return (
    <div className="max-w-7xl py-4 mx-auto sm:py-10 my-6 sm:px-24 shadow-2xl rounded-lg">
      <div className="grid md:grid-cols-2 w-[100%]">
        <div>
          <CarouselProduct images={result[0].images}/>
        </div>
        <div className="flex items-center">
          <InfoProduct product={result[0]}/>
        </div>
      </div>
    </div>
  );
}
