"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
const TermsAndConditions = () => {
  const router = useRouter();
  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24 dark:bg-slate-900 bg-gray-100 rounded-lg shadow-lg my-7">
      {" "}
      <h1 className="text-4xl font-bold text-center">
        Términos y Condiciones
      </h1>{" "}
      <div className="my-6">
        {" "}
        <h2 className="text-2xl font-semibold">1. Introducción</h2>{" "}
        <p className="my-3 text-justify">
          {" "}
          Bienvenido a E-COMMERCE YUNIOR2477. Al utilizar nuestro sitio web y
          realizar compras en nuestra tienda en línea, aceptas cumplir con los
          siguientes términos y condiciones. Por favor, léelos detenidamente.{" "}
        </p>{" "}
        <h2 className="text-2xl font-semibold">2. Uso del Sitio Web</h2>{" "}
        <p className="my-3 text-justify">
          {" "}
          Al acceder a nuestro sitio web, te comprometes a utilizarlo de manera
          responsable y a no realizar actividades que puedan dañar, interrumpir
          o afectar negativamente el funcionamiento del sitio.{" "}
        </p>{" "}
        <h2 className="text-2xl font-semibold">3. Productos y Precios</h2>{" "}
        <p className="my-3 text-justify">
          {" "}
          Nos esforzamos por ofrecer productos de alta calidad y describirlos
          con precisión. Sin embargo, no garantizamos que las descripciones de
          los productos sean completamente precisas, completas, confiables,
          actuales o libres de errores. Los precios están sujetos a cambios sin
          previo aviso.{" "}
        </p>{" "}
        <h2 className="text-2xl font-semibold">4. Pagos y Facturación</h2>{" "}
        <p className="my-3 text-justify">
          {" "}
          Aceptamos varios métodos de pago para tu conveniencia. Al realizar una
          compra, te comprometes a proporcionar información de pago precisa y
          completa. Nos reservamos el derecho de rechazar cualquier pedido si
          sospechamos de fraude o actividad no autorizada.{" "}
        </p>{" "}
        <h2 className="text-2xl font-semibold">
          5. Envíos y Devoluciones
        </h2>{" "}
        <p className="my-3 text-justify">
          {" "}
          Procesamos y enviamos los pedidos lo más rápido posible. Si no estás
          satisfecho con tu compra, puedes devolver los productos dentro de los
          30 días posteriores a la recepción, siempre que estén en su estado
          original.{" "}
        </p>{" "}
        <h2 className="text-2xl font-semibold">6. Privacidad</h2>{" "}
        <p className="my-3 text-justify">
          {" "}
          Nos tomamos muy en serio tu privacidad. Consulta nuestra Política de
          Privacidad para obtener más información sobre cómo recopilamos,
          utilizamos y protegemos tu información personal.{" "}
        </p>{" "}
        <h2 className="text-2xl font-semibold">
          7. Cambios en los Términos
        </h2>{" "}
        <p className="my-3 text-justify">
          {" "}
          Nos reservamos el derecho de modificar estos términos y condiciones en
          cualquier momento. Las modificaciones entrarán en vigor inmediatamente
          después de su publicación en nuestro sitio web.{" "}
        </p>{" "}
        <h2 className="text-2xl font-semibold">8. Contacto</h2>{" "}
        <p className="my-3 text-justify">
          {" "}
          Si tienes alguna pregunta o inquietud sobre estos términos y
          condiciones, no dudes en contactarnos a través de nuestro formulario
          de contacto en el sitio web.{" "}
        </p>{" "}
      </div>{" "}
      <Button
        className="w-full"
        onClick={() => router.push("/")}
      >
        {" "}
        Volver a la tienda{" "}
      </Button>{" "}
    </div>
  );
};
export default TermsAndConditions;
