import ComboBoxColors from "@/components/comboBox-colors";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { cn } from "@/lib/utils";
import { ProductType } from "@/types/product";
import { ShoppingCart, Trash2 } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useState, useCallback } from "react";
interface LovedItemsProps {
  product: ProductType;
}
const LovedItemsProduct: React.FC<LovedItemsProps> = ({ product }) => {
  const router = useRouter();
  const { removeLovedItem } = useLovedProducts();
  const { addItem } = useCart();
  const [value, setValue] = useState("");
  const handleAddToCart = useCallback(() => {
    if (value !== "") {
      product.value = value;
      addItem(product);
    } else {
      toast({
        title: "Debes seleccionar un color para tu producto 🎨",
        variant: "destructive",
      });
    }
  }, [value, product, addItem]);
  const handleRemoveLovedItem = useCallback(() => {
    removeLovedItem(product.id);
  }, [removeLovedItem, product.id]);
  const handleNavigate = useCallback(() => {
    router.push(`/product/${product.slug}`);
  }, [router, product.slug]);
  return (
    <li className="flex py-6 mb-1 bg-slate-200 pl-4 rounded-lg dark:bg-slate-900">
      {" "}
      <div onClick={handleNavigate} className="flex items-center">
        {" "}
        <Image
          src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${product.images[0].url}`}
          alt={`product ${product.productName}`}
          width={1000}
          height={1000}
          className="md:w-[150px] md:h-[150px] w-[100px] h-[100px] overflow-hidden rounded-md object-cover cursor-pointer"
        />{" "}
      </div>{" "}
      <div className="flex justify-between flex-1 px-6">
        {" "}
        <div>
          {" "}
          <h2 className="text-md md:text-lg font-bold">
            {" "}
            {product.productName}{" "}
          </h2>{" "}
          <div className="flex gap-2 items-center -mt-1">
            {" "}
            <p className="md:text-sm text-sm font-medium">
              {formatPrice(product.price)}
            </p>{" "}
            <p className="flex md:text-md text-sm font-serif font-bold items-center bg-red-600 px-2 rounded-lg text-white">
              {" "}
              -{product.discountNumber}%{" "}
            </p>{" "}
            <p className="my-4 md:text-sm text-sm line-through">
              {" "}
              {formatPrice(
                product.price / ((100 - product.discountNumber) / 100)
              )}{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex items-end gap-3 -mt-2">
            {" "}
            <p className="px-2 mt-1 py-1 md:text-xs text-[10px] font-serif text-white rounded-lg bg-black dark:bg-white dark:text-black w-fit">
              {" "}
              {product.category.categoryName}{" "}
            </p>{" "}
            <p className="px-2 py-1 md:text-xs text-[10px] font-serif text-white rounded-lg bg-black dark:bg-white dark:text-black w-fit">
              {" "}
              {product.material}{" "}
            </p>{" "}
            <p className="px-2 py-1 md:text-xs text-[10px] font-serif text-white rounded-lg bg-black dark:bg-white dark:text-black w-fit">
              {" "}
              {product.origin}{" "}
            </p>{" "}
          </div>{" "}
          <div className="flex justify-between gap-3 items-center mt-3">
            {" "}
            <ComboBoxColors
              images={product.images}
              value={value}
              setValue={setValue}
            />{" "}
            <Button
              className="md:w-[240px] w-[130px] md:text-[14px] text-xs"
              onClick={handleAddToCart}
            >
              {" "}
              Añadir al carrito <ShoppingCart size={20} />{" "}
            </Button>{" "}
          </div>{" "}
        </div>{" "}
        <div>
          {" "}
          <button
            className={cn(
              "rounded-full flex items-center bg-white dark:bg-slate-950 border-2 shadow-md p-1 hover:scale-110 transition text-red-700"
            )}
            onClick={handleRemoveLovedItem}
          >
            {" "}
            <Trash2 size={20} />{" "}
          </button>{" "}
        </div>{" "}
      </div>{" "}
    </li>
  );
};
export default LovedItemsProduct;
