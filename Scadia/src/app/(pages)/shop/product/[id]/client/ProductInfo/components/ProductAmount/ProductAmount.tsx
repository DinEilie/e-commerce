import { useProductStore } from '@/app/stores/Product';
import React from 'react';

export default function ProductAmount() {
  const store = useProductStore();
  return store.product !== undefined ? (
    store.product?.productQuantity > 0 ? (
      <div className='ml-auto flex'>
        <button
          onClick={store.decreaseSelectedAmount}
          className='group/button flex h-8 w-8 items-center justify-center rounded-l-md border border-r-0 border-red-600 text-red-600 hover:bg-red-600'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6 group-hover/button:stroke-white'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M5 12h14' />
          </svg>
        </button>
        <span className='flex h-8 w-10 items-center justify-center border border-l-0 border-r-0 border-red-600 text-center font-semibold text-red-500'>
          {store.selectedAmount}
        </span>
        <button
          onClick={store.increaseSelectedAmount}
          className='group/button flex h-8 w-8 items-center justify-center rounded-r-md border border-l-0 border-red-600 text-red-600 hover:bg-red-600'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='h-6 w-6 group-hover/button:stroke-white'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
          </svg>
        </button>
      </div>
    ) : (
      <></>
    )
  ) : (
    <></>
  );
}
