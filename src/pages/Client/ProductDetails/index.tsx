import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductType } from "../../../types";
import { fetchSingleProduct } from "../../../api/products";
import { useFavorites } from "../../../contexts/FavoritesContext";

import { IoIosArrowRoundBack } from "react-icons/io";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const [product, setProduct] = useState<ProductType>();

  const { favorites, toggleFavorite } = useFavorites();

  useEffect(() => {
    const getProduct = async () => {
      const product = await fetchSingleProduct(id!);
      setProduct(product);
    };
    getProduct();
  }, [id, favorites]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-gray-100 flex flex-col justify-center items-center">
      <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <Link
          to={"/products"}
          className="mb-10 self-start flex items-center gap-x-1 text-neutral-600 hover:underline"
        >
          <IoIosArrowRoundBack className="size-6" />
          Back to all products
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex justify-center items-center col-span-2 relative">
            <img
              src={product.image}
              alt={product.title}
              className="w-full max-h-[400px] object-contain"
            />
            <div
              className="p-2 bg-white rounded-full absolute right-3 top-3 cursor-pointer"
              onClick={() => toggleFavorite(product)}
            >
              {favorites.some((fav) => String(fav.id) === id) ? (
                <FaHeart className="size-4 text-red-600" />
              ) : (
                <FaRegHeart className="size-4 text-red-600" />
              )}
            </div>
          </div>
          <div className="flex flex-col justify-between col-span-2">
            <div>
              <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
              <p className="text-xl font-semibold text-gray-800 mb-4">
                ${product.price}
              </p>
              <p className="text-gray-700 mb-4">{product.description}</p>
              <div className="flex items-center mb-4">
                <span className="text-yellow-500 font-semibold mr-2">
                  {product?.rating?.rate ?? 0}
                </span>
                <span className="text-gray-600">
                  ({product?.rating?.count ?? 0} reviews)
                </span>
              </div>
              <p className="text-gray-500">{product.category}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
