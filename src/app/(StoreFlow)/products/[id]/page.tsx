import { api } from "@/shared/services/api"
import { Product } from "@/shared/entities/product.entity"
import { ProductSingle } from "../../_components/Product.single"

interface PageProps {
  params: { id: string }
}

export default async function Page({ params: { id } }: PageProps) {
  const product = await api(`products/${id}`).json<Product>()

  return (
    <>
      <ProductSingle {...product} />
    </>
  )
}
