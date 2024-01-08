import React from 'react';

export default function Searchbar() {
  return (
    <div className='flex w-1/2 items-center'>
      <input
        type='search'
        id='searchbar'
        placeholder='Search...'
        className='h-full max-h-[40px] w-full rounded-l border border-r-0 border-red-300 p-2 text-sm'
      />
      <select
        name='searchCategory'
        id='searchCategory'
        defaultValue='all'
        className='h-full max-h-[40px] border border-l-0 border-red-300 bg-gray-100 p-2 text-sm text-zinc-700 caret-red-600'>
        <option value='all'>All Categories</option>
        <optgroup label='Clothing'>
          <option value='Jackets'>Jackets</option>
          <option value='Hoodies'>Hoodies</option>
          <option value='T-shirts'>T-shirts</option>
          <option value='Pants'>Pants</option>
          <option value='Underwears'>Underwears</option>
          <option value='Accessories'>Hats, Gloves & Accessories</option>
        </optgroup>
        <optgroup label='Bags'>
          <option value='Travel'>Travel Bags</option>
          <option value='Backpacks'>Backpacks</option>
          <option value='Messenger'>Messenger Bags</option>
          <option value='Camera'>Camera Bags</option>
          <option value='Suitcases'>Suitcases</option>
        </optgroup>
      </select>
      <button type='button' className='rounded-r bg-red-600 p-2'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={2}
          stroke='currentColor'
          className='h-6 w-6 stroke-white '>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
          />
        </svg>
      </button>
    </div>
  );
}
