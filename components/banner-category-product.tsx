import React from 'react'

const BannerCategory = () => {
  return (
    <>
    <div className="text-center w-full">
      <p className="text-lg">Sumergete en una experiencia unica</p>
      <h4 className="mt-2 text-5xl font-extrabold uppercase">
        Productos exclusivos
      </h4>
      <p className="my-2 text-lg">Moda, Calidad y Economia...</p>
    </div>
    <div className="h-[250px] bg-cover md:h-[500px] bg-[url('/slider-image.png')] bg-center w-full mt-14"></div>
    </>
  )
}

export default BannerCategory