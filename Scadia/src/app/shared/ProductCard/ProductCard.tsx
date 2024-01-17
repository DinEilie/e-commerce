import React from 'react';
import Image from 'next/image';
import productImage from '@/app/assets/2_3.jpg';

type ProductCardProps = {
  isOnSale: boolean;
  productID: number;
};

export default function ProductCard(props: ProductCardProps) {
  return (
    <div className='w-80 border border-zinc-300 bg-white p-5'>
      <div className='relative'>
        <div className='group/card flex h-64 w-full items-center justify-center hover:cursor-pointer'>
          <Image className='h-60 w-60 duration-500 group-hover/card:scale-105' src={productImage} alt='Product image' />
        </div>
        {props.isOnSale ? (
          <span className='absolute top-0 -translate-x-5 -translate-y-5 bg-red-600 px-5 py-2 text-white'>Save 50%</span>
        ) : (
          <></>
        )}
      </div>
      <div>
        {props.isOnSale ? (
          <div className='my-3 flex items-end gap-2'>
            <span className='text-xl font-semibold text-red-600'>$49.90</span>
            <span className='text-lg font-medium text-zinc-600 line-through'>$99.00</span>
          </div>
        ) : (
          <div className='my-3 text-xl font-semibold text-red-600'>$49.90</div>
        )}
        <div className='text-ellipsis text-lg font-bold'>Product name</div>
        <p className='mb-2 truncate text-base '>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse pariatur omnis molestiae molestias deserunt
          nostrum ab distinctio assumenda, ipsum cum et praesentium. Tenetur ex illum corporis, provident molestiae
          earum dolore!
        </p>
        <div className='mt-10 flex flex-col gap-2'>
          <button
            type='button'
            className='w-full bg-red-600 px-4 py-2 text-white shadow-lg duration-300 hover:bg-red-500 hover:shadow-red-600/50 focus:bg-red-500 focus:outline-double focus:outline-[10px] focus:outline-blue-800'>
            Add to cart
          </button>
          <button
            type='button'
            className='w-full bg-neutral-800 px-4 py-2 text-white duration-300 hover:bg-neutral-700 focus:bg-neutral-700 focus:outline-double focus:outline-[10px] focus:outline-blue-800'>
            Buy now
          </button>
        </div>
      </div>
    </div>
  );
}
