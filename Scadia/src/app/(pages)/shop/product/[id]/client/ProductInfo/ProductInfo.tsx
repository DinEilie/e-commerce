'use client';
import React, { useEffect, useState } from 'react';
import ProductGallery from './components/ProductGallery/ProductGallery';
import { useProductStore } from '@/app/stores/Product';
import { ProductType } from '@/app/types/product';
import { ProductSizeType } from '@/app/types/productSize';
import Link from 'next/link';
import ProductAmount from './components/ProductAmount/ProductAmount';
import ProductSize from './components/ProductSize/ProductSize';

export default function ProductInfo({ params }: { params: { id: string } }) {
  // hooks
  const store = useProductStore();

  // On render
  useEffect(() => {
    store.resetStore();
    async function getProductQuery() {
      const response = await fetch(`/api/getProduct/${params.id}`);
      const { data }: { data: ProductType | undefined } = await response.json();
      store.setProduct(data);
      store.setIsFetched(true);
    }
    getProductQuery();
  }, []);

  return (
    <div className='relative overflow-hidden border bg-white p-5 pb-10'>
      {store.product?.isOnSale ? (
        <div className='absolute top-5 w-fit -translate-x-20 -rotate-45 bg-red-600 px-16 py-2 font-semibold text-white'>
          Save {store.product?.productSaleDiscount}%
        </div>
      ) : (
        <></>
      )}
      <div className='text-center text-4xl font-bold'>{store.product?.productName}</div>
      <hr className='mx-auto my-4 w-11/12' />
      <div className='mt-10 flex max-h-fit justify-around'>
        <ProductGallery params={params} product={store.product} isFetched={store.isFetched} />
        <div className='flex w-1/3 flex-col justify-between'>
          <div>
            <div className='mb-5 flex items-center gap-4'>
              {store.product?.isOnSale ? (
                <>
                  <span className='text-2xl font-semibold text-red-600'>${store.product?.productSalePrice}</span>
                  <span className='text-xl font-medium text-zinc-600 line-through'>${store.product?.productPrice}</span>
                </>
              ) : (
                <span className='text-2xl font-semibold text-red-600'>${store.product?.productPrice}</span>
              )}

              <ul className='ml-5 list-disc font-medium'>
                {store.product !== undefined ? (
                  store.product.productQuantity > 0 ? (
                    <li className='text-green-600'>{`${
                      store.selectedSize !== 'none' ? 'Currently,' : 'In total,'
                    } ${store.getCurrentAmount()} in stock`}</li>
                  ) : (
                    <li className='text-red-600'>
                      This product is currently <span className='underline'>out of stock</span>
                    </li>
                  )
                ) : (
                  <></>
                )}
              </ul>
            </div>
            <p className='mb-5 h-fit max-h-48 overflow-y-auto'>{store.product?.productDescription}</p>
            <div className='flex'>
              <ProductSize />
              <ProductAmount />
            </div>
          </div>
          <div className='flex w-full flex-col items-center gap-2'>
            <button
              disabled={store.selectedAmount < 1}
              type='button'
              className='flex w-full justify-center gap-3 bg-red-600 px-4 py-2 text-white duration-300 hover:bg-red-500 hover:shadow-sm hover:shadow-red-600/50 focus:bg-red-500 focus:outline-double focus:outline-[10px] focus:outline-blue-800 disabled:bg-neutral-300 disabled:hover:shadow-none'>
              Add to cart
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
                  d='M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z'
                />
              </svg>
            </button>
            <Link
              href={`/shop/product/${store.product?.productID}`}
              as={`/shop/product/${store.product?.productID}`}
              className='flex w-full justify-center gap-3 bg-neutral-800 px-4 py-2 text-center text-white duration-300 hover:bg-neutral-500 hover:text-white hover:shadow-sm hover:shadow-neutral-600/50 focus:outline-double focus:outline-[10px] focus:outline-blue-800'>
              Purchase
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
                  d='M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z'
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
