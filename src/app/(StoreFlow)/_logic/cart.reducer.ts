import { Product } from "@/shared/entities/product.entity"

export interface ProductWithQuantity extends Product {
  quantity: number
}

export type CartState = {
  [key: number]: ProductWithQuantity
}

export type CartAction =
  | { type: "ADD_PRODUCT"; payload: Product }
  | { type: "REMOVE_PRODUCT"; payload: number }
  | { type: "RESET" }

export const initState: CartState = {}

export const CartReducer = (state: CartState, action: CartAction): CartState => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const id = action.payload.id
      const existingProduct = state[id]
      if (existingProduct) {
        return {
          ...state,
          [id]: {
            ...existingProduct,
            quantity: existingProduct.quantity + 1
          }
        }
      } else {
        return {
          ...state,
          [id]: { ...action.payload, quantity: 1 }
        }
      }
    case "REMOVE_PRODUCT": {
      const id = action.payload
      const existingProduct = state[id]

      if (!existingProduct) {
        return state
      }

      if (existingProduct.quantity > 1) {
        return {
          ...state,
          [id]: {
            ...existingProduct,
            quantity: existingProduct.quantity - 1
          }
        }
      } else {
        const newState = { ...state }
        delete newState[id]
        return newState
      }
    }
    case "RESET":
      return {}
    default:
      return state
  }
}
