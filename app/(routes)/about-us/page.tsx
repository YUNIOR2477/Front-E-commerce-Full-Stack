"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import React from "react";
const AboutUs = () => {
  const router = useRouter();
  return (
    <div className="max-w-5xl md:flex gap-6 p-4 items-center mx-auto sm:py-16 sm:px-24 bg-gray-100 dark:bg-slate-900 rounded-lg shadow-lg my-7">
      {" "}
      <Image
        src="/about-us.png"
        alt="Imagen de equipo"
        className="rounded-lg w-[50%] h-[50%] object-cover m-auto"
        width={500}
        height={500}
      />{" "}
      <div className="text-center md:text-left">
        {" "}
        <h1 className="text-4xl font-bold">Sobre Nosotros</h1>{" "}
        <p className="my-3 text-justify text-slate-800 dark:text-slate-300">
          {" "}
          Bienvenido a{" "}
          <span className="font-semibold">E-COMMERCE YUNIOR2477</span>. Somos
          una tienda en línea dedicada a ofrecerte una amplia variedad de
          prendas y ropa de la mejor calidad. Nuestro compromiso es brindarte
          productos que combinan moda, calidad y economía.{" "}
        </p>{" "}
        <p className="my-3 text-justify text-slate-800 dark:text-slate-300">
          {" "}
          En <span className="font-semibold">E-COMMERCE YUNIOR2477</span>,
          creemos en la importancia de la satisfacción del cliente. Trabajamos
          arduamente para asegurarnos de que cada compra sea una experiencia
          única y agradable. Si tienes alguna pregunta o necesitas asistencia,
          nuestro equipo está siempre dispuesto a ayudarte.{" "}
        </p>{" "}
        <p className="my-3 text-center font-serif font-medium text-slate-800 dark:text-slate-300">
          {" "}
          ¡Gracias por elegirnos y esperamos que disfrutes de tus compras con
          nosotros!{" "}
        </p>{" "}
        <Button className="w-full" onClick={() => router.push("/")}>
          {" "}
          Volver a la tienda{" "}
        </Button>{" "}
      </div>{" "}
    </div>
  );
};
export default AboutUs;
