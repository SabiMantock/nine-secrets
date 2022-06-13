import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  const navigate = useNavigate();

  const checkoutHandler = () => {
    navigate("/checkout");
    // setIsCartOpen(false);
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((cartItem) => {
          return <CartItem key={cartItem.id} cartItem={cartItem} />;
        })}
      </div>

      <Button onClick={checkoutHandler}>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
