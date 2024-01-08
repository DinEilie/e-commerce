'use client';
import React, { useState } from 'react';
import Link from 'next/link';

export default function Camping() {
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        type='button'
        className={`${open ? 'text-red-600' : ''} flex items-center gap-5 text-lg font-semibold`}
        onClick={() => setOpen(!open)}>
        Camping
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className={`${open ? '-rotate-0' : '-rotate-180'} h-5 w-5 duration-200`}>
          <path
            fill-rule='evenodd'
            d='M11.47 7.72a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 1 1-1.06 1.06L12 9.31l-6.97 6.97a.75.75 0 0 1-1.06-1.06l7.5-7.5Z'
            clip-rule='evenodd'
          />
        </svg>
      </button>
      <div className={`${open ? 'h-[216px]' : 'h-0'} my-1 ml-5 flex flex-col gap-2 overflow-hidden duration-200`}>
        <Link
          className='w-fit font-medium duration-200 hover:text-red-600 focus-visible:text-red-600'
          href='/shop?category=camping&view=tents&limit=9'
          as='/shop?category=camping&view=tents&limit=9'>
          Tents
        </Link>
        <Link
          className='w-fit font-medium duration-200 hover:text-red-600 focus-visible:text-red-600'
          href='/shop?category=camping&view=mattresses&limit=9'
          as='/shop?category=camping&view=mattresses&limit=9'>
          Mattresses
        </Link>
        <Link
          className='w-fit font-medium duration-200 hover:text-red-600 focus-visible:text-red-600'
          href='/shop?category=camping&view=knives&limit=9'
          as='/shop?category=camping&view=knives&limit=9'>
          Knives
        </Link>
        <Link
          className='w-fit font-medium duration-200 hover:text-red-600 focus-visible:text-red-600'
          href='/shop?category=camping&view=cooking_equipment&limit=9'
          as='/shop?category=camping&view=cooking_equipment&limit=9'>
          Cooking Equipment
        </Link>
        <Link
          className='w-fit font-medium duration-200 hover:text-red-600 focus-visible:text-red-600'
          href='/shop?category=camping&view=all-in-one_tools&limit=9'
          as='/shop?category=camping&view=all-in-one_tools&limit=9'>
          All-in-one Tools
        </Link>
        <Link
          className='w-fit font-medium duration-200 hover:text-red-600 focus-visible:text-red-600'
          href='/shop?category=camping&view=all&limit=9'
          as='/shop?category=camping&view=all&limit=9'>
          View All
        </Link>
      </div>
    </li>
  );
}
