import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item";

import { CartContext } from "../../context/cart.context";
import "./checkout.scss";

const ITEM_TITLE = ["Product", "Description", "Quantity", "Price", "Remove"];

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        {ITEM_TITLE.map((title, index) => (
          <div key={index} className="header-block">
            <span>{title}</span>
          </div>
        ))}
      </div>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <span className="total">Total : ${cartTotal}</span>
    </div>
  );
};

export default Checkout;
