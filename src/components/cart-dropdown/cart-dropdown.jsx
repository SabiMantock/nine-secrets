import { useContext } from "react";
import { CartContext } from "../../context/cart.context";
import Button from "../button/button";
import CartItem from "../cart-item/cart-item";
import "./cart-dropdown.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((product) => {
          return <CartItem key={product.id} cartItem={product} />;
        })}
      </div>

      <Button>Go to checkout</Button>
    </div>
  );
};

export default CartDropdown;
