import React, { useEffect } from 'react';
import { NextPage } from 'next';
import { useGlobalDispatch, useGlobalState } from '../context/ShoppingCartContext';
import { ShoppingType } from '../types/shoppingTypes';
import Header from '../components/Header';
import ShoppingCartCard from '../components/ShoppingCartCard';
import OrderSummaryCard from '../components/OrderSummaryCard';

// Define Home component as a Next.js page
const Home: NextPage = () => {

  // Get the shopping cart state and dispatch function from the global state context
  const { shoppingCart } = useGlobalState();
  const dispatch = useGlobalDispatch();

  // Fetch the shopping cart items from the server and update the global state on component mount
  useEffect(() => {
    dispatch({ type: ShoppingType.FetchCART, payload: productsCart }); // ProductsCart is not defined, needs to be added or removed.
  }, []);

  // Dispatch an action to remove a product from the shopping cart
  const handleRemoveProduct = (productId: number) => {
    dispatch({ type: ShoppingType.RemoveITEM, productId });
  };

  // Dispatch an action to increase the quantity of a product in the shopping cart
  const handleIncreaseProductQTY = (productId: number) => {
    dispatch({ type: ShoppingType.IncreaseQTY, productId });
  };

  // Dispatch an action to decrease the quantity of a product in the shopping cart
  const handleDecreaseProductQTY = (productId: number) => {
    dispatch({ type: ShoppingType.ReduceQTY, productId });
  };

  // Render the Home component with a header, a shopping cart list and an order summary card
  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10 flex flex-col  flex-wrap justify-center rounded-md border border-solid border-gray-200  px-4 py-10 lg:flex-row">
        <div className="w-full md:pr-10 lg:w-3/4">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">

              {/* Render each product in the shopping cart as a shopping cart card */}
              {shoppingCart.products.map((product: any) => (
                <ShoppingCartCard
                  {...product}
                  key={product.id}
                  onClickRemove={() => handleRemoveProduct(product.id)}
                  onClickIncrease={() => handleIncreaseProductQTY(product.id)}
                  onClickDescrease={() => handleDecreaseProductQTY(product.id)}
                />
              ))}
            </ul>
          </div>
        </div>

        {/* Render the order summary card with the total cost and taxes */}
        <div className="mt-10 w-full max-w-full lg:mt-0 lg:w-1/4">
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

// Export the Home component as the default export
export default Home;
I hope this helps!





