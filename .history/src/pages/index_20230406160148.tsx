import type { NextPage } from 'next';
import { useEffect } from 'react';
import shoppingCartCard from '../components/shoppingCartCard';
import OrderSummaryCard from '../components/orderSummaryCard';
import { useGlobalDispatch, useGlobalState } from '../store';
import productsCart from '../database/productCart';
import { ShoppingType } from '../@types/shoppingCart';
import Header from '../components/header';

const Home: NextPage = () => {
  const { shoppingCart } = useGlobalState();
  const dispatch = useGlobalDispatch();
  useEffect(() => {
    dispatch({ type: ShoppingType.FetchCART, payload: productsCart });
  }, []);
  const handleRemoveProduct = (productId: number) => {
    dispatch({ type: ShoppingType.RemoveITEM, productId });
  };

  const handleIncreaseProductQTY = (productId: number) => {
    dispatch({ type: ShoppingType.IncreaseQTY, productId });
  };

  const handleDecreaseProductQTY = (productId: number) => {
    dispatch({ type: ShoppingType.ReduceQTY, productId });
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto mt-10 flex flex-col  flex-wrap justify-center rounded-md border border-solid border-gray-200  px-4 py-10 lg:flex-row">
        <div className="w-full md:pr-10 lg:w-3/4">
          <div className="flow-root">
            <ul role="list" className="-my-6 divide-y divide-gray-200">
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

export default Home;
