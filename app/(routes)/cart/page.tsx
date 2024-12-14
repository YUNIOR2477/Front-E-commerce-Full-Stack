"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import CartItem from "./components/cart-item";
import { Card } from "@/components/ui/card";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "@/api/payment";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
export default function Page() {
  const getFromLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
      const data = localStorage.getItem(key);
      return data ? JSON.parse(data) : null;
    }
    return null;
  };
  const user = getFromLocalStorage("user");
  const router = useRouter();
  const { items } = useCart();
  const totalPrice = items.reduce((total, product) => total + product.price, 0);
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
  );
  const buyStripe = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: items,
      });
      await stripe?.redirectToCheckout({
        sessionId: res.data.stripeSession.id,
      });
    } catch (error) {
      console.log(error);
    }

  };
  return (
    <div className="md:max-w-7xl max-w-6xl px-4 py-11 mx-auto sm:px-6 lg:px-8">
      {" "}
      <h1 className="mb-7 text-3xl font-bold text-center">
        Carrito de compras
      </h1>{" "}
      <div className="grid lg:grid-cols-2 lg:gap-5">
        {" "}
        <div className="lg:pl-3 rounded-lg">
          {" "}
          {items.length === 0 && (
            <p className="lg:mt-20 text-lg lg-3 text-center mb-5">
              {" "}
              No hay productos en el carrito 🥲{" "}
            </p>
          )}{" "}
          <ul>
            {" "}
            {items.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}{" "}
          </ul>{" "}
        </div>{" "}
        <div className="w-full lg:flex lg:items-center -ml-2 pl-1 mt-1">
          {" "}
          <Card className="p-6 lg:w-full rounded-lg shadow-black dark:shadow-white bg-slate-100 dark:bg-slate-900">
            {" "}
            <p className="mb-3 text-lg font-semibold">Tus pedidos</p>{" "}
            <Separator className="bg-slate-500 dark:bg-slate-200" />{" "}
            <div className="flex justify-between gap-5 my-4">
              {" "}
              <p className="text-md font-semibold">Total:</p>{" "}
              <p>{formatPrice(totalPrice)}</p>{" "}
            </div>{" "}
            <div className="flex items-center justify-center w-full mt-3">
              {" "}
              <Button
                className="w-full"
                onClick={() => {
                  if (items.length === 0) {
                    toast({
                      title:
                        "Debes añadir mínimo un producto al carrito de compras 🥲",
                      variant: "destructive",
                    });
                    return;
                  }
                  if (user === null) {
                    toast({
                      title:
                        "Debes iniciar sesión para poder crear una orden de compra. 📲",
                      variant: "destructive",
                    });
                    router.push("/login");
                  } else {
                    buyStripe();
                  }
                }}
              >
                {" "}
                Comprar{" "}
              </Button>{" "}
            </div>{" "}
          </Card>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
