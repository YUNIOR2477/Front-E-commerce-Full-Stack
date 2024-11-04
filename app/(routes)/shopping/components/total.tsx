
import React from 'react'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Total = (props: { totalPrice: any }) => {
    const {totalPrice}=props
   
  return (
    <div>{totalPrice}</div>
  )
}

export default Total