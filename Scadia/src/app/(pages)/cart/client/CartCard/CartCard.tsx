import React from 'react';
import Shoes from '../images/shoes.png';
import Image, { StaticImageData } from 'next/image';
import { ProductSizeType } from '@/app/types/productSize';

type CartCardProps = {
  productName: string;
  productPrice: number;
  productImage: StaticImageData | string;
  productDescription: string;
  isOnSale: boolean;
  productSalePrice: number;
  productSaleDiscount: number;
  productSize: ProductSizeType;
  productQuantity: number;
  isOutOfStock: boolean;
  productBrand: string;
};
export default function CartCard(props: CartCardProps) {
  return (
    <div className='relative mx-auto flex w-10/12 items-center justify-evenly border bg-white p-5 py-3 3xl:w-7/12'>
      {props.isOnSale ? (
        <span className='absolute left-0 top-0 bg-red-600 px-5 py-2 text-white'>Save {props.productSaleDiscount}%</span>
      ) : (
        <></>
      )}
      <Image src={props.productImage} height={160} width={160} alt='Product image' className='h-40 w-40' />
      <div className='flex w-4/5 items-start justify-between'>
        <div className='flex flex-col gap-2'>
          <div>
            <span className='text-xl font-bold text-red-600'>{props.productName}</span>
            <span className='ml-3 font-medium text-zinc-500'>by {props.productBrand}</span>
            {props.isOnSale ? (
              <div className='mt-3 flex items-center gap-2'>
                <span className='text-xl font-semibold text-red-600'>${props.productSalePrice}</span>
                <span className='text-lg font-medium text-zinc-600 line-through'>${props.productPrice}</span>
              </div>
            ) : (
              <div className='mt-3 text-xl font-semibold text-red-600'>${props.productPrice}</div>
            )}
          </div>
          <p className='mb-2 max-h-20 w-3/4 overflow-y-auto text-base'>{props.productDescription}</p>
          <div className='flex w-28 items-center'>
            <button className='border border-r-0 border-red-600 px-2 py-1 text-lg text-red-600'> - </button>
            <span className='border border-red-600 bg-red-600 px-2 py-1 text-lg text-white'>
              {props.productQuantity}
            </span>
            <button className='border border-l-0 border-red-600 px-2 py-1 text-lg text-red-600'> + </button>
          </div>
        </div>
        <div className='flex items-center gap-2'>
          <button
            title={`View ${props.productName} page.`}
            type='button'
            className='flex items-center  border border-neutral-700 p-2 text-sm text-neutral-700 duration-100 hover:bg-neutral-700 hover:text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z'
              />
              <path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z' />
            </svg>
            View
          </button>
          <button
            title={`Remove ${props.productName} from cart.`}
            type='button'
            className='flex items-center border border-red-600 p-2 text-sm text-red-600 duration-100 hover:bg-red-600 hover:text-white'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='h-6 w-6'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M6 18 18 6M6 6l12 12' />
            </svg>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
}
