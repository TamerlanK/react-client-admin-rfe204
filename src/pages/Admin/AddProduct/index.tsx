import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  AddProductFormSchema,
  AddProductFormSchemaType,
} from "../../../validation";

const AddProductPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AddProductFormSchemaType>({
    resolver: zodResolver(AddProductFormSchema),
  });

  const onSubmit: SubmitHandler<AddProductFormSchemaType> = (data) => {
    console.log("Form data:", data);
  };

  return (
    <div className="min-h-screen pt-20 flex flex-col bg-gray-100">
      <div className="grow flex justify-center items-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-3 w-full max-w-lg">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Add Product
          </h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <input
                id="title"
                type="text"
                {...register("title")}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-1.5"
              />
              {errors.title && (
                <p className="text-red-600 text-sm mt-1 px-2 py-1 bg-red-200 rounded-lg">
                  {errors.title.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium text-gray-700"
              >
                Price
              </label>
              <input
                id="price"
                type="text"
                {...register("price")}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-1.5"
              />
              {errors.price && (
                <p className="text-red-600 text-sm mt-1 px-2 py-1 bg-red-200 rounded-lg">
                  {errors.price.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <input
                id="description"
                type="text"
                {...register("description")}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-1.5"
              />
              {errors.description && (
                <p className="text-red-600 text-sm mt-1 px-2 py-1 bg-red-200 rounded-lg">
                  {errors.description.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="category"
                className="block text-sm font-medium text-gray-700"
              >
                Category
              </label>
              <input
                id="category"
                type="text"
                {...register("category")}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-1.5"
              />
              {errors.category && (
                <p className="text-red-600 text-sm mt-1 px-2 py-1 bg-red-200 rounded-lg">
                  {errors.category.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Image URL
              </label>
              <input
                id="image"
                type="text"
                {...register("image")}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-1.5"
              />
              {errors.image && (
                <p className="text-red-600 text-sm mt-1 px-2 py-1 bg-red-200 rounded-lg">
                  {errors.image.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className="w-full bg-slate-800 text-white py-2 rounded-md font-semibold hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2"
            >
              Add Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddProductPage;
