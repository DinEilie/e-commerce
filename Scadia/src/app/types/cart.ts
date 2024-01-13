import { StaticImageData } from "next/image";
import { ProductSizeType } from "./productSize";

export type CartType = {
  productID: number; // Product ID number
  productName: string; // Product name
  productDescription: string; // Product description
  isOnSale: boolean; // Is the product currently on sale?
  productPrice: number; // Product original price
  productSalePrice: number; // Product price after discount
  productSaleDiscount: number; // Product discount in percentages
  productSize: ProductSizeType // Product size
  productQuantity: number; // Total amount of the product
  isOutOfStock: boolean;
  productBrand: string; // Product brand
  productImageURL0: StaticImageData | string; // Product image URL
}