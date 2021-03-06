import { createContext, useState, FC } from "react";

type SearchContextType = {
  textSearch: string;
  setTextSearch(search: string): void;
  categorySearch: string;
  setCategorySearch(search: string): void;
}

export const SearchContext = createContext({} as SearchContextType);

export const SearchStorage:FC = ({ children }) => {
  const [textSearch, setTextSearch] = useState("");
  const [categorySearch, setCategorySearch] = useState("");
  return (
    <SearchContext.Provider value={{textSearch, categorySearch, setTextSearch, setCategorySearch}}>
      {children}
    </SearchContext.Provider>
  )
}