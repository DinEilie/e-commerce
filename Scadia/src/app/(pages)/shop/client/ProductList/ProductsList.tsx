'use client';
import React, { useEffect, useState } from 'react';
import ProductTab from '@/app/shared/ProductTab/ProductTab';
import { useSearchParams } from 'next/navigation';
import { ProductType } from '@/app/types/product';
import ProductTabSkeleton from '@/app/shared/ProductTab/ProductTabSkeleton';
export default function ProductsList() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [isFetched, setIsFetched] = useState(false);
  useEffect(() => {
    async function getProductsQuery() {
      const response = await fetch('/api/getProducts');
      const data: ProductType[] = await response.json();
      setProducts(data);
      setIsFetched(true);
    }
    getProductsQuery();
  }, []);
  return (
    <div>
      {isFetched === false ? (
        <div>
          <ProductTabSkeleton />
          <ProductTabSkeleton />
          <ProductTabSkeleton />
        </div>
      ) : products.length !== 0 ? (
        products.map((value, index) => (
          <ProductTab
            key={index}
            productName={value.productName}
            productDescription={value.productDescription}
            productPrice={value.productPrice}
            productSaleDiscount={value.productSaleDiscount}
            productSalePrice={value.productSalePrice}
            isOnSale={value.isOnSale}
            productID={value.productID}
            productSmallQuantity={value.productSmallQuantity}
            productMediumQuantity={value.productMediumQuantity}
            productLargeQuantity={value.productLargeQuantity}
            productXLargeQuantity={value.productXLargeQuantity}
            productQuantity={value.productQuantity}
            hasSmallSize={value.hasLargeSize}
            hasMediumSize={value.hasMediumSize}
            hasLargeSize={value.hasLargeSize}
            hasXLargeSize={value.hasXLargeSize}
            productBrand={value.productBrand}
            productCategory={value.productCategory}
            productImageURL0={value.productImageURL0}
          />
        ))
      ) : (
        <div>No products were found.</div>
      )}
    </div>
  );
}
