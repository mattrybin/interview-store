export const Rating = ({ rating }: { rating: number }) => (
  <p className="text-sm">
    {[...new Array(Math.floor(rating))].map((_, index) => (
      <i
        key={index}
        className="text-yellow-500 ph ph-star ph-fill"
      ></i>
    ))}
    {[...new Array(5 - Math.floor(rating))].map((_, index) => (
      <i
        key={index}
        className="text-yellow-500 ph ph-star"
      ></i>
    ))}
  </p>
)
