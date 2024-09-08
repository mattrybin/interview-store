"use client"
import { Button } from "@/shared/components/Button.core"
import { useCart } from "../_logic/cart.context"
import { totalAmount, totalCount } from "../_utils/totalAmount"

export const Summary = () => {
  const { state, reset, checkout } = useCart()
  if (!Object.entries(state).length) {
    return null
  }

  return (
    <footer className="fixed sm:absolute sm:rounded-b-xl bottom-0 h-16 bg-slate-900 w-full border-t border-slate-700 flex content-center px-4 justify-between items-center">
      <section>
        <div className="text-sm -mb-1 text-yellow-500 font-semibold">Total amount</div>
        <div className="text-lg font-semibold flex items-center gap-1">
          {totalAmount(state).toFixed(2)}zł
          <span className="text-sm">({totalCount(state)} items)</span>
        </div>
      </section>
      <section className="flex gap-2">
        <Button onClick={() => reset()}>Reset</Button>
        <Button onClick={() => checkout()}>Checkout</Button>
      </section>
    </footer>
  )
}
