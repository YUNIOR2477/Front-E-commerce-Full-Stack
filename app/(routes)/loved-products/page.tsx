"use client";
import { useLovedProducts } from "@/hooks/use-loved-products";
import LovedItemsProduct from "./components/loved-items-product";
export default function Page() {
  const { lovedItems } = useLovedProducts();
  return (
    <div className="max-w-4xl py-4 mx-auto sm:py-3 sm:px-32 mb-3">
      {" "}
      <h1 className="text-center text-3xl mb-3 font-medium">
        Tus productos favoritos
      </h1>{" "}
      <div className="p-4">
        {" "}
        {lovedItems.length === 0 ? (
          <p className="text-center shadow-xl p-5">
            No has añadido productos a tu lista de favoritos 💔
          </p>
        ) : (
          <ul>
            {" "}
            {lovedItems.map((item) => (
              <LovedItemsProduct key={item.id} product={item} />
            ))}{" "}
          </ul>
        )}{" "}
      </div>{" "}
    </div>
  );
}
