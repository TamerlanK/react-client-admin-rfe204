import { useState, useEffect } from "react";

interface CategoryFetchResult {
  categories: string[];
  error: string | null;
  isLoading: boolean;
}

const useFetchCategories = (url: string): CategoryFetchResult => {
  const [categories, setCategories] = useState<string[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCategories = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`Failed to fetch categories`);
        }
        const products = await response.json();
        const allCategories = Array.from(
          new Set(
            products.map((product: { category: string }) => product.category)
          )
        ) as string[];
        setCategories(allCategories);
      } catch (err) {
        setError("Failed to fetch categories. Please, try again later");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCategories();
  }, [url]);

  return { categories, error, isLoading };
};

export default useFetchCategories;
