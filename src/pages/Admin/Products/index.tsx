import { useEffect, useState } from "react";
import { ProductType } from "../../../types";
import { fetchProducts } from "../../../api/products";
import { FaTrashAlt, FaPen } from "react-icons/fa";

const ProductsPageAdmin = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error: any) {
        console.error("Error while fetching products:", error);
        setError(error?.message);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  return (
    <div className="min-h-screen pt-20 flex flex-col">
      <div className="grow py-12">
        <div className="container mx-auto overflow-x-auto">
          <table className="min-w-full bg-white rounded-xl">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b border-gray-200 text-left">
                  ID
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">
                  Title
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">
                  Price
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">
                  Description
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">
                  Category
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">
                  Image
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">
                  Rating
                </th>
                <th className="py-2 px-4 border-b border-gray-200 text-left">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-slate-100">
                  <td className="py-2 px-4 border-b border-gray-200">
                    {product.id}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 font-bold">
                    {product.title}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 font-semibold">
                    ${product.price}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200 text-neutral-600">
                    {product.description}
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <span className="p-2 bg-slate-200 rounded-xl whitespace-nowrap text-sm">
                      {product.category}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="w-16 h-16 object-contain mix-blend-multiply"
                    />
                  </td>
                  <td className="py-2 px-4 border-b border-gray-200">
                    <span className="text-yellow-500 font-semibold">
                      {product.rating.rate}
                    </span>
                    <span className="text-gray-600">
                      {" "}
                      ({product.rating.count})
                    </span>
                  </td>
                  <td className="space-x-2 text-center border-gray-200 border-b">
                    <button className="bg-slate-600 rounded-xl p-2">
                      <FaPen className="size-4 text-white" />
                    </button>
                    <button className="bg-slate-600 rounded-xl p-2">
                      <FaTrashAlt className="size-4 text-red-500" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductsPageAdmin;
