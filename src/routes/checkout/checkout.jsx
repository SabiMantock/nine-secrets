import { useContext } from "react";
import CheckoutItem from "../../components/checkout-item/checkout-item";

import { CartContext } from "../../context/cart.context";
import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from "./checkout-style";

const ITEM_TITLE = ["Product", "Description", "Quantity", "Price", "Remove"];

const Checkout = () => {
  const { cartItems, cartTotal } = useContext(CartContext);

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        {ITEM_TITLE.map((title, index) => (
          <HeaderBlock key={index}>
            <span>{title}</span>
          </HeaderBlock>
        ))}
      </CheckoutHeader>

      {cartItems.map((cartItem) => {
        return <CheckoutItem key={cartItem.id} cartItem={cartItem} />;
      })}
      <Total>Total : ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
