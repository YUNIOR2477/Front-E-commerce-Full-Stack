"use client";
import { useGetCategoryProduct } from "@/api/getCategoryProduct";
import { ResponseType } from "@/types/response";
import { useParams } from "next/navigation";
import FiltersControlsCategory from "./components/filters-controls-category";
import SkeletonSchema from "@/components/skeletonSchema";
import { ProductType } from "@/types/product";
import { useState } from "react";
import ProductCard from "@/components/product-card";

export default function Page() {
  const { categorySlug } = useParams() as { categorySlug: string };
  const { result, loading }: ResponseType = useGetCategoryProduct(categorySlug);
  const [filterOrigin, setFilterOrigin] = useState("");
  const filterProduct =
    result !== null &&
    !loading &&
    (filterOrigin === ""
      ? result
      : result.filter(
          (product: ProductType) => product.origin === filterOrigin
        ));
  return (
    <div className="max-w-7xl py-4 mx-auto sm:pb-10 sm:px-24">
      {result !== null && !loading && (
        <h1 className="px-2 md:text-4xl text-3xl sm:pb-5 text-center font-bold mt-3">
          Categoria: {result[0].category.categoryName}
        </h1>
      )}

      <div className="md:flex md:justify-between  mb-14 mt-1 rounded-xl py-4  ">
        <FiltersControlsCategory setFilterOrigin={setFilterOrigin} />
        <div className="grid gap-3 grid-cols-2 md:grid-cols-3 md:gap-5 px-4">
          {loading && <SkeletonSchema grid={3} />}
          {filterProduct !== null &&
            !loading &&
            filterProduct.map((product: ProductType) => (
              <ProductCard key={product.id} product={product} />
            ))}
          {filterProduct !== null && !loading && filterProduct.length === 0 && (
            <div className="w-full md:ml-8 ml-40 mb-6">
              <p className="text-xl md:my-28">
                No hay productos para este filtro 🥲
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
