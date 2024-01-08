'use client';
import { useProductStore } from '@/app/stores/Product';
import { ProductType } from '@/app/types/product';
import Image, { StaticImageData } from 'next/image';
import React, { useEffect, useState } from 'react';

type ProductGalleryProps = {
  params: { id: string };
  product?: ProductType;
  isFetched: boolean;
};

export default function ProductGallery(props: ProductGalleryProps) {
  // Hooks
  const [currentImg, setCurrentImg] = useState<string | StaticImageData | undefined>();
  const [currentImgIndex, setCurrentImgIndex] = useState(0);

  // // On render
  useEffect(() => {
    if (props.isFetched) setCurrentImg(props.product?.productImageURL0);
  }, [props.isFetched]);

  return (
    <div>
      <div className='mx-auto mb-5 h-96 w-96 overflow-hidden rounded-md'>
        <Image
          height={'384'}
          width={'384'}
          src={currentImg ?? ''}
          alt={`${props.product?.productName} by ${props.product?.productBrand}`}
        />
      </div>
      <div className='flex gap-3'>
        <Image
          height={'96'}
          width={'96'}
          onClick={() => {
            setCurrentImg(props.product?.productImageURL0);
            setCurrentImgIndex(0);
          }}
          className={`h-24 w-24 border-2 hover:cursor-pointer ${currentImgIndex === 0 ? 'border-red-600' : ''} rounded`}
          src={props.product?.productImageURL0 ?? ''}
          alt={`${props.product?.productName} by ${props.product?.productBrand}`}
        />
        <Image
          height={'96'}
          width={'96'}
          onClick={() => {
            setCurrentImg(props.product?.productImageURL1);
            setCurrentImgIndex(1);
          }}
          className={`h-24 w-24 border-2 hover:cursor-pointer ${currentImgIndex === 1 ? 'border-red-600' : ''} rounded`}
          src={props.product?.productImageURL1 ?? ''}
          alt={`${props.product?.productName} by ${props.product?.productBrand}`}
        />
        <Image
          height={'96'}
          width={'96'}
          onClick={() => {
            setCurrentImg(props.product?.productImageURL2);
            setCurrentImgIndex(2);
          }}
          className={`h-24 w-24 border-2 hover:cursor-pointer ${currentImgIndex === 2 ? 'border-red-600' : ''} rounded`}
          src={props.product?.productImageURL2 ?? ''}
          alt={`${props.product?.productName} by ${props.product?.productBrand}`}
        />
        <Image
          height={'96'}
          width={'96'}
          onClick={() => {
            setCurrentImg(props.product?.productImageURL3);
            setCurrentImgIndex(3);
          }}
          className={`h-24 w-24 border-2 hover:cursor-pointer ${currentImgIndex === 3 ? 'border-red-600' : ''} rounded`}
          src={props.product?.productImageURL3 ?? ''}
          alt={`${props.product?.productName} by ${props.product?.productBrand}`}
        />
      </div>
    </div>
  );
}
