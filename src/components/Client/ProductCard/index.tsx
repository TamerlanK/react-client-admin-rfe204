import { FaHeart, FaRegHeart, FaStar } from "react-icons/fa6"
import { Link } from "react-router-dom"
import { useFavorites } from "../../../contexts/FavoritesContext"
import { ProductType } from "../../../types"

interface ProductCardProps {
  product: ProductType
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { favorites, toggleFavorite } = useFavorites()

  const isFavorite = favorites.some((favorite) => favorite.id === product.id)

  return (
    <div className="relative max-w-sm mx-auto rounded overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
      <Link to={`/products/${product.id}`}>
        <img
          className="w-full h-48 object-contain mix-blend-multiply p-6 hover:scale-110 transition-transform duration-300 select-none"
          src={product.image}
          alt={product.title}
        />
      </Link>
      <div className="px-6 py-4">
        <Link
          to={`/products/${product.id}`}
          className="font-bold text-lg mb-2 line-clamp-3 hover:underline"
        >
          {product.title}
        </Link>
        <p className="text-gray-700 text-sm mb-4 line-clamp-3">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-gray-900 font-semibold">${product.price}</span>
          <div className="flex items-center">
            <FaStar className="text-yellow-500 size-5" />
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
      <div
        className="absolute right-3 top-3 bg-white p-2 rounded-full cursor-pointer"
        onClick={() => toggleFavorite(product)}
      >
        {isFavorite ? (
          <FaHeart className="size-4 text-red-600" />
        ) : (
          <FaRegHeart className="size-4 text-red-600" />
        )}
      </div>
    </div>
  )
}

export default ProductCard
