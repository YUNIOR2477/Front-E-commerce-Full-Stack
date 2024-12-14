import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { formatPrice } from "@/lib/formatPrice";
import { ProductType } from "@/types/product";
import {Heart } from "lucide-react";
import React from "react";

import { toast } from "@/components/ui/use-toast";
import ComboBoxColors from "@/components/comboBox-colors";

export type InfoProductProps = {
  product: ProductType;
};

const InfoProduct = (props: InfoProductProps) => {
  const { product } = props;
  const { addItem } = useCart();
  const { addLoveItems } = useLovedProducts();
  const [value, setValue] = React.useState("");
  const discount= (100-product.discountNumber)/100
  return (
    <Card className="p-6 md:ml-8 rounded-lg shadow-black dark:shadow-white bg-slate-100 dark:bg-slate-900 w-[100%]">
      <div className="justify-between mb-3 flex">
        <h1 className="text-2xl mb-2">{product.productName}</h1>
        <div className="flex items-center justify-end gap-3">
        <p className="px-2 py-1 text-xs font-serif text-white rounded-lg bg-black dark:bg-white dark:text-black w-fit">
            {product.category.categoryName}
          </p>
          <p className="px-2 py-1 text-xs font-serif text-white rounded-lg bg-black dark:bg-white dark:text-black w-fit">
            {product.material}
          </p>
          <p className="px-2 py-1 text-xs font-serif text-white rounded-lg bg-black dark:bg-white dark:text-black w-fit">
            {product.origin}
          </p>
        </div>
      </div>
      <Separator className="my-4 bg-slate-500" />
      <p className="text-justify text-primary">{product.description}</p>
      <Separator className="mt-4 bg-slate-500" />
      <div className="flex gap-4 ms:gap-4 items-center">
        <p className="my-4 ms:text-2xl text-xl font-medium">{formatPrice(product.price)}</p>
        <p className="flex text-xl ms:text-4xl font-serif font-bold items-center bg-red-600  px-2 rounded-lg text-white">
          -{product.discountNumber}%
        </p>
        <p className="my-4 text-lg line-through">
          {formatPrice(product.price/discount)}
        </p>
        <ComboBoxColors images={product.images} value={value} setValue={setValue}/>
      </div>
      <div className="flex items-center gap-5">
        <Button className="w-full" onClick={() => {
          if(value!==""){
          product.value=value
          addItem(product)}else{
            toast({
              title: "Debes seleccionar un color para tu producto 🎨",
              variant:"destructive",
            });
          }}}>
          Añadir al carrito
        </Button>
        <Heart
          onClick={() => addLoveItems(product)}
          width={30}
          strokeWidth={1}
          className="transition duration-300 cursor-pointer hover:fill-black dark:hover:fill-white"
        />
      </div>
    </Card>
  );
};

export default InfoProduct;
