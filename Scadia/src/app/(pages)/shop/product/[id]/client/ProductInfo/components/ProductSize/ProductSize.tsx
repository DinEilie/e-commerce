import { useProductStore } from '@/app/stores/Product';
import React, { useState } from 'react';

export default function ProductSize() {
  const store = useProductStore();

  return (
    <div className='flex gap-1 text-sm'>
      {store.product !== undefined && store.product?.hasSmallSize ? (
        <button
          title={store.product.productSmallQuantity > 0 ? 'Pick small size' : 'Small size is out of stock'}
          onClick={() => {
            if (store.selectedSize === 'S') store.setSelectedSize('none');
            else {
              store.setSelectedSize('S');
              store.clampSelectedAmount();
            }
          }}
          disabled={store.product.productSmallQuantity < 1}
          className={`rounded-sm border border-zinc-300 text-neutral-500 ${
            store.selectedSize === 'S' ? 'bg-neutral-300' : ''
          } ${
            store.product.productSmallQuantity > 0
              ? 'hover:bg-neutral-300'
              : ' cursor-not-allowed bg-red-200 line-through'
          } h-8 w-8`}>
          S
        </button>
      ) : (
        <></>
      )}
      {store.product !== undefined && store.product?.hasMediumSize ? (
        <button
          title={store.product.productMediumQuantity > 0 ? 'Pick medium size' : 'Medium size is out of stock'}
          onClick={() => {
            if (store.selectedSize === 'M') store.setSelectedSize('none');
            else {
              store.setSelectedSize('M');
              store.clampSelectedAmount();
            }
          }}
          disabled={store.product.productMediumQuantity < 1}
          className={`rounded-sm border border-zinc-300 text-neutral-500 ${
            store.selectedSize === 'M' ? 'bg-neutral-300' : ''
          } ${
            store.product.productMediumQuantity > 0
              ? 'hover:bg-neutral-300'
              : ' cursor-not-allowed bg-red-200 line-through'
          } h-8 w-8`}>
          M
        </button>
      ) : (
        <></>
      )}
      {store.product !== undefined && store.product?.hasLargeSize ? (
        <button
          title={store.product.productLargeQuantity > 0 ? 'Pick large size' : 'Large large is out of stock'}
          onClick={() => {
            if (store.selectedSize === 'L') store.setSelectedSize('none');
            else {
              store.setSelectedSize('L');
              store.clampSelectedAmount();
            }
          }}
          disabled={store.product.productLargeQuantity < 1}
          className={`rounded-sm border border-zinc-300 text-neutral-500 ${
            store.selectedSize === 'L' ? 'bg-neutral-300' : ''
          } ${
            store.product.productLargeQuantity > 0
              ? 'hover:bg-neutral-300'
              : ' cursor-not-allowed bg-red-200 line-through'
          } h-8 w-8`}>
          L
        </button>
      ) : (
        <></>
      )}
      {store.product !== undefined && store.product?.hasXLargeSize ? (
        <button
          title={store.product.productXLargeQuantity > 0 ? 'Pick x-large size' : 'X-Large size is out of stock'}
          onClick={() => {
            if (store.selectedSize === 'XL') store.setSelectedSize('none');
            else {
              store.setSelectedSize('XL');
              store.clampSelectedAmount();
            }
          }}
          disabled={store.product.productXLargeQuantity < 1}
          className={`rounded-sm border border-zinc-300 text-neutral-500 ${
            store.selectedSize === 'XL' ? 'bg-neutral-300' : ''
          } ${
            store.product.productXLargeQuantity > 0
              ? 'hover:bg-neutral-300'
              : ' cursor-not-allowed bg-red-200 line-through'
          } h-8 w-8`}>
          XL
        </button>
      ) : (
        <></>
      )}
    </div>
  );
}
