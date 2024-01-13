'use client';
import React, { useEffect, useState } from 'react';
import { CartSupabaseType } from '@/app/types/cartSupabase';
import { CartType } from '@/app/types/cart';

export default function page() {
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState<CartType[] | undefined>();
  useEffect(() => {
    async function fetchCartData() {
      const cartRequest = await fetch('/api/getCart');
      const cartData: { data: CartType[] | undefined } = await cartRequest.json();
      setData(cartData.data);
      setIsFetched(true);
    }
    if (!isFetched) {
      fetchCartData();
    }
  }, [isFetched]);
  if (!isFetched) return <div>Loading cart</div>
  return <div>{data?.map((value,index) => <div key={index}><span className='text-3xl'>{value.productName}</span></div>) ?? "No products in cart."}</div>;
}
