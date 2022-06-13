import { useContext } from "react";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping.svg";
import { CartContext } from "../../context/cart.context";

import "./cart-icon.scss";

const CartIcon = ({ onClick }) => {
  const { setIsCartOpen, isCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
