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
  shoppingCartInitialState: ShoppingCartInitialStateType,
  action: ShoppingCartActionType
): ShoppingCartInitialStateType => {
  let products: ProductType[] = [];

  // Check if there is payload data
  if (action.payload) {
    // Map over the payload data to create an array of products with updated package prices
    products = action.payload?.map((product) => ({
      ...product,
      packagePrice: product.price * product.quantity,
    }));
  }

  return {
    ...shoppingCartInitialState,
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

export const shoppingCartReducer = (
  state: ShoppingCartIntialStateType,
  action: ShopingCartActionType
): ShoppingCartIntialStateType => {
  switch (action.type) {
    case ShoppingType.FetchCART:
      return fetchPRODUCT(state, action);
    case ShoppingType.RemoveITEM:
      return removePRODUCT(state, action);

    case ShoppingType.IncreaseQTY:
      return incrementPRODUCT(state, action);

    case ShoppingType.ReduceQTY:
      return decrementPRODUCT(state, action);

    default:
      return state;
  }
};
