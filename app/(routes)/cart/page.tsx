"use client";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { useCart } from "@/hooks/use-cart";
import { formatPrice } from "@/lib/formatPrice";
import CartItem from "./components/cart-item";
import { Card } from "@/components/ui/card";
import { loadStripe } from "@stripe/stripe-js";
import { makePaymentRequest } from "@/api/payment";

export default function Page() {
  const { items, removeAll } = useCart();
  const prices = items.map((product) => product.price);
  const totalPrice = prices.reduce((total, price) => total + price, 0);
  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

  const buyStripe = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: items,
      });
      await stripe?.redirectToCheckout(
        {
          sessionId:res.data.stripeSession.id
        }
      )
      removeAll()
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="md:max-w-7xl max-w-6xl px-4 py-11 mx-auto sm:px-6 lg:px-8">
      <h1 className="mb-7 text-3xl font-bold text-center">
        Carrito de compras
      </h1>
      <div className="grid lg:grid-cols-2 lg:gap-5">
        <div className="lg:shadow-2xl lg:pl-3 rounded-lg">
          {items.length === 0 && (
            <p className="lg:mt-20 text-lg lg-3 text-center">
              No hay productos en el carrito 🥲
            </p>
          )}
          <ul>
            {items.map((item) => (
              <CartItem key={item.id} product={item} />
            ))}
          </ul>
        </div>
        <div className="w-full lg:flex lg:items-center">
          <Card className="p-6 lg:w-full rounded-lg shadow-black dark:shadow-white bg-slate-100 dark:bg-slate-900">
            <p className="mb-3 text-lg font-semibold">Tus pedidos</p>
            <Separator className="bg-slate-500 dark:bg-slate-200" />
            <div className="flex justify-between gap-5 my-4">
              <p className="text-md font-semibold">Total:</p>
              <p>{formatPrice(totalPrice)}</p>
            </div>
            <div className="flex items-center justify-center w-full mt-3">
              <Button className="w-full"
              onClick={buyStripe}>Comprar</Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
