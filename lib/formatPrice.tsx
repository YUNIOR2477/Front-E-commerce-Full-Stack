export function formatPrice(price: number){
    const priceFormate = new Intl.NumberFormat('es-ES',{
        style:"currency",
        currency:"COP"
    })
    const finalPrice =  priceFormate.format(price)

    return finalPrice;
}