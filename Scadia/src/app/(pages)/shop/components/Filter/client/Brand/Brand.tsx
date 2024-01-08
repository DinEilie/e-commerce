'use client';
import { useFilterStore } from '@/app/stores/Filter';
import React, { useState } from 'react';

export default function Brand() {
  const store = useFilterStore();
  const [open, setOpen] = useState(false);
  return (
    <li>
      <button
        type='button'
        className={`${open ? 'text-red-600' : ''} flex items-center gap-5 text-lg font-semibold`}
        onClick={() => setOpen(!open)}>
        Brand
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
          onClick={() => store.setShowAdidas(!store.showAdidas)}
          className='flex w-fit items-center gap-3 font-medium text-zinc-500 duration-200 hover:cursor-pointer hover:text-red-600 focus-visible:text-red-600'>
          <input
            checked={store.showAdidas}
            type='checkbox'
            className='h-4 w-4 border accent-red-500 hover:cursor-pointer'
          />
          Adidas
        </button>
        <button
          onClick={() => store.setShowTheNorthFace(!store.showTheNorthFace)}
          className='flex w-fit items-center gap-3 font-medium text-zinc-500 duration-200 hover:cursor-pointer hover:text-red-600 focus-visible:text-red-600'>
          <input
            checked={store.showTheNorthFace}
            type='checkbox'
            className='h-4 w-4 border accent-red-500 hover:cursor-pointer'
          />
          The North Face
        </button>
        <button
          onClick={() => store.setShowPuma(!store.showPuma)}
          className='flex w-fit items-center gap-3 font-medium text-zinc-500 duration-200 hover:cursor-pointer hover:text-red-600 focus-visible:text-red-600'>
          <input
            checked={store.showPuma}
            type='checkbox'
            className='h-4 w-4 border accent-red-500 hover:cursor-pointer'
          />
          Puma
        </button>
        <button
          onClick={() => store.setShowColumbia(!store.showColumbia)}
          className='flex w-fit items-center gap-3 font-medium text-zinc-500 duration-200 hover:cursor-pointer hover:text-red-600 focus-visible:text-red-600'>
          <input
            checked={store.showColumbia}
            type='checkbox'
            className='h-4 w-4 border accent-red-500 hover:cursor-pointer'
          />
          Columbia
        </button>
        <button
          onClick={() => store.setShowJackWolfskin(!store.showJackWolfskin)}
          className='flex w-fit items-center gap-3 font-medium text-zinc-500 duration-200 hover:cursor-pointer hover:text-red-600 focus-visible:text-red-600'>
          <input
            checked={store.showJackWolfskin}
            type='checkbox'
            className='h-4 w-4 border accent-red-500 hover:cursor-pointer'
          />
          Jack Wolfskin
        </button>
        <button
          onClick={() => store.setShowGarmin(!store.showGarmin)}
          className='flex w-fit items-center gap-3 font-medium text-zinc-500 duration-200 hover:cursor-pointer hover:text-red-600 focus-visible:text-red-600'>
          <input
            checked={store.showGarmin}
            type='checkbox'
            className='h-4 w-4 border accent-red-500 hover:cursor-pointer'
          />
          Garmin
        </button>
        <button
          onClick={
            store.showAdidas &&
            store.showTheNorthFace &&
            store.showPuma &&
            store.showColumbia &&
            store.showJackWolfskin &&
            store.showGarmin
              ? store.setShowBrandNone
              : store.setShowBrandAll
          }
          className='w-fit font-medium text-zinc-500 duration-200 hover:text-red-600 focus-visible:text-red-600'>
          {store.showAdidas &&
          store.showTheNorthFace &&
          store.showPuma &&
          store.showColumbia &&
          store.showJackWolfskin &&
          store.showGarmin
            ? 'Hide All'
            : 'Show All'}
        </button>
      </div>
    </li>
  );
}
