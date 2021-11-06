import { createContext, useState, FC } from "react";

type FavoritesItems = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  categoryId: string;
};

type FavoritesContextType = {
  isFavoritesVisible: boolean;
  showFavorites(): void;
  hideFavorites(): void;
  favoritesItems: FavoritesItems[];
  addItemToFavorites(previousValue: FavoritesItems): void;
  removeItemFromFavorites(itemId: number): void;
  removeAllItemsFromFavorites(): void;
};

export const FavoritesContext = createContext({} as FavoritesContextType);

export const FavoritesStorage:FC = ({ children }) => {
  const [isFavoritesVisible, setIsFavoritesVisible] = useState<boolean>(false);
  const [favoritesItems, setFavoritesItems] = useState<FavoritesItems[]>([]);

  const addItemToFavorites = (item: FavoritesItems) => {
    if(favoritesItems.some( ({id}) => id === item.id)) return;
    setFavoritesItems(previousFavoritesItems => [...previousFavoritesItems, item])
  }

  const removeItemFromFavorites = (itemId: number) => {
    setFavoritesItems(previousFavoritesItems => previousFavoritesItems.filter(({id}) => id !== itemId))
  }
  
  const removeAllItemsFromFavorites = () => {
    setFavoritesItems([])
  }

  const showFavorites = () => {
    setIsFavoritesVisible(true)
  }

  const hideFavorites = () => {
    setIsFavoritesVisible(false)
  }

  return (
    <FavoritesContext.Provider value={{isFavoritesVisible, showFavorites, hideFavorites, favoritesItems, addItemToFavorites, removeItemFromFavorites, removeAllItemsFromFavorites}}>
      {children}
    </FavoritesContext.Provider>
  )
}