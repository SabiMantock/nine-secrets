import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping.svg";
import { CartContext } from "../../context/cart.context";

import "./cart-icon.scss";

const CartIcon = ({ onClick }) => {
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
