import { useContext } from "react";
import CategoryPreview from "../../components/category-preview/category-preview";

import { CategoriresContext } from "../../context/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriresContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
};
export default CategoriesPreview;
