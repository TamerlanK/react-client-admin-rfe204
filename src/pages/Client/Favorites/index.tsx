import ProductCard from "../../../components/Client/ProductCard"
import { useFavorites } from "../../../contexts/FavoritesContext"

const FavoritesPage = () => {
  const { favorites } = useFavorites()

  if (favorites.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex justify-center items-center">
        <p className="text-2xl text-neutral-600">No favorite products yet</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20">
      <h1 className="text-center text-4xl mt-12 font-semibold">
        Favorite Products
      </h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12 px-6 md:px-0">
        {favorites.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default FavoritesPage
