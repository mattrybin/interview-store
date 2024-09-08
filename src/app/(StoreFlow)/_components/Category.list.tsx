import { Category } from "@/shared/entities/category.entity"
import { CategoryItem } from "./Category.item"

export const CategoryList = ({ data }: { data: Category[] }) => (
  <>
    {data.map((value) => (
      <CategoryItem
        key={value}
        value={value}
      />
    ))}
  </>
)
