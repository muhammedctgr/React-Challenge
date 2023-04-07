import React from 'react';
import { formatCurrency } from '../../utilities/formatCurrency';
import Button from '../button';
interface OrderSummaryCard {
  taxEstimate: number;
  shippingEstimate: number;
  subTotal: number;
}
function OrderSummaryCard({
  taxEstimate,
  shippingEstimate,
  subTotal,
}: OrderSummaryCard) {
  return (
    <div className="bg-gray-100  p-10">
      <div className="flex flex-1 items-start justify-between">
        <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
      </div>
      <div className="my-10 divide-y">
        <div className="flex justify-between   py-5 text-sm  text-gray-500">
          <p>Subtotal</p>
          <p>{formatCurrency(subTotal)}</p>
        </div>
        <div className="flex justify-between   py-5 text-sm text-gray-500 ">
          <p>Shipping Estimate</p>
          <p>{formatCurrency(shippingEstimate)}</p>
        </div>
        <div className="flex justify-between   py-5 text-sm  text-gray-500">
          <p>Tax Estimate</p>
          <p>{formatCurrency(taxEstimate)}</p>
        </div>
        <div className="flex justify-between py-5 text-base font-medium text-gray-900 ">
          <p>Subtotal</p>
          <p>{formatCurrency(taxEstimate + shippingEstimate + subTotal)}</p>
        </div>
      </div>
      <Button className="w-full bg-green-600 text-white  hover:bg-green-700">
        Checkout
      </Button>
    </div>
  );
}

export default OrderSummaryCard;
