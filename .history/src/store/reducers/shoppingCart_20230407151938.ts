import {
  ProductType,
  ShopingCartActionType,
  ShoppingCartIntialStateType,
  ShoppingType,
} from "../../@types/shoppingCart";

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

type ShoppingCartIntialStateType = {
  products: ProductType[];
  productsPrice: number;
  shippingFee: number;
  tax: number;
};

type ShopingCartActionType = {
  type: action;
  productId?: number;
  payload?: ProductType[];
};

// Define the shopping cart reducer
export const shoppingCartReducer = (
  state: ShoppingCartIntialStateType,
  action: ShopingCartActionType
): ShoppingCartIntialStateType => {
  switch (action.type) {
    // If the action type is FetchCART, update the state with the new product data
    case ShoppingType.FetchCART:
      return fetchPRODUCT(state, action);

    // If the action type is RemoveITEM, remove the product from the state
    case ShoppingType.RemoveITEM:
      return removePRODUCT(state, action);

    // If the action type is IncreaseQTY, increase the quantity of the product in the state
    case ShoppingType.IncreaseQTY:
      return incrementPRODUCT(state, action);

    // If the action type is ReduceQTY, reduce the quantity of the product in the state
    case ShoppingType.ReduceQTY:
      return decrementPRODUCT(state, action);

    // If the action type is not recognized, return the current state
    default:
      return state;
  }
};




