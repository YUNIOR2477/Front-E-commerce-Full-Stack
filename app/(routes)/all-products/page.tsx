"use client";
import { useGetAllProducts } from "@/api/getAllProducts";
import ProductCard from "@/components/product-card";
import SkeletonSchema from "@/components/skeletonSchema";
import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response";
import React, { useState } from "react";

const Page = () => {
  const { result, loading }: ResponseType = useGetAllProducts();
  const [searchTerm, setSearchTerm] = useState("");
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };
  const filteredProducts = result?.filter(
    (product: {
      productName: string;
      category: { categoryName: string };
      material: string;
    }) =>
      product.productName?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.categoryName
        ?.toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      product.material?.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const productsToShow = searchTerm === "" ? result : filteredProducts;
  return (
    <div className="max-w-max py-4 mx-auto sm:pb-10 sm:px-24">
      {" "}
      <h1 className="px-2 text-4xl sm:pb-5 text-center font-bold mt-3">
        {" "}
        Todos los productos{" "}
      </h1>{" "}
      <div className="px-4 mb-4">
        {" "}
        <input
          type="text"
          placeholder="Buscar productos, Categorias y Materiales..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full p-2 border border-gray-300 rounded dark:bg-slate-900 bg-slate-100 mb-4"
        />{" "}
      </div>{" "}
      <div className="grid gap-3 grid-cols-2 md:grid-cols-4 md:gap-5 px-4">
        {" "}
        {loading && <SkeletonSchema grid={4} />}{" "}
        {!loading &&
          productsToShow &&
          productsToShow.map((product: ProductType) => (
            <ProductCard key={product.id} product={product} />
          ))}{" "}
        {!loading && productsToShow?.length === 0 && (
          <div className="w-full md:ml-8 ml-40 mb-6">
            {" "}
            <p className="text-xl md:my-28">
              {" "}
              No hay productos para este filtro 🥲{" "}
            </p>{" "}
          </div>
        )}{" "}
      </div>{" "}
    </div>
  );
};
export default Page;
