"use client";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Store } from "lucide-react";

const BannerProducts = () => {
  const router = useRouter();
  return (
    <>
      <div className="text-center">
        <p className="text-lg">Sumergete en una experiencia unica</p>
        <h4 className="mt-2 text-5xl font-extrabold uppercase">
          Productos exclusivos
        </h4>
        <p className="my-2 text-lg">Moda, Calidad y Economia...</p>
        <Button
          onClick={() => router.push("/")}
          className=" font-serif font-semibold text-center md:w-40"
        >
          Tienda
          <Store />
        </Button>
      </div>
      <div className="h-[250px] bg-cover md:h-[400px] bg-[url('/slider-image.png')] bg-center w-full mt-14"></div>
    </>
  );
};

export default BannerProducts;
