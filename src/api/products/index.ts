import { ProductType } from "../../types";
import { AddProductFormSchemaType } from "../../validation";

export const BASE_URL = "http://localhost:3000/products";

export const fetchProducts = async (): Promise<ProductType[]> => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: ProductType[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const fetchSingleProduct = async (
  id: number | string
): Promise<ProductType> => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data: ProductType = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching the product:`, error);
    throw error;
  }
};

export const deleteProduct = async (id: ProductType["id"]) => {
  try {
    const response = await fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
  } catch (error) {
    console.error(`Error fetching the product:`, error);
    throw error;
  }
};

export const addProduct = async (data: AddProductFormSchemaType) => {
  try {
    const response = await fetch(BASE_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    return await response.json();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
