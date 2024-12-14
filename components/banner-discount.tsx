"use client"
import { Info } from "lucide-react"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"

const BannerDiscount = () => {
  const router = useRouter()
  return (
    <div className="sm:P-10 text-center pb-2 mt-10">
        <h2 className="uppercase font-black text-3xl text-primary">consigue hasta un -25% en tu primera compra</h2>
        <h3 className="mt-3 font-semibold ">-20% por compras superiores a $150.000 COP o -25% por compras superiores a $200.000 COP. </h3>
        <h2 className="uppercase font-black text-xl text-primary mt-3">USA EL CODIGO: YUNIOR2477</h2>
        <div className="max-w-md mx-auto sm:flex justify-center gap-8 mt-5"> 
            <Button onClick={()=> router.push("/discounts")} className="font-serif font-semibold">Mas informacion <Info/></Button>

        </div>
    </div>
  )
}

export default BannerDiscount