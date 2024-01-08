'use client';
import React, { useEffect, useState } from 'react';
import ProductTab from '@/app/shared/ProductTab/ProductTab';
import { useSearchParams } from 'next/navigation';
import { ProductType } from '@/app/types/product';
import ProductTabSkeleton from '@/app/shared/ProductTab/ProductTabSkeleton';
import { useFilterStore } from '@/app/stores/Filter';
export default function ProductsList() {
  const store = useFilterStore();
  const [products, setProducts] = useState<ProductType[]>([]);
  const [filteredResults, setFilteredResults] = useState<ProductType[]>([]);
  const [isFetched, setIsFetched] = useState(false);
  const searchParams = useSearchParams();
  const searchCategory = searchParams.get('category') ?? 'all';
  const searchView = searchParams.get('view') ?? 'all';
  const searchSkip = searchParams.get('skip') ?? '0';
  const searchLimit = searchParams.get('limit') ?? '0';
  useEffect(() => {
    async function getProductsQuery() {
      const response = await fetch(
        `/api/getProducts?category=${searchCategory}&view=${searchView}&skip=${searchSkip}&limit=${searchLimit}`,
      );
      const { data }: { data: ProductType[] } = await response.json();
      setProducts(data);
      setIsFetched(true);
    }
    if (!isFetched) getProductsQuery();
  }, [isFetched]);

  useEffect(() => {
    // Filter products by price range
    let filteredProducts = products.filter((product) =>
      product.isOnSale
        ? product.productSalePrice >= store.minPrice && product.productSalePrice <= store.maxPrice
        : product.productPrice >= store.minPrice && product.productPrice <= store.maxPrice,
    );

    // Filter products by size
    let smallProducts: ProductType[] = [];
    let mediumProducts: ProductType[] = [];
    let largeProducts: ProductType[] = [];
    let xlargeProducts: ProductType[] = [];
    if (store.showSmall) smallProducts = filteredProducts.filter((product) => product.hasSmallSize);
    if (store.showMedium) mediumProducts = filteredProducts.filter((product) => product.hasMediumSize);
    if (store.showLarge) largeProducts = filteredProducts.filter((product) => product.hasLargeSize);
    if (store.showXLarge) xlargeProducts = filteredProducts.filter((product) => product.hasXLargeSize);

    // Combine all sizes into a single array without duplicates
    let sizesProducts: ProductType[] = [];
    smallProducts.forEach((element) => {
      sizesProducts.push(element);
    });
    mediumProducts.forEach((element) => {
      if (!sizesProducts.includes(element)) sizesProducts.push(element);
    });
    largeProducts.forEach((element) => {
      if (!sizesProducts.includes(element)) sizesProducts.push(element);
    });
    xlargeProducts.forEach((element) => {
      if (!sizesProducts.includes(element)) sizesProducts.push(element);
    });

    // Filter products by brand
    let adidasProducts: ProductType[] = [];
    let columbiaProducts: ProductType[] = [];
    let garminProducts: ProductType[] = [];
    let jackwolfskinProducts: ProductType[] = [];
    let pumaProducts: ProductType[] = [];
    let thenorthfaceProducts: ProductType[] = [];
    if (store.showAdidas) adidasProducts = sizesProducts.filter((product) => product.productBrand === 'Adidas');
    if (store.showColumbia) columbiaProducts = sizesProducts.filter((product) => product.productBrand === 'Columbia');
    if (store.showGarmin) garminProducts = sizesProducts.filter((product) => product.productBrand === 'Garmin');
    if (store.showJackWolfskin)
      jackwolfskinProducts = sizesProducts.filter((product) => product.productBrand === 'Jack Wolfskin');
    if (store.showPuma) pumaProducts = sizesProducts.filter((product) => product.productBrand === 'Puma');
    if (store.showTheNorthFace)
      thenorthfaceProducts = sizesProducts.filter((product) => product.productBrand === 'The North Face');

    // Combine all brands into a single array without duplicates
    let brandsProducts: ProductType[] = [];
    adidasProducts.forEach((element) => {
      brandsProducts.push(element);
    });
    columbiaProducts.forEach((element) => {
      if (!brandsProducts.includes(element)) brandsProducts.push(element);
    });
    garminProducts.forEach((element) => {
      if (!brandsProducts.includes(element)) brandsProducts.push(element);
    });
    jackwolfskinProducts.forEach((element) => {
      if (!brandsProducts.includes(element)) brandsProducts.push(element);
    });
    pumaProducts.forEach((element) => {
      if (!brandsProducts.includes(element)) brandsProducts.push(element);
    });
    thenorthfaceProducts.forEach((element) => {
      if (!brandsProducts.includes(element)) brandsProducts.push(element);
    });

    // Set results
    setFilteredResults(brandsProducts);
  }, [
    store.minPrice,
    store.maxPrice,
    store.showSmall,
    store.showMedium,
    store.showLarge,
    store.showXLarge,
    store.showAdidas,
    store.showColumbia,
    store.showGarmin,
    store.showJackWolfskin,
    store.showPuma,
    store.showTheNorthFace,
    products,
  ]);
  return (
    <div>
      {isFetched === false ? (
        <div>
          <ProductTabSkeleton />
          <ProductTabSkeleton />
          <ProductTabSkeleton />
        </div>
      ) : products.length !== 0 ? (
        filteredResults.map((value, index) => (
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
        <div className='p-5 font-semibold'>No products were found.</div>
      )}
    </div>
  );
}
