import { Product } from "@/shared/entities/product.entity"
import { api } from "@/shared/services/api"
import { Header } from "../../_components/Header"
import { ProductList } from "../../_components/Product.list"

interface PageProps {
  params: {
    category: string
  }
}

export default async function Page({ params: { category } }: PageProps) {
  const products = await api(`products/category/${category}`).json<Product[]>()
  return (
    <>
      <Header name={`${category} (${products.length})`} />
      <ProductList data={products} />
    </>
  )
}
