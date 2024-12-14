"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
const PrivacyPolicy = () => {
  const router = useRouter();
  return (
    <div className="max-w-5xl p-4 mx-auto sm:py-16 sm:px-24 bg-gray-100 dark:bg-slate-900 rounded-lg shadow-lg my-7">
      {" "}
      <h1 className="text-4xl font-bold text-center">
        Política de Privacidad
      </h1>{" "}
      <div className="my-6">
        {" "}
        <h2 className="text-2xl font-semibold">1. Introducción</h2>{" "}
        <p className="my-3 text-justify">
          {" "}
          En E-COMMERCE YUNIOR2477, valoramos tu privacidad y nos comprometemos
          a proteger tu información personal. Esta política de privacidad
          describe cómo recopilamos, utilizamos y compartimos tu información.{" "}
        </p>{" "}
        <h2 className="text-2xl font-semibold">
          2. Información que Recopilamos
        </h2>{" "}
        <p className="my-3 text-justify">
          {" "}
          Recopilamos información personal que nos proporcionas directamente,
          como tu nombre, dirección de correo electrónico, dirección de envío y
          detalles de pago. También recopilamos información automáticamente a
          través de cookies y tecnologías similares cuando utilizas nuestro
          sitio web.{" "}
        </p>{" "}
        <h2 className="text-2xl font-semibold">
          3. Uso de la Información
        </h2>{" "}
        <p className="my-3 text-justify">
          {" "}
          Utilizamos tu información para procesar tus pedidos, mejorar nuestros
          servicios, comunicarnos contigo y personalizar tu experiencia en
          nuestro sitio web. También podemos utilizar tu información para fines
          de marketing, siempre y cuando hayas dado tu consentimiento.{" "}
        </p>{" "}
        <h2 className="text-2xl font-semibold">
          4. Compartir Información
        </h2>{" "}
        <p className="my-3 text-justify">
          {" "}
          No compartimos tu información personal con terceros, excepto cuando
          sea necesario para procesar tu pedido, cumplir con la ley o proteger
          nuestros derechos. Podemos compartir información no personal de manera
          agregada para fines de análisis y marketing.{" "}
        </p>{" "}
        <h2 className="text-2xl font-semibold">5. Seguridad</h2>{" "}
        <p className="my-3 text-justify">
          {" "}
          Implementamos medidas de seguridad para proteger tu información
          personal contra el acceso no autorizado, la alteración, divulgación o
          destrucción. Sin embargo, ninguna transmisión de datos por Internet es
          completamente segura, por lo que no podemos garantizar la seguridad
          absoluta de tu información.{" "}
        </p>{" "}
        <h2 className="text-2xl font-semibold">6. Tus Derechos</h2>{" "}
        <p className="my-3 text-justify">
          {" "}
          Tienes derecho a acceder, corregir o eliminar tu información personal.
          También puedes oponerte al procesamiento de tu información personal o
          solicitar la limitación del mismo. Para ejercer estos derechos, por
          favor contáctanos a través de nuestro formulario de contacto en el
          sitio web.{" "}
        </p>{" "}
        <h2 className="text-2xl font-semibold">
          7. Cambios en la Política de Privacidad
        </h2>{" "}
        <p className="my-3 text-justify">
          {" "}
          Nos reservamos el derecho de modificar esta política de privacidad en
          cualquier momento. Las modificaciones entrarán en vigor inmediatamente
          después de su publicación en nuestro sitio web. Te recomendamos
          revisar esta política periódicamente para estar al tanto de cualquier
          cambio.{" "}
        </p>{" "}
        <h2 className="text-2xl font-semibold">8. Contacto</h2>{" "}
        <p className="my-3 text-justify">
          {" "}
          Si tienes alguna pregunta o inquietud sobre esta política de
          privacidad, no dudes en contactarnos a través de nuestro formulario de
          contacto en el sitio web.{" "}
        </p>{" "}
      </div>{" "}
      <Button
        className="w-full "
        onClick={() => router.push("/")}
      >
        {" "}
        Volver a la tienda{" "}
      </Button>{" "}
    </div>
  );
};
export default PrivacyPolicy;
