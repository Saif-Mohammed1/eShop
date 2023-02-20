import { Arrow, Image, Remove } from "./checkoutiems.styles";
import { useDispatch, useSelector } from "react-redux";
import {
  clearCartItems,
  addItemToCart,
  removeItems,
} from "../../store/cart/cart.action";
import { selectCartItems } from "../../store/cart/cart.selectors";
const CheckOutItems = ({ cartItem }) => {
  const { imageUrl, name, quantity, price } = cartItem;
  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);
  const clearCartItem = () => dispatch(clearCartItems(cartItems, cartItem));
  const removeItemsHandler = () => dispatch(removeItems(cartItems, cartItem));
  const addItemToCartHandler = () =>
    dispatch(addItemToCart(cartItems, cartItem));
  return (
    <tbody>
      <tr>
        <td>
          <Image src={imageUrl} alt={name} />
        </td>
        <td>{name}</td>
        <td>
          <Arrow onClick={removeItemsHandler}> &lt; </Arrow>

          <span>{quantity}</span>
          <Arrow onClick={addItemToCartHandler}> &gt; </Arrow>
        </td>
        <td>{price}$</td>
        <Remove onClick={clearCartItem}>X</Remove>
      </tr>
    </tbody>
  );
};
export default CheckOutItems;
