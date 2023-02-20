import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

const addItemsToCart = (cartItems, addProduct) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === addProduct.id
  );
  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === addProduct.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...addProduct, quantity: 1 }];
};
const removeCartItem = (cartItems, removeProduct) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === removeProduct.id
  );
  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== removeProduct.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === removeProduct.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, clearProduct) => {
  return cartItems.filter((cartItem) => cartItem.id !== clearProduct.id);
};
export const addItemToCart = (cartItems, productToAdd) => {
  const newCartItems = addItemsToCart(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const removeItems = (cartItems, productToAdd) => {
  const newCartItems = removeCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};
export const clearCartItems = (cartItems, productToAdd) => {
  const newCartItems = clearCartItem(cartItems, productToAdd);
  return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
};

export const setIsCartOpen = (boolean) =>
  createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, boolean);
