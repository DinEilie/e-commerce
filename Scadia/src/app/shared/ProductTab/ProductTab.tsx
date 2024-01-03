'use client';
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import { ProductSizeType } from '@/app/types/productSize';

type ProductTabProps = {
  productID: number;
  productName: string;
  productDescription: string;
  isOnSale: boolean;
  productPrice: number;
  productSalePrice: number;
  productSaleDiscount: number;
  hasSmallSize: boolean;
  hasMediumSize: boolean;
  hasLargeSize: boolean;
  hasXLargeSize: boolean;
  productSmallQuantity: number;
  productMediumQuantity: number;
  productLargeQuantity: number;
  productXLargeQuantity: number;
  productQuantity: number;
  productCategory: string;
  productBrand: string;
  productImageURL0: StaticImageData;
};

export default function ProductTab(props: ProductTabProps) {
  const [selectedSize, setSelectedSize] = useState<ProductSizeType>('none');

  function viewCurrentStock(): number {
    switch (selectedSize) {
      case 'XL':
        return props.productXLargeQuantity;
      case 'L':
        return props.productLargeQuantity;
      case 'M':
        return props.productMediumQuantity;
      case 'S':
        return props.productSmallQuantity;
      case 'none':
        return props.productQuantity;
    }
  }
  return (
    <div className='flex items-center justify-between border-b bg-white p-5'>
      <div className='relative w-fit'>
        <Link
          href={`/shop/product/${props.productID}`}
          className='group/card flex h-64 w-64 items-center justify-center hover:cursor-pointer'>
          <Image
            className='h-60 w-60 duration-500 group-hover/card:scale-105'
            src={props.productImageURL0}
            alt='Product image'
          />
        </Link>
        {props.isOnSale ? (
          <span className='absolute top-0 -translate-x-5 -translate-y-5 bg-red-600 px-5 py-2 text-white'>
            Save {props.productSaleDiscount}%
          </span>
        ) : (
          <></>
        )}
      </div>
      <div className='flex w-1/2 flex-col gap-5'>
        {props.isOnSale ? (
          <div className='my-3 flex items-center gap-2'>
            <span className='text-xl font-semibold text-red-600'>${props.productSalePrice}</span>
            <span className='text-lg font-medium text-zinc-600 line-through'>${props.productPrice}</span>
            <ul className='ml-5 list-disc font-medium'>
              {props.productQuantity > 0 ? (
                <li className='text-green-600'>{`${
                  selectedSize !== 'none' ? 'Currently,' : 'In total,'
                } ${viewCurrentStock()} in stock`}</li>
              ) : (
                <li className='text-red-600'>
                  This product is currently <span className='underline'>out of stock</span>
                </li>
              )}
            </ul>
          </div>
        ) : (
          <div className='my-3 flex gap-2 text-xl font-semibold text-red-600'>
            <div>${props.productPrice} </div>
            <ul className='ml-5 list-disc text-base font-medium text-green-600'>
              {props.productQuantity > 0 ? (
                <li className='text-green-600'>{`${
                  selectedSize !== 'none' ? 'Currently,' : 'In total,'
                } ${viewCurrentStock()} in stock`}</li>
              ) : (
                <li className='text-red-600'>
                  This product is currently <span className='underline'>out of stock</span>
                </li>
              )}
            </ul>
          </div>
        )}
        <div>
          <div className='flex justify-between'>
            <Link href={`/shop/product/${props.productID}`} className='text-ellipsis text-lg font-bold'>
              {props.productName}
            </Link>
            <div></div>
          </div>
          <p className='mb-2 max-h-20 w-3/4 overflow-y-auto text-base'>{props.productDescription}</p>
        </div>

        <div className='flex gap-1 text-sm'>
          {props.hasSmallSize ? (
            <button
              onClick={() => {
                if (selectedSize === 'S') setSelectedSize('none');
                else setSelectedSize('S');
              }}
              disabled={props.productSmallQuantity < 1}
              className={`rounded-sm border border-zinc-300 text-neutral-500 ${
                selectedSize === 'S' ? 'bg-neutral-300' : ''
              } ${
                props.productSmallQuantity > 0 ? 'hover:bg-neutral-300' : ' cursor-not-allowed bg-red-200 line-through'
              } h-8 w-8`}>
              S
            </button>
          ) : (
            <></>
          )}
          {props.hasMediumSize ? (
            <button
              onClick={() => {
                if (selectedSize === 'M') setSelectedSize('none');
                else setSelectedSize('M');
              }}
              disabled={props.productMediumQuantity < 1}
              className={`rounded-sm border border-zinc-300 text-neutral-500 ${
                selectedSize === 'M' ? 'bg-neutral-300' : ''
              } ${
                props.productMediumQuantity > 0 ? 'hover:bg-neutral-300' : ' cursor-not-allowed bg-red-200 line-through'
              } h-8 w-8`}>
              M
            </button>
          ) : (
            <></>
          )}
          {props.hasLargeSize ? (
            <button
              onClick={() => {
                if (selectedSize === 'L') setSelectedSize('none');
                else setSelectedSize('L');
              }}
              disabled={props.productLargeQuantity < 1}
              className={`rounded-sm border border-zinc-300 text-neutral-500 ${
                selectedSize === 'L' ? 'bg-neutral-300' : ''
              } ${
                props.productLargeQuantity > 0 ? 'hover:bg-neutral-300' : ' cursor-not-allowed bg-red-200 line-through'
              } h-8 w-8`}>
              L
            </button>
          ) : (
            <></>
          )}
          {props.hasXLargeSize ? (
            <button
              onClick={() => {
                if (selectedSize === 'XL') setSelectedSize('none');
                else setSelectedSize('XL');
              }}
              disabled={props.productXLargeQuantity < 1}
              className={`rounded-sm border border-zinc-300 text-neutral-500 ${
                selectedSize === 'XL' ? 'bg-neutral-300' : ''
              } ${
                props.productXLargeQuantity > 0 ? 'hover:bg-neutral-300' : ' cursor-not-allowed bg-red-200 line-through'
              } h-8 w-8`}>
              XL
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className='mt-10 flex flex-col items-center gap-2'>
        <button
          type='button'
          className='bg-red-600 px-4 py-2 text-white shadow-lg duration-300 hover:shadow-red-600 focus:bg-red-500 focus:outline-double focus:outline-[10px] focus:outline-blue-800'>
          Add to cart
        </button>
        <Link
          href={`/shop/product/${props.productID}`}
          as={`/shop/product/${props.productID}`}
          className='w-full border border-neutral-700 px-4 py-2 font-semibold text-neutral-500 duration-300 hover:border-neutral-800 hover:bg-neutral-700 hover:text-white focus:outline-double focus:outline-[10px] focus:outline-blue-800'>
          View Page
        </Link>
      </div>
    </div>
  );
}
