"use client"
import { Product } from "@/shared/entities/product.entity"
import Image from "next/image"
import Link from "next/link"
import { Rating } from "./Rating"
import { useCart } from "../_logic/cart.context"

export const ProductItem = (product: Product) => {
  const { id, image, title, description, rating, price } = product
  const { state, addProduct } = useCart()

  return (
    <article className="p-4 grid grid-cols-[auto_1fr] gap-4">
      <Link
        href={`/products/${id}`}
        className="relative w-[164px] h-[164px]"
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
          <p className="text-sm text-slate-300 mb-1 line-clamp-2">{description}</p>
        </Link>
        <section className="grid items-center gap-1 sm:gap-2 sm:grid-flow-col sm:justify-start">
          <p className="order-1 font-bold text-yellow-200">{price.toFixed(2)}zł</p>
          <div className="flex gap-1 sm:order-2">
            <Rating rating={rating.rate} />
            <p>
              {rating.rate} ({rating.count})
            </p>
          </div>
        </section>
        <button
          onClick={() => addProduct(product)}
          className="z-10 bg-yellow-500 text-slate-950 w-fit p-2 font-bold rounded text-xs mt-2"
        >
          Add to Cart
        </button>
      </section>
    </article>
  )
}
