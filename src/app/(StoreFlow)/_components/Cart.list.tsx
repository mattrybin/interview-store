"use client"
import { useCart } from "../_logic/cart.context"
import { CartItem } from "./Cart.item"

export const CartList = () => {
  const { state } = useCart()

  if (!Object.keys(state).length) {
    return <p className="text-center mt-10 text-lg font-semibold">Cart is empty</p>
  }

  return (
    <>
      {Object.entries(state).map(([id, product]) => (
        <CartItem
          key={id}
          {...product}
        />
      ))}
    </>
  )
}
