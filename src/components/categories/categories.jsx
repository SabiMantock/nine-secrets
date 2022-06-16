import CategoryItem from "../category-item/category-item";
import { CategoriesContainer } from "./categories-style";

const Categories = ({ categories }) => {
  return (
    <CategoriesContainer>
      {categories.map((category) => (
        <CategoryItem key={category.id} category={category} />
      ))}
    </CategoriesContainer>
  );
};
export default Categories;
