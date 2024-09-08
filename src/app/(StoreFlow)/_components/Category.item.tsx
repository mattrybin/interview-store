import { Category } from "@/shared/entities/category.entity"
import Link from "next/link"

export const CategoryItem = ({ value }: { value: Category }) => (
  <Link
    key={value}
    className="flex justify-between p-4"
    href={`categories/${value}`}
  >
    <span className="capitalize">{value}</span>
    <i className="text-xl text-yellow-500 ph-fill ph-arrow-circle-right"></i>
  </Link>
)
