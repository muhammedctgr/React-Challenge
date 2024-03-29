import React from 'react';
import { PlusIcon, MinusIcon } from '@heroicons/react/24/outline';
import { ProductType } from '../../@types/shoppingCart';
import { formatCurrency } from '../../utilities/formatCurrency';
import Button from '../button';
import Image from 'next/image';
interface ShoppingCartCardProps extends ProductType {
  onClickRemove?: () => void;
  onClickIncrease?: () => void;
  onClickDescrease?: () => void;
}
function ShoppingCartCard({
  image,
  href,
  name,
  quantity,
  color,
  onClickDescrease,
  onClickRemove,
  onClickIncrease,
  packagePrice,
}: ShoppingCartCardProps) {
  return (
    <li className="flex py-6">
      <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200 md:h-36 md:w-36">
        <Image
          width={100}
          height={100}
          src={image}
          alt={name}
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="ml-4 flex flex-1 flex-col">
        <div>
          <div className="flex justify-between text-base font-medium text-gray-900">
            <h3>
              <a href={href}>{name}</a>
            </h3>
            <p className="ml-4">{formatCurrency(packagePrice)}</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <div className="flex flex-1 items-end justify-between text-sm">
          <div className="flex items-center">
            <Button
              disabled={quantity < 1}
              onClick={() => onClickDecrease && onClickDescrease()}
              className="h-[20px] w-[20px] rounded bg-red-600 py-0 hover:bg-red-700 disabled:bg-gray-200"
            >
              <MinusIcon className="w-3 text-white" />
            </Button>
            <p className="min-w-[70px] p-2  text-center text-gray-500">
              Quantity {quantity}
            </p>
            <Button
              onClick={() => onClickIncrease && onClickIncrease()}
              className="h-[20px] w-[20px] bg-green-600 py-0 text-white hover:bg-green-700"
            >
              <PlusIcon className="w-3  text-white" />
            </Button>
          </div>

          <div className="flex">
            <button
              type="button"
              className="font-medium text-red-600 hover:text-red-500"
              onClick={() => onClickRemove && onClickRemove()}
            >
              Remove
            </button>
          </div>
        </div>
      </div>
    </li>
  );
}

export default ShoppingCartCard;
