import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { ProductType } from "@/types/product";
import { toast } from "@/components/ui/use-toast";

interface UseLovedProductType {
  lovedItems: ProductType[];
  addLoveItems: (data: ProductType) => void;
  removeLovedItem: (id: number) => void;
}

export const useLovedProducts = create(
  persist<UseLovedProductType>((set, get) => ({
    lovedItems:[],
    addLoveItems:(data:ProductType)=>{
        const currentLovedItems=get().lovedItems;
        const existingItem=currentLovedItems.find((item)=>item.id === data.id)
        if (existingItem) {
            return toast({
                title:"Producto existente en tu lista de favoritos 🤍",
                variant:"destructive"
            })
        }
        set({
            lovedItems:[...get().lovedItems,data]
        })
        toast({
            title:"Producto añadido a tu lista de favoritos 💘"
        })
    },
    removeLovedItem:(id:number)=>{
        set({lovedItems:[...get().lovedItems.filter((item)=>item.id!==id)]})
        toast({
            title:"Producto removido de tu lista de favoritos 💔"
        })
    }
  }), {
    name: "loved-products-storage",
    storage: createJSONStorage(() => localStorage),
  }
  ));
