'use client';
import { useNavbarStore } from '@/app/stores/Navbar';
import Link from 'next/link';
import React from 'react';

export default function Bags() {
  const store = useNavbarStore();
  return (
    <Link
      className={`${
        store.showBags ? 'border-b border-red-600 text-red-600' : ''
      } px-2 py-4 font-medium duration-200 focus-visible:text-red-600`}
      href='/shop?category=bags&view=all'
      as='/shop?category=bags&view=all'
      onClick={() => {
        store.setShowBags(false);
        store.setShowShoes(false);
        store.setShowCamping(false);
        store.setShowClothing(false);
      }}
      onMouseEnter={() => {
        store.setShowClothing(false);
        store.setShowShoes(false);
        store.setShowCamping(false);
        store.setShowBags(true);
      }}>
      <div className='flex items-center gap-3'>
        Bags
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 20 20' fill='currentColor' className='h-5 w-5'>
          <path
            fillRule='evenodd'
            d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
            clipRule='evenodd'
          />
        </svg>
      </div>
    </Link>
  );
}
