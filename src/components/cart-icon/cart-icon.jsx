import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import {
  CartIconContainer,
  ItemCount,
  ShoppingIcon,
} from "./cart-icon-style.js";

const CartIcon = ({ onClick }) => {
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);

  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
