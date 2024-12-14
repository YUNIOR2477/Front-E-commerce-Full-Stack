"use client";
import React, { useState } from "react";
import InputOrder from "./components/input";
import InfoShopping from "./components/infoShopping";
import { useGetOrderByStripeId } from "@/api/getOrderByStripeId";
import { ProductType } from "@/types/product";
import { ResponseType } from "@/types/response";
import { Card } from "@/components/ui/card";
import { Separator } from "@radix-ui/react-dropdown-menu";
import { formatPrice } from "@/lib/formatPrice";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/use-toast";

const Page = () => {
  const [search, setSearch] = useState("");
  const { result, loading }: ResponseType = useGetOrderByStripeId(search);
  let totalPrices = 0;
  if (!loading && result[0] !== undefined) {
    const prices = result[0].products.map(
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      (product: { price: any }) => product.price
    );
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
    const total = prices.reduce((a: any, b: any) => a + b, 0);
    totalPrices = total;
  }
  return (
    <div className="md:max-w-7xl max-w-6xl px-4 py-11 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-7 text-3xl font-bold text-center">
        Solicite la informacion de su pedido
      </h1>
      <div className="flex max-w-4xl items-center space-x-2 m-auto p-4">
        <InputOrder setSearch={setSearch} />
      </div>
      <div className="grid lg:grid-cols-2 lg:gap-5 mt-4">
        <div className="lg:shadow-2xl lg:pl-3 rounded-lg">
          {totalPrices === 0 && search !== "" && (
            <p className="lg:mt-20 md:text-lg text-primary mb-3 lg-3 text-center">
              🚫 Codigo del pedido incorrecto, ingrese un codigo valido 🚫
            </p>
          )}
          <div>
            {!loading &&
              result[0] !== undefined &&
              result[0].products.map((product: ProductType) => (
                // eslint-disable-next-line react/jsx-key
                <div key={product.id}>
                  <ul>
                    <InfoShopping product={product} />
                  </ul>
                </div>
              ))}
          </div>
        </div>
        <div className=" lg:flex lg:items-center justify-center md:-mt-2 -ml-2">
          <Card className="p-6 lg:w-full rounded-lg shadow-black dark:shadow-white bg-slate-100 dark:bg-slate-900">
            <p className="mb-3 text-lg font-semibold">Tu pedido</p>
            <Separator className="bg-slate-500 dark:bg-slate-200" />
            <div className="flex justify-between gap-5 my-4">
              <p className="text-md font-semibold">Total:</p>
              <p>{formatPrice(totalPrices)}</p>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button
                onClick={() => {
                  if (totalPrices !== 0 && search !== "") {
                    setSearch("");
                    const productCodeInput = document.getElementById(
                      "productCode"
                    ) as HTMLInputElement;
                    if (productCodeInput) {
                      productCodeInput.value = "";
                    }
                    toast({
                      title:
                        "Tu peticion sera procesada, uno de nuestros acesores se comunicaran contigo",
                      variant: "default",
                    });
                  } else {
                    toast({
                      title: "Debes digitar correctamente el codigo de tu pedido",
                      variant: "destructive",
                    });
                  }
                }}
                className="w-full"
              >
                Cancelar pedido
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Page;
