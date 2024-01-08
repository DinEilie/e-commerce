'use client';
import { useFilterStore } from '@/app/stores/Filter';
import React, { useState } from 'react';

export default function Size() {
  const store = useFilterStore();
  const [open, setOpen] = useState(false);

  return (
    <li>
      <button
        type='button'
        className={`${open ? 'text-red-600' : ''} flex items-center gap-5 text-lg font-semibold`}
        onClick={() => setOpen(!open)}>
        Size
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
        <button
          onClick={() => store.setShowXLarge(!store.showXLarge)}
          className='flex w-fit items-center gap-3 font-medium text-zinc-500 duration-200 hover:cursor-pointer hover:text-red-600 focus-visible:text-red-600'>
          <input
            checked={store.showXLarge}
            type='checkbox'
            className='h-4 w-4  border accent-red-500 hover:cursor-pointer'
          />
          X-Large
        </button>
        <button
          onClick={() => store.setShowLarge(!store.showLarge)}
          className='flex w-fit items-center gap-3 font-medium text-zinc-500 duration-200 hover:cursor-pointer hover:text-red-600 focus-visible:text-red-600'>
          <input
            checked={store.showLarge}
            type='checkbox'
            className='h-4 w-4 border accent-red-500 hover:cursor-pointer'
          />
          Large
        </button>
        <button
          onClick={() => store.setShowMedium(!store.showMedium)}
          className='flex w-fit items-center gap-3 font-medium text-zinc-500 duration-200 hover:cursor-pointer hover:text-red-600 focus-visible:text-red-600'>
          <input
            checked={store.showMedium}
            type='checkbox'
            className='h-4 w-4 border accent-red-500 hover:cursor-pointer'
          />
          Medium
        </button>
        <button
          onClick={() => store.setShowSmall(!store.showSmall)}
          className='flex w-fit items-center gap-3 font-medium text-zinc-500 duration-200 hover:cursor-pointer hover:text-red-600 focus-visible:text-red-600'>
          <input
            checked={store.showSmall}
            type='checkbox'
            className='h-4 w-4 border accent-red-500 hover:cursor-pointer'
          />
          Small
        </button>
        <button
          onClick={
            store.showSmall && store.showMedium && store.showLarge && store.showXLarge
              ? store.setShowSizeNone
              : store.setShowSizeAll
          }
          className='w-fit font-medium text-zinc-500 duration-200 hover:text-red-600 focus-visible:text-red-600'>
          {store.showSmall && store.showMedium && store.showLarge && store.showXLarge ? 'Hide All' : 'View All'}
        </button>
      </div>
    </li>
  );
}
