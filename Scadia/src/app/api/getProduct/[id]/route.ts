import { createClient } from '@supabase/supabase-js';
import { Database } from '@/app/types/supabase';
import { ProductType } from '@/app/types/product';
import { ProductSupabaseResponseType } from '@/app/types/productSupabaseResponse';

export async function GET(request: Request) {
  // Get arguments
  const arg = parseInt(request.url.slice(request.url.lastIndexOf('/') + 1));
  const idNumber = Number.isNaN(arg) ? 0 : arg;
  if (idNumber === 0) {
    return Response.json({ data: undefined });
  }

  // Supabase connection
  const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  const supabase_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';
  const supabase = createClient<Database>(supabase_url, supabase_key);

  // Supabase database
  const database: ProductSupabaseResponseType = await supabase.from('product').select('*').eq('id', idNumber);
  const images = `${supabase_url}/storage/v1/object/public/product/${idNumber}`;

  // Result
  let product: ProductType | undefined = undefined;
  if (database.data !== null && database.error === null) {
    product = {
      productID: database.data[0].id,
      productName: database.data[0].name,
      productDescription: database.data[0].description,
      isOnSale: database.data[0].is_on_sale,
      productPrice: database.data[0].price,
      productSalePrice: database.data[0].sale_price,
      productSaleDiscount: database.data[0].sale_discount,
      hasSmallSize: database.data[0].has_small_size,
      hasMediumSize: database.data[0].has_medium_size,
      hasLargeSize: database.data[0].has_large_size,
      hasXLargeSize: database.data[0].has_xlarge_size,
      productSmallQuantity: database.data[0].small_quantity,
      productMediumQuantity: database.data[0].medium_quantity,
      productLargeQuantity: database.data[0].large_quantity,
      productXLargeQuantity: database.data[0].xlarge_quantity,
      productQuantity: database.data[0].total_quantity,
      productCategory: database.data[0].category,
      productType: database.data[0].type,
      productBrand: database.data[0].brand,
      productImageURL0: `${images}/${idNumber}_0.jpg`,
      productImageURL1: `${images}/${idNumber}_1.jpg`,
      productImageURL2: `${images}/${idNumber}_2.jpg`,
      productImageURL3: `${images}/${idNumber}_3.jpg`,
    };
  }

  return Response.json({ data: product });
}
