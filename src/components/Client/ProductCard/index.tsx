import { ProductType } from "../../../types"

interface ProductCardProps {
  product: ProductType
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img
        className="w-full h-48 object-contain mix-blend-multiply p-6"
        src={product.image}
        alt={product.title}
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 line-clamp-3">
          {product.title}
        </div>
        <p className="text-gray-700 text-base mb-4 line-clamp-5">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gray-900 font-semibold">${product.price}</span>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.953a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.448a1 1 0 00-.364 1.118l1.286 3.952c.3.921-.755 1.688-1.54 1.118L10 13.729l-3.37 2.448c-.784.57-1.84-.197-1.54-1.118l1.286-3.952a1 1 0 00-.364-1.118L2.642 9.38c-.784-.57-.381-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.953z" />
            </svg>
            <span className="ml-2 text-gray-700">
              {product.rating.rate} ({product.rating.count})
            </span>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">
          #{product.category}
        </span>
      </div>
    </div>
  )
}

export default ProductCard
