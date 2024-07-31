import {
  createContext,
  useContext,
  useState,
  type PropsWithChildren,
} from "react";
import { ProductType } from "../types";

type FavoritesContextType = {
  favorites: ProductType[];
  toggleFavorite: (product: ProductType) => void;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export const FavoritesProvider = ({ children }: PropsWithChildren) => {
  const [favorites, setFavorites] = useState<ProductType[]>([]);

  const toggleFavorite = (product: ProductType) => {
    setFavorites((prevFavorites) => {
      const isFavorite = prevFavorites.some((p) => p.id === product.id);
      if (isFavorite) {
        return prevFavorites.filter((p) => p.id !== product.id);
      } else {
        return [...prevFavorites, product];
      }
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (!context) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
};
