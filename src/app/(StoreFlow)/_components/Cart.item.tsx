"use client"
import { Product } from "@/shared/entities/product.entity"
import Image from "next/image"
import Link from "next/link"
import { Rating } from "./Rating"
import { useCart } from "../_logic/cart.context"
import { ProductWithQuantity } from "../_logic/cart.reducer"

export const CartItem = (product: ProductWithQuantity) => {
  const { id, image, title, description, rating, price, quantity } = product
  const { state, addProduct, removeProduct } = useCart()

  return (
    <article className="p-4 grid grid-cols-[auto_1fr] gap-4">
      <Link
        href={`/products/${id}`}
        className="relative w-[100px] h-[100px]"
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="100px"
          className="object-contain bg-white p-1 rounded-md"
        />
      </Link>
      <section className="overflow-hidden relative">
        <Link href={`/products/${id}`}>
          <h1 className="text-balance line-clamp-2">{title}</h1>
        </Link>
        <section className="flex items-center gap-2">
          <p className="font-bold text-yellow-200">{price.toFixed(2)}zł</p>
          <Rating rating={rating.rate} />
          <p>
            {rating.rate} ({rating.count})
          </p>
        </section>
        <div className="flex place-items-center gap-1 mt-2">
          <button
            onClick={() => removeProduct(id)}
            className=" bg-slate-200 text-slate-950 w-8 font-bold rounded h-8 grid place-items-center"
          >
            <i className="ph-bold ph-minus"></i>
          </button>
          <div className="bg-slate-100 rounded text-slate-950 h-8 min-w-8 grid place-items-center font-semibold">
            {quantity}
          </div>
          <button
            onClick={() => addProduct(product)}
            className=" bg-slate-200 text-slate-950 h-8 w-8 font-bold rounded grid place-items-center"
          >
            <i className="ph-bold ph-plus"></i>
          </button>
        </div>
      </section>
    </article>
  )
}
