"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React, { useEffect } from "react";
import { useCart } from "@/hooks/use-cart";
const Page = () => {
  const router = useRouter();
  const { removeAll } = useCart();
  useEffect(() => {
    removeAll();
  }, [removeAll]);
  return (
    <div className="max-w-5xl md:flex gap-6 p-4 items-center mx-auto sm:py-16 sm:px-24">
      {" "}
      <Image
        src="/compra.png"
        alt="Imagen de compra"
        className="rounded-lg w-[50%] h-[50%] object-cover m-auto"
        width={500}
        height={500}
      />{" "}
      <div>
        {" "}
        <h1 className="text-3xl font-medium">¡Gracias por tu compra!</h1>{" "}
        <p className="my-3 text-justify">
          {" "}
          En Tienda YUNIOR2477, nos alegra que hayas elegido nuestros productos.
          Estamos comprometidos en ofrecerte la mejor calidad y servicio.{" "}
        </p>{" "}
        <p className="my-3 text-justify">
          {" "}
          Tu pedido será procesado y enviado a la brevedad. Si tienes alguna
          pregunta o necesitas asistencia, no dudes en contactarnos.{" "}
        </p>{" "}
        <p className="my-3 text-center font-serif font-medium">
          {" "}
          ¡Disfruta de tu compra y vuelve pronto!🎉{" "}
        </p>{" "}
        <Button className="w-full" onClick={() => router.push("/")}>
          {" "}
          Volver a la tienda{" "}
        </Button>{" "}
      </div>{" "}
    </div>
  );
};
export default Page;
