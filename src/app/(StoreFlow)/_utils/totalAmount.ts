import { CartState } from "../_logic/cart.reducer"

export const totalAmount = (products: CartState) => {
  return Object.entries(products).reduce((acc, [_, product]) => {
    const total = product.price * product.quantity
    return acc + total
  }, 0)
}

export const totalCount = (products: CartState) => {
  return Object.entries(products).reduce((acc, [_, product]) => {
    return acc + product.quantity
  }, 0)
}
