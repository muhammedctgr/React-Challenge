import type { NextPage } from 'next';
import { useEffect } from 'react';
import ShoppingCartCard from '../components/shoppingCartCard';
import OrderSummaryCard from '../components/orderSummaryCard';
import { useGlobalDispatch, useGlobalState } from '../store';
import productsCart from '../data/prodCart';
import { ShoppingType } from '../@types/shoppingCart';
import Header from '../components/header';

const Home: NextPage = () => {
  // Get the shopping cart state from the global context
  const { shoppingCart } = useGlobalState();
  // Get the dispatch function from the global context
  const dispatch = useGlobalDispatch();

  // Fetch the shopping cart data from the server on component mount
  useEffect(() => {
    dispatch({ type: ShoppingType.FetchCART, payload: productsCart });
  }, []);

  // Define a function to handle removing a product from the cart
  const handleRemoveProduct = (productId: number) => {
    dispatch({ type: ShoppingType.RemoveITEM, productId });
  };

  // Define a function to handle increasing the quantity of a product in the cart
  const handleIncreaseProductQTY = (productId: number) => {
    dispatch({ type: ShoppingType.IncreaseQTY, productId });
  };

  // Define a function to handle decreasing the quantity of a product in the cart
  const handleDecreaseProductQTY = (productId: number) => {
    dispatch({ type: ShoppingType.ReduceQTY, productId });
  };

  // Render the shopping cart items and the order summary
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10 flex flex-col  flex-wrap justify-center rounded-md border border-solid border-gray-200  px-4 py-10 lg:flex-row">
        <div className="w-full md:pr-10 lg:w-3/4">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
              {/* Map through the products in the cart and render a ShoppingCartCard for each one */}
              {shoppingCart.products.map((product: any) => (
                <ShoppingCartCard
                  {...product}
                  key={product.id}
                  onClickRemove={() => handleRemoveProduct(product.id)}
                  onClickIncrease={() => handleIncreaseProductQTY(product.id)}
                  onClickDecrease={() => handleDecreaseProductQTY(product.id)}
                />
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-10 w-full max-w-full lg:mt-0 lg:w-1/4">
          {/* Render the OrderSummaryCard with the appropriate props */}
          <OrderSummaryCard
            taxEstimate={shoppingCart.tax}
            shippingEstimate={shoppingCart.shippingFee}
            subTotal={shoppingCart.productsPrice}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;