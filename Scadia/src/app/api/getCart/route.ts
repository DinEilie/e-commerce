import { SupabaseClient, createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { Database } from '@/app/types/supabase';
import type { CartSupabaseResponseType } from '@/app/types/cartSupabaseResponse';
import { CartType } from '@/app/types/cart';
import { ProductSupabaseResponseType } from '@/app/types/productSupabaseResponse';
import { boolean } from 'zod';
import { ProductSizeType } from '@/app/types/productSize';

// Fetch the product information accordingly
async function getProductByID(id: number, size: ProductSizeType, quantity: number, supabase: SupabaseClient) {
  const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  const images = `${supabase_url}/storage/v1/object/public/product/${id}`;
  const product: ProductSupabaseResponseType = await supabase.from('product').select('*').eq('id', id);
  let result: CartType | undefined;
  if (product.data !== null && product.error === null) {
    let isOutOfStock = true;
    switch (size) {
      case 'none':
        if (product.data[0].total_quantity > 0) isOutOfStock = false;
        break;
      case 'S':
        if (product.data[0].small_quantity > 0) isOutOfStock = false;
        break;
      case 'M':
        if (product.data[0].medium_quantity > 0) isOutOfStock = false;
        break;
      case 'L':
        if (product.data[0].large_quantity > 0) isOutOfStock = false;
        break;
      case 'XL':
        if (product.data[0].xlarge_quantity > 0) isOutOfStock = false;
        break;
    }
    result = {
      productID: product.data[0].id,
      productName: product.data[0].name,
      productDescription: product.data[0].description,
      productBrand: product.data[0].brand,
      productPrice: product.data[0].price,
      productSalePrice: product.data[0].sale_price,
      productSaleDiscount: product.data[0].sale_discount,
      isOnSale: product.data[0].is_on_sale,
      productSize: size,
      productQuantity: quantity,
      productImageURL0: `${images}/${id}_0.jpg`,
      isOutOfStock: isOutOfStock,
    };
  }
  return result;
}

export async function GET() {
  const cookies_store = cookies();
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookies_store });

  const databaseCart: CartSupabaseResponseType = await supabase.from('cart').select('*');
  if (databaseCart.data !== null && databaseCart.error === null) {
    let databaseResponse: CartType[] = [];
    for (let index = 0; index < databaseCart.data.length; index++) {
      let product_size: ProductSizeType = 'none';
      if (databaseCart.data[index].is_xlarge) product_size = 'XL';
      else if (databaseCart.data[index].is_large) product_size = 'L';
      else if (databaseCart.data[index].is_medium) product_size = 'M';
      else if (databaseCart.data[index].is_small) product_size = 'S';
      const product_id = databaseCart.data[index].product ?? 0;
      const product_quantity = databaseCart.data[index].quantity;
      const element = await getProductByID(product_id, product_size, product_quantity, supabase);
      if (element !== undefined) databaseResponse.push(element);
    }
    if (databaseResponse.length > 0) return NextResponse.json({ data: databaseResponse });
  }
  return NextResponse.json({ data: undefined });
}
