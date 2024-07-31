import { ProductType } from "../../types"

const BASE_URL = "http://localhost:3000/products"

export const fetchProducts = async (): Promise<ProductType[]> => {
  try {
    const response = await fetch(BASE_URL)
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const data: ProductType[] = await response.json()
    return data
  } catch (error) {
    console.error("Error fetching products:", error)
    throw error
  }
}

export const fetchSingleProduct = async (id: ProductType["id"]): Promise<ProductType> => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`)
    if (!response.ok) {
      throw new Error("Network response was not ok")
    }
    const data: ProductType = await response.json()
    return data
  } catch (error) {
    console.error(`Error fetching the product:`, error)
    throw error
  }
}
