/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import { deleteProduct, fetchProducts } from "../../../api/products";
import TableRow from "../../../components/Admin/TableRow";
import { ProductType } from "../../../types";
import Loader from "../../../components/Loader";
import DeleteModal from "../../../components/Admin/DeleteModal";

const ProductsPageAdmin = () => {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [productIdToDelete, setProductIdToDelete] = useState<
    ProductType["id"] | null
  >(null);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
      } catch (error: any) {
        console.error("Error while fetching products:", error);
      } finally {
        setIsLoading(false);
      }
    };

    getProducts();
  }, []);

  const handleDeleteClick = (id: ProductType["id"]) => {
    setIsModalOpen(true);
    setProductIdToDelete(id);
    document.body.classList.add("overflow-hidden");
  };

  const handleConfirmDelete = () => {
    if (productIdToDelete) {
      try {
        deleteProduct(productIdToDelete);
        setProducts((prevProduct) =>
          prevProduct.filter((p) => p.id !== productIdToDelete)
        );
      } catch (error) {
        console.error(error);
      } finally {
        setIsModalOpen(false);
        document.body.classList.remove("overflow-hidden");
      }
    }
  };

  const handleCloseModal = () => {
    document.body.classList.remove("overflow-hidden");
    setIsModalOpen(false);
    setProductIdToDelete(null);
  };

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen pt-20 flex flex-col">
      <div className="container mx-auto overflow-x-auto my-6">
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
              <TableRow
                key={product.id}
                product={product}
                handleDelete={handleDeleteClick}
              />
            ))}
          </tbody>
        </table>
      </div>

      <DeleteModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onDelete={handleConfirmDelete}
      />
    </div>
  );
};

export default ProductsPageAdmin;
