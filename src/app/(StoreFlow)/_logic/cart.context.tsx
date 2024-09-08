"use client"

import { createContext, PropsWithChildren, useContext, useReducer } from "react"
import { CartReducer, CartState, initState } from "./cart.reducer"
import { Product } from "@/shared/entities/product.entity"
import { toastError, toastSuccess } from "@/shared/services/toast"

interface CartContextType {
  state: CartState
  addProduct: (payload: Product) => void
  removeProduct: (payload: number) => void
  reset: () => void
  checkout: () => void
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [state, dispatch] = useReducer(CartReducer, initState)

  return (
    <CartContext.Provider
      value={{
        state,
        addProduct: (payload) => {
          dispatch({ type: "ADD_PRODUCT", payload })
          toastSuccess("Added product to cart")
        },
        removeProduct: (payload) => {
          dispatch({ type: "REMOVE_PRODUCT", payload })
          toastSuccess("Removed product to cart")
        },
        reset: () => {
          dispatch({ type: "RESET" })
        },
        checkout: () => {
          toastError("Do nothing ;(")
        }
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (context === undefined) {
    throw new Error("UseCart must be used within a CartProvider")
  }
  return context
}
