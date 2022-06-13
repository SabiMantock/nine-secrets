import { useContext } from "react";
import ProductCard from "../../components/product-card/product-card";

import { ProductsContext } from "../../context/products.context";

import "./shop.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="products-container">
      {products.map(({ id, name, imageUrl, price }) => (
        <ProductCard key={id} name={name} price={price} imageUrl={imageUrl} />
      ))}
    </div>
  );
};
export default Shop;
