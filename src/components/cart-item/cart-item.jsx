import {
  CartItemContainer,
  Image,
  ItemDetails,
  Name,
  Price,
} from "./cart-item-style";

const CartItem = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  return (
    <CartItemContainer>
      <Image src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <Name>{name}</Name>
        <Price>
          {quantity} x ${price}
        </Price>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
