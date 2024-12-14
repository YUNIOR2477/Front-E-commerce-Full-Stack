"use client";
import { Contact, Info, LogOut, Menu, UserCircle } from "lucide-react";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import Link from "next/link";
import { useGetCategories } from "@/api/getProducts";
import { ResponseType } from "@/types/response";
import { CategoryType } from "@/types/category";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const ItemsMenuMobile = () => {
  const { result, loading }: ResponseType = useGetCategories();
  const router = useRouter();
  const getFromLocalStorage = (key: string) => {
    if (typeof window !== "undefined") {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : null;
    }
    return null;
  };
  const user = getFromLocalStorage("user");
  const username = user ? user.username : null;
  return (
    <Popover>
      <PopoverTrigger>
        <Menu />
      </PopoverTrigger>
      <PopoverContent className="w-max flex gap-2">
        <div className="w-[100%]">
          <h1 className="text-center text-lg font-bold">Categorias</h1>
          {!loading &&
            result !== undefined &&
            result.map((category: CategoryType) => (
              <Link
                key={category.id}
                href={category.url}
                className="block bg-slate-200 dark:bg-slate-900 m-2 p-2 text-sm rounded-lg font-semibold "
              >
                {category.categoryName}
              </Link>
            ))}
        </div>
        <div className=" flex flex-col justify-center gap-6 w-[40%]">
        <Link href={username===null?"/login":""} legacyBehavior passHref>
          <Button
            className="w-full h-[50px]"
            onClick={() => router.push("/shopping")}
          >
             <UserCircle/>
             {username === null ? "Iniciar Sesión" : username}
          </Button>
          </Link>
          <Link href="/logout" legacyBehavior passHref>
            <Button
              className={
                username === null
                  ? "hidden"
                  : "w-full h-[50px]"
              }
            >
              <LogOut/>
              Cerrar sesion
            </Button>
          </Link>
          <Button
            className="w-full h-[50px]"
            onClick={() => router.push("/shopping")}
          >
            <Info />
            Compras
          </Button>
          <Button
            className="w-full h-[50px]"
            onClick={() =>
              (window.location.href = "https://github.com/YUNIOR2477")
            }
          >
            <Contact />
            Contacto
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ItemsMenuMobile;
