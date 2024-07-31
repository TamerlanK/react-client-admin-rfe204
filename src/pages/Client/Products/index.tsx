import { useEffect, useState } from "react"
import { fetchProducts } from "../../../api/products"
import ProductCard from "../../../components/Client/ProductCard"
import { ProductType } from "../../../types"

const ProductsPage = () => {
  const [products, setProducts] = useState<ProductType[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts()
        setProducts(fetchedProducts)
      } catch (error: any) {
        setError(error.message)
      } finally {
        setLoading(false)
      }
    }

    loadProducts()
  }, [])

  if (loading) return <div>Loading...</div>
  if (error) return <div>Error!</div>

  return (
    <div className="min-h-screen pt-20">
      <h1 className="text-center text-4xl mt-12 font-semibold">All Products</h1>
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 py-12 px-6 md:px-0">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default ProductsPage
