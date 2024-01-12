'use client';
import React, { useEffect, useState } from 'react';
import { CartSupabaseType } from '@/app/types/cartSupabase';

export default function page() {
  const [isFetched, setIsFetched] = useState(false);
  const [data, setData] = useState('');
  useEffect(() => {
    async function fetchCartData() {
      const response = await fetch('/api/getCart');
      const data = await response.json();
      const result = await JSON.stringify(data);
      setData(result);
      setIsFetched(true);
    }
    if (!isFetched) {
      fetchCartData();
    }
  }, [isFetched]);
  return <div>{data}</div>;
}
