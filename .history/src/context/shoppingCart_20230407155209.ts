import {
  ProductType,
  ShopingCartActionType,
  ShoppingCartIntialStateType,
  ShoppingType,
} from "../@types/shoppingCart";

export const ShoppingCartIntialState: ShoppingCartIntialStateType = {
  products: [],
  productsPrice: 0,
  shippingFee: 0,
  tax: 0,
};

const TotalProductPrice = (products: ProductType[]): number => {
  let totalPrice = 0;
  
  // Loop through each product and add its packagePrice to the total price
  products.forEach((product) => {
    totalPrice += product.packagePrice;
  });
  
  return totalPrice;
};

const fetchPRODUCT = (
  shoppingCartIntialState: ShoppingCartIntialStateType,
  action: ShopingCartActionType
): ShoppingCartIntialStateType => {
  let products: ProductType[] = [];

  if (action.payload) {
    products = action.payload?.map((product) => ({
      ...product,
      packagePrice: product.price * product.quantity,
    }));
  }

  return {
    ...shoppingCartIntialState,
    products,
    productsPrice: TotalProductPrice(products),
  };
};

const removePRODUCT = (
  shoppingCartIntialState: ShoppingCartIntialStateType,
  action: ShopingCartActionType
) => {
  const products = shoppingCartIntialState.products.filter(
    (product) => product.id !== action.productId
  );

  return {
    ...shoppingCartIntialState,
    products,
    productsPrice: TotalProductPrice(products),
  };
};

const incrementPRODUCT = (
  shoppingCartIntialState: ShoppingCartIntialStateType,
  action: ShopingCartActionType
) => {
  const products = shoppingCartIntialState.products.map((product) =>
    product.id === action.productId
      ? {
          ...product,
          quantity: product.quantity + 1,
          packagePrice: product.price * (product.quantity + 1),
        }
      : product
  );

  return {
    ...shoppingCartIntialState,
    products,
    productsPrice: TotalProductPrice(products),
  };
};

const decrementPRODUCT = (
  shoppingCartIntialState: ShoppingCartIntialStateType,
  action: ShopingCartActionType
) => {
  const products = shoppingCartIntialState.products.map((product) =>
    product.id === action.productId
      ? {
          ...product,
          quantity: product.quantity < 1 ? 0 : product.quantity - 1,
          packagePrice:
            product.quantity < 1 ? 0 : product.price * (product.quantity - 1),
        }
      : product
  );

  return {
    ...shoppingCartIntialState,
    products,
    productsPrice: TotalProductPrice(products),
  };
};

Here's a possible refactored version of your code:

typescript
Copy code
import { Action } from 'redux';
import { ShoppingCartIntialStateType, ShoppingCartItemType } from './types';

export enum ShoppingCartActionType {
  FETCH_PRODUCT = "FETCH_PRODUCT",
  REMOVE_PRODUCT = "REMOVE_PRODUCT",
  INCREMENT_PRODUCT_QUANTITY = "INCREMENT_PRODUCT_QUANTITY",
  DECREMENT_PRODUCT_QUANTITY = "DECREMENT_PRODUCT_QUANTITY",
}

interface ShoppingCartAction extends Action<ShoppingCartActionType> {
  payload: ShoppingCartItemType;
}

const shoppingCartReducer = (
  state: ShoppingCartIntialStateType,
  action: ShoppingCartAction
): ShoppingCartIntialStateType => {
  switch (action.type) {
    case ShoppingCartActionType.FETCH_PRODUCT:
      return fetchProduct(state, action.payload);
    case ShoppingCartActionType.REMOVE_PRODUCT:
      return removeProduct(state, action.payload.id);
    case ShoppingCartActionType.INCREMENT_PRODUCT_QUANTITY:
      return incrementProductQuantity(state, action.payload.id);
    case ShoppingCartActionType.DECREMENT_PRODUCT_QUANTITY:
      return decrementPRODUCT(state, action.payload.id);
    default:
      return state;
  }
};

export default shoppingCartReducer;
