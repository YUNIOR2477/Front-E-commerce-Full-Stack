"use client";
import { BaggageClaim, Heart, ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import MenuList from "./menu-list";
import ItemsMenuMobile from "./menu-list-mobile";
import ToggleTheme from "./toggle-theme";
import { useCart } from "@/hooks/use-cart";
import { useLovedProducts } from "@/hooks/use-loved-products";
import { Button } from "./ui/button";

const Navbar = () => {
  const router = useRouter();
  const cart = useCart();
  const { lovedItems } = useLovedProducts();
  return (
    <div className="flex items-center justify-between py-4 mx-auto cursor-pointer sm:max-w-4xl md:max-w-7xl">
      <h1 className="text-3xl uppercase" onClick={() => router.push("/")}>
        E-commerce
        <span className="font-bold"> Yunior2477</span>
      </h1>
      <div className="items-center justify-between hidden sm:flex">
        <MenuList />
      </div>
      <div className="flex sm:hidden mr-2">
        <ItemsMenuMobile />
      </div>
      <div className="flex items-center justify-between gap-2 sm:gap-4">
        {cart.items.length === 0 ? (
          <Button
            variant={"outline"}
            size={"lg"}
            onClick={() => router.push("/cart")}
          >
            <ShoppingCart
              strokeWidth="2"
              className="cursor-pointer "
              onClick={() => router.push("/cart")}
            />
          </Button>
        ) : (
          <Button
            variant={"outline"}
            size={"lg"}
            className="flex gap-1"
            onClick={() => router.push("/cart")}
          >
            <BaggageClaim strokeWidth={1} className="cursor-pointer" />
            <span>{cart.items.length}</span>
          </Button>
        )}
        <Button
          variant="outline"
          size="icon"
          onClick={() => router.push("/loved-products")}
        >
          <Heart
            strokeWidth="2"
            className={`cursor-pointer ${
              lovedItems.length > 0 && "fill-black dark:fill-white"
            }`}
          />
        </Button>
        <ToggleTheme />
      </div>
    </div>
  );
};
export default Navbar;
