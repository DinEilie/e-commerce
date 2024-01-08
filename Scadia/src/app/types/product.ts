import { StaticImageData } from 'next/image';

export type ProductType = {
  productID: number; // Product ID number
  productName: string; // Product name
  productDescription: string; // Product description
  isOnSale: boolean; // Is the product currently on sale?
  productPrice: number; // Product original price
  productSalePrice: number; // Product price after discount
  productSaleDiscount: number; // Product discount in percentages
  hasSmallSize: boolean; // Is the product comes in small size?
  hasMediumSize: boolean; // Is the product comes in medium size?
  hasLargeSize: boolean; // Is the product comes in large size?
  hasXLargeSize: boolean; // Is the product comes in extra-large size?
  productSmallQuantity: number; // Quantity of the small version of the product
  productMediumQuantity: number; // Quantity of the medium version of the product
  productLargeQuantity: number; // Quantity of the large version of the product
  productXLargeQuantity: number; // Quantity of the extra-large version of the product
  productQuantity: number; // Total amount of all versions of the product
  productCategory: string; // Product category
  productType: string;
  productBrand: string; // Product brand
  productImageURL0: StaticImageData | string; // Product image URL
  productImageURL1: StaticImageData | string;
  productImageURL2: StaticImageData | string;
  productImageURL3: StaticImageData | string;
};
