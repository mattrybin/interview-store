import { api } from "@/shared/services/api"
import { CategoryList } from "./_components/Category.list"
import { Category } from "@/shared/entities/category.entity"
import { Header } from "./_components/Header"

export default async function Page() {
  const categories = await api("products/categories").json<Category[]>()
  return (
    <>
      <Header name="Categories" />
      <CategoryList data={categories} />
    </>
  )
}
