import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from "../utils/firebase/firebase.js";

// as the actual value you want to access
export const CategoriresContext = createContext({
  CategoriesMap: [],
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

  useEffect(() => {
    const getCategoriesMap = async () => {
      const category = await getCategoriesAndDocuments();
      setCategoriesMap(category);
    };
    getCategoriesMap();
  }, []);

  const value = { categoriesMap };

  return (
    <CategoriresContext.Provider value={value}>
      {children}
    </CategoriresContext.Provider>
  );
};
