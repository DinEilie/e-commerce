import React, { Suspense } from 'react';
import Breadcrumb from './components/Breadcrumb/Breadcrumb';
import ProductInfo from './client/ProductInfo/ProductInfo';
import Incentives from './components/Incentives/Incentives';

export default function page({ params }: { params: { id: string } }) {
  return (
    <div className='mx-auto w-10/12 pb-10 pt-10 3xl:w-7/12'>
      <Breadcrumb params={params} />
      <Suspense fallback={<div>YO LOADING!!!</div>}>
        <ProductInfo params={params} />
      </Suspense>
      <Incentives />
    </div>
  );
}
