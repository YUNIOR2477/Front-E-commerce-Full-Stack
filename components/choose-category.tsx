
"use client";
import { useGetCategories } from "@/api/getProducts";
import { CategoryType } from "@/types/category";
import { ResponseType } from "@/types/response";
import Image from "next/image";
import Link from "next/link";

const ChooseCategory = () => {
  const { result,loading }: ResponseType = useGetCategories();
  return (
    <div className="max-w-7xl py-2 mx-auto sm:py-16 sm:px-24">
      <h3 className="px-1 pb-4 text-4xl sm:pb-8 text-center font-bold">
        Elige tu categoria favorita
      </h3>
      <div className="grid gap-5 lg:grid-cols-5 grid-cols-3 p-3 md:p-0">
        {!loading &&
          result !== undefined &&
          result.map((category:CategoryType) => (
            <Link
              key={category.id}
              href={`/category/${category.slug}`}
              className="relative max-w-xs mx-auto overflow-hidden bg-no-repeat bg-cover rounded-3xl "
            >
              <Image
                src={`${process.env.NEXT_PUBLIC_BACKEND_URL}${category.mainImage.url}`}
                alt={category.categoryName}
                width={250} height={250}
                className="md:max-w-[205px] transition duration-300 ease-in-out rounded-3xl hover:scale-125 object-cover"
              />
              <p className="absolute w-full py-2 text-lg font-bold text-center text-white bottom-8 backdrop-brightness-50">{category.categoryName}</p>
            </Link>
          ))}
      </div>
    </div>
  );
};

export default ChooseCategory;
