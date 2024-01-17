'use client';
import React, { useEffect, useState } from 'react';
import { CartType } from '@/app/types/cart';
import CartCard from './client/CartCard/CartCard';
import { useCartStore } from '@/app/stores/Cart';
import paypalLogo from '@/app/assets/paypal-seeklogo.svg';
import stripeLogo from '@/app/assets/stripe-seeklogo.svg';
import Image from 'next/image';

export default function page() {
  const store = useCartStore();

  if (!store.isFetched) return <div>Loading cart</div>;
  return (
    <div>
      <div className='mx-auto w-10/12 pt-10 text-center text-3xl font-bold 3xl:w-7/12'>
        <div className='w-fit bg-gradient-to-r from-orange-500 via-pink-600 to-red-500 bg-clip-text text-5xl font-bold text-transparent'>
          Cart
        </div>
      </div>
      <div className='flex flex-col gap-2 pt-10'>
        {store.cart?.map((value, index) => (
          <CartCard
            key={index}
            productName={value.productName}
            productImage={value.productImageURL0}
            productPrice={value.productPrice}
            productQuantity={value.productQuantity}
            productSalePrice={value.productSalePrice}
            productSaleDiscount={value.productSaleDiscount}
            productBrand={value.productBrand}
            isOnSale={value.isOnSale}
            isOutOfStock={value.isOutOfStock}
            productSize={value.productSize}
            productDescription={value.productDescription}
          />
        )) ?? 'No products in cart.'}
      </div>
      <div className='mx-auto mt-2 w-10/12 border bg-white p-5 text-center text-3xl font-bold 3xl:w-7/12'>
        Total:
        <span className='ml-3'>${store.totalPrices}</span>
        <hr className='mb-6 mt-4' />
        <div className='flex flex-col items-center justify-center gap-2'>
          <button className='flex w-60 items-center justify-center gap-2 bg-neutral-700 px-4 py-3 text-base font-normal text-white hover:bg-neutral-600'>
            Pay with <b>PayPal</b>
            <Image src={paypalLogo} height={20} width={20} alt='PayPal logo' />
          </button>
          <button className='flex w-60 items-center justify-center gap-2 bg-neutral-700 px-4 py-3 text-base font-normal text-white hover:bg-neutral-600'>
            Pay with <b>Stripe</b>
            <Image src={stripeLogo} height={20} width={20} alt='Stripe logo' />
          </button>
        </div>
      </div>
    </div>
  );
}
