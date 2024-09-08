import { PropsWithChildren } from "react"
import { Summary } from "./_components/Summary"
import { CartProvider } from "./_logic/cart.context"

export default function Layout({ children }: PropsWithChildren) {
  return (
    <CartProvider>
      {children}
      <Summary />
    </CartProvider>
  )
}
