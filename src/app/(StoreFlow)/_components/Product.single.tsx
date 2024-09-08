"use client"
import { Product } from "@/shared/entities/product.entity"
import Image from "next/image"
import Link from "next/link"
import { Rating } from "./Rating"
import { useCart } from "../_logic/cart.context"

export const ProductSingle = (product: Product) => {
  const { image, title, description, category, rating, price } = product
  const { addProduct } = useCart()
  return (
    <article>
      <section className="relative aspect-square">
        <Image
          src={image}
          alt={title}
          fill
          sizes="100px"
          className="object-contain bg-white p-10"
        />
      </section>
      <section className="grid p-4 gap-2">
        <div className="flex place-items-center gap-2">
          <Link
            href={`/categories/${category}`}
            className="capitalize text-sm font-bold opacity-70 flex place-items-center gap-1"
          >
            <i className="ph-fill ph-arrow-fat-left"></i>
            {category}
          </Link>
        </div>
        <h1 className="text-balance text-lg font-bold">{title}</h1>
        <div className="flex gap-2">
          <Rating rating={rating.rate} />
          <div className="flex gap-1 font-semibold">
            <p>{rating.rate}</p>
            <p>({rating.count} Reviews)</p>
          </div>
        </div>
        <p className="text-pretty">{description}</p>
        <div className="flex place-items-center gap-2">
          <p className="text-lg font-semibold">{price.toFixed(2)}zł</p>
          <div
            onClick={() => addProduct(product)}
            className="bg-yellow-500 text-slate-950 w-fit p-2 font-bold rounded text-xs"
          >
            Add to Cart
          </div>
        </div>
      </section>
    </article>
  )
}
