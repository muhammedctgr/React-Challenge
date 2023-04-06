import React from "react";
import { formatCurrency } from "../../../helpers/formatCurrency";
import Button from "../../atoms/button";
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
      <div className="flex-1 flex items-start justify-between">
        <h3 className="text-lg font-medium text-gray-900">Order Summary</h3>
      </div>
      <div className="my-10 divide-y">
        <div className="flex justify-between   text-sm text-gray-500  py-5">
          <p>Subtotal</p>
          <p>{formatCurrency(subTotal, "USD")}</p>
        </div>
        <div className="flex justify-between   text-sm text-gray-500 py-5 ">
          <p>Shipping Estimate</p>
          <p>{formatCurrency(shippingEstimate, "USD")}</p>
        </div>
        <div className="flex justify-between   text-sm text-gray-500  py-5">
          <p>Tax Estimate</p>
          <p>{formatCurrency(taxEstimate, "USD")}</p>
        </div>
        <div className="flex justify-between text-base font-medium text-gray-900 py-5 ">
          <p>Subtotal</p>
          <p>
            {formatCurrency(
              taxEstimate + shippingEstimate + subTotal,
            )}
          </p>
        </div>
      </div>
      <Button className="bg-green-600 hover:bg-green-700 text-white  w-full">
        Checkout
      </Button>
    </div>
  );
}

export default OrderSummaryCard;
