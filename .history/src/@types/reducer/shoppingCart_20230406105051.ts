export interface ProductType {
  id: number;
  price: number;
  quantity: number;
  name: string;
  color: string;
  image: string;
  href: string;
  packagePrice: number;
}

export interface ShoppingCartIntialStateType {
  products: ProductType[];
  productsPrice: number;
  tax: number;
  shippingFee: number;
}

export interface ShopingCartActionType {
  type: string;
  productId?: number;
  payload?: ProductType[];
}

export const ShoppingType = {
  FetchCART: "FETCH-CART",
  IncreaseQTY: "INCREASE-QTY",
  ReduceQTY: "REDUCE-QTY",
  RemoveITEM: "REMOVE-ITEM",
  
  
  
};
