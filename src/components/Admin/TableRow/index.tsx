import { FaPen, FaTrashAlt } from "react-icons/fa";
import { ProductType } from "../../../types";

interface TableRowProps {
  product: ProductType;
  handleDelete: (id: ProductType["id"]) => void;
}

const TableRow = ({ product, handleDelete }: TableRowProps) => {
  return (
    <tr key={product.id} className="hover:bg-slate-100">
      <td className="py-2 px-4 border-b border-gray-200">{product.id}</td>
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
      <td className="py-2 px-4 border-b border-gray-200 text-center">
        <span className="text-yellow-500 font-extrabold text-lg">
          {product.rating.rate}
        </span>
        <span className="text-gray-600"> ({product.rating.count})</span>
      </td>
      <td className="space-x-2 text-center border-gray-200 border-b">
        <button className="bg-slate-600 rounded-xl p-2">
          <FaPen className="size-4 text-white" />
        </button>
        <button
          className="bg-slate-600 rounded-xl p-2"
          onClick={() => handleDelete(product.id)}
        >
          <FaTrashAlt className="size-4 text-red-500" />
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
