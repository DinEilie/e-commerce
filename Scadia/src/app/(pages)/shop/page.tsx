import React from 'react';
import Filter from './components/Filter/Filter';
import ProductsList from './client/ProductList/ProductsList';
import { Suspense } from 'react';
import ProductTabSkeleton from '@/app/shared/ProductTab/ProductTabSkeleton';
import Link from 'next/link';

export default function page() {
  return (
    <div className='mx-auto w-10/12 pb-10 pt-10 3xl:w-7/12'>
      <div className='flex items-center gap-4 pb-10 text-lg font-light text-zinc-500'>
        <Link className='hover:text-red-600' href={'/'}>
          Home
        </Link>
        <span>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='h-4 w-4'>
            <path
              fillRule='evenodd'
              d='M12.78 7.595a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06l3.25 3.25Zm-8.25-3.25 3.25 3.25a.75.75 0 0 1 0 1.06l-3.25 3.25a.75.75 0 0 1-1.06-1.06l2.72-2.72-2.72-2.72a.75.75 0 0 1 1.06-1.06Z'
              clipRule='evenodd'
            />
          </svg>
        </span>
        <Link className='text-red-600 underline' href={'/shop'}>
          Shop
        </Link>
      </div>
      <div className='flex justify-between'>
        <Filter />
        <div className='w-[80%] border bg-white'>
          <div className='border-b p-10'>
            <div className='w-fit bg-gradient-to-r from-orange-500 via-pink-600 to-red-500 bg-clip-text text-5xl font-bold text-transparent'>
              Shop
            </div>
          </div>
          <Suspense
            fallback={
              <div>
                <ProductTabSkeleton />
                <ProductTabSkeleton />
                <ProductTabSkeleton />
              </div>
            }>
            <ProductsList />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
