'use client';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useCartStore } from '@/app/stores/Cart';
import { CartType } from '@/app/types/cart';

export default function Cart() {
  const store = useCartStore();

  useEffect(() => {
    async function fetchCartData() {
      const cartRequest = await fetch('/api/getCart');
      const cartData: { data: CartType[] | undefined } = await cartRequest.json();
      if (cartData.data) {
        store.setCart(cartData.data);
        let totalPrices = 0;
        let totalAmounts = 0;
        for (let index = 0; index < cartData.data.length; index++) {
          const currentTotalAmount = cartData.data[index].productQuantity;
          const currentTotalPrice =
            (cartData.data[index].isOnSale
              ? cartData.data[index].productSalePrice
              : cartData.data[index].productPrice) * currentTotalAmount;
          totalPrices += currentTotalPrice;
          totalAmounts += currentTotalAmount;
        }
        store.setTotalPrices(totalPrices);
        store.setTotalAmounts(totalAmounts);
      }
      store.setIsFetched(true);
    }
    if (!store.isFetched) {
      fetchCartData();
    }
  }, [store.isFetched]);

  return (
    <Link
      href={'/cart'}
      as={'/cart'}
      className='group/cart flex items-center gap-5 px-5 font-bold text-white duration-100 hover:cursor-pointer'>
      <div className='relative'>
        <div className='absolute -right-2 -top-1 z-10 h-5 w-5 rounded-full bg-red-600 text-center text-sm font-light'>
          {store.totalAmounts}
        </div>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 24 24'
          fill='currentColor'
          className='h-8 w-8 group-hover/cart:animate-shake'>
          <path d='M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z' />
        </svg>
      </div>
      Cart
    </Link>
  );
}
