import { Product } from "@/shared/entities/product.entity"
import { ProductItem } from "./Product.item"

export const ProductList = ({ data }: { data: Product[] }) => (
  <>
    {data.map((product) => (
      <ProductItem
        key={product.id}
        {...product}
      />
    ))}
  </>
)
