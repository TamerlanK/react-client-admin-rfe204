/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import { addProduct, BASE_URL } from "../../../api/products";
import Loader from "../../../components/Loader";
import useFetchCategories from "../../../hooks/useFetchCategories";
import { capitalizeWords } from "../../../utils";
import {
  AddProductFormSchema,
  AddProductFormSchemaType,
  DEFAULT_ADD_PRODUCT_FORM_VALUES,
} from "../../../validation";
import Alert from "../../../components/Alert";

const AddProductPage = () => {
  const {
    categories,
    isLoading,
    error: fetchCategoriesError,
  } = useFetchCategories(BASE_URL);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<AddProductFormSchemaType>({
    resolver: zodResolver(AddProductFormSchema),
    defaultValues: DEFAULT_ADD_PRODUCT_FORM_VALUES,
  });

  const onSubmit: SubmitHandler<AddProductFormSchemaType> = async (data) => {
    try {
      await addProduct(data);
      console.log(data);
      setSubmitError(null);
    } catch (error: any) {
      setSubmitError(error.message);
    }
  };

  const isDisabled = !!fetchCategoriesError || isSubmitting;

  if (isLoading) return <Loader />;

  return (
    <div className="min-h-screen pt-20 flex flex-col bg-gray-100">
      <div className="grow flex justify-center items-center p-6">
        <div className="bg-white rounded-lg shadow-lg p-6 space-y-3 w-full max-w-lg">
          <h1 className="text-2xl font-bold text-center text-gray-800">
            Add Product
          </h1>
          {fetchCategoriesError && (
            <Alert type="error" message={fetchCategoriesError} />
          )}
          {submitError && <Alert type="error" message={submitError} />}
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
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-1.5 ${
                  isDisabled ? "bg-gray-100 cursor-not-allowed" : ""
                }`}
                placeholder="Enter product title"
                disabled={isDisabled}
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
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-1.5 ${
                  isDisabled ? "bg-gray-100 cursor-not-allowed" : ""
                }`}
                placeholder="Enter product price"
                disabled={isDisabled}
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
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-1.5 ${
                  isDisabled ? "bg-gray-100 cursor-not-allowed" : ""
                }`}
                placeholder="Enter product description"
                disabled={isDisabled}
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
              <select
                id="category"
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-slate-500 focus:border-slate-500 sm:text-sm p-1.5 ${
                  isDisabled ? "bg-gray-100 cursor-not-allowed" : ""
                }`}
                {...register("category")}
                disabled={isDisabled}
              >
                <option value="" defaultChecked>
                  Select a category
                </option>
                {categories.map((category) => (
                  <option key={category} value={category.toLowerCase()}>
                    {capitalizeWords(category)}
                  </option>
                ))}
              </select>
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
                type="url"
                {...register("image")}
                className={`mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm p-1.5 ${
                  isDisabled ? "bg-gray-100 cursor-not-allowed" : ""
                }`}
                placeholder="Enter product image URL"
                disabled={isDisabled}
              />
              {errors.image && (
                <p className="text-red-600 text-sm mt-1 px-2 py-1 bg-red-200 rounded-lg">
                  {errors.image.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              className={`w-full bg-slate-800 text-white py-2 rounded-md font-semibold hover:bg-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-800 focus:ring-offset-2 ${
                isDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
              disabled={isDisabled}
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
