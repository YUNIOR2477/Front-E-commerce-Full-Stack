"use client";

import * as React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useGetCategories } from "@/api/getProducts";
import { CategoryType } from "@/types/category";
import { ResponseType } from "@/types/response";
import { Info } from "lucide-react";

const MenuList = () => {
  const { result, loading }: ResponseType = useGetCategories();
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Sobre nosotros</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[650px] lg:grid-cols-[1fr_.75fr]">
              <li className="row-span-3">
                <NavigationMenuLink asChild>
                  <div className="flex h-full w-full select-none flex-col justify-center rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md cursor-default">
                    <div className="mb-2 mt-4 text-lg font-medium">
                      Bienvenidos a Tienda YUNIOR2477
                    </div>
                    <p className="text-sm leading-tight text-muted-foreground text-justify">
                      En Tienda YUNIOR2477, nos especializamos en ofrecer
                      productos exclusivos que combinan moda, calidad y
                      economía. Desde calzado y ropa hasta accesorios y relojes,
                      tenemos todo lo que necesitas para destacar en cualquier
                      ocasión. Aprovecha nuestras ofertas especiales y sumérgete
                      en una experiencia de compra única.
                    </p>
                  </div>
                </NavigationMenuLink>
              </li>
              <ListItem href="/" title="Tienda">
                Accede a nuestra tienda, informacion y productos.
              </ListItem>
              <ListItem href="/discounts" title="Descuentos">
                Accede a todas nuetras ofertas, promiciones y descuentos.
              </ListItem>
              <ListItem
                title="Contacto"
                onClick={() =>
                  (window.location.href = "https://github.com/YUNIOR2477")
                }
              >
                Repositorio de GitHub YUNIOR2477
              </ListItem>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Categorias</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[500px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[750px] ">
              {!loading &&
                result !== undefined &&
                result.map((category: CategoryType) => (
                  <ListItem
                    key={category.id}
                    title={category.categoryName}
                    href={category.url}
                  >
                    {category.description}
                  </ListItem>
                ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/shopping" legacyBehavior passHref>
            <NavigationMenuLink className="flex p-2 bg-slate-200 dark:bg-slate-900 rounded-lg text-sm font-semibold">
            <Info className="mr-1"/>Compras
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default MenuList;