import { Database } from '@/app/types/supabase';
import { ProductType } from '@/app/types/product';
import { ProductSupabaseResponseType } from '@/app/types/productSupabaseResponse';
import { createClient } from '@supabase/supabase-js';

export async function GET(request: Request) {
  // Get arguments
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category') ?? 'all';
  const view = searchParams.get('view') ?? 'all';
  const skip_arg = parseInt(searchParams.get('skip') ?? '0');
  const limit_arg = parseInt(searchParams.get('limit') ?? '0');
  const skip = Number.isNaN(skip_arg) ? 0 : skip_arg;
  const limit = Number.isNaN(limit_arg) ? 0 : limit_arg;

  // Supabase connection
  const supabase_url = process.env.NEXT_PUBLIC_SUPABASE_URL ?? '';
  const supabase_key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? '';
  const supabase = createClient<Database>(supabase_url, supabase_key);

  // Supabase database
  const images = `${supabase_url}/storage/v1/object/public/product/`;
  let product: ProductType[] = [];
  let database: ProductSupabaseResponseType;
  if (category === 'all') {
    console.log(`Fetching all products from index:${skip} to:${skip + limit}`);
    database = await supabase
      .from('product')
      .select('*')
      .range(skip, skip + limit);
  } else {
    if (view === 'all') {
      console.log(`Fetching all products by category:${category} from index:${skip} to:${skip + limit}`);
      database = await supabase
        .from('product')
        .select('*')
        .eq('category', category)
        .range(skip, skip + limit);
    } else {
      console.log(`Fetching all products by category:${category}, type:${view} from index:${skip} to:${skip + limit}`);
      database = await supabase
        .from('product')
        .select('*')
        .eq('category', category)
        .eq('type', view)
        .range(skip, skip + limit);
    }
  }

  if (database.data !== null && database.error === null) {
    database.data.map((value, index) => {
      product.push({
        productID: value.id,
        productName: value.name,
        productDescription: value.description,
        isOnSale: value.is_on_sale,
        productPrice: value.price,
        productSalePrice: value.sale_price,
        productSaleDiscount: value.sale_discount,
        hasSmallSize: value.has_small_size,
        hasMediumSize: value.has_medium_size,
        hasLargeSize: value.has_large_size,
        hasXLargeSize: value.has_xlarge_size,
        productSmallQuantity: value.small_quantity,
        productMediumQuantity: value.medium_quantity,
        productLargeQuantity: value.large_quantity,
        productXLargeQuantity: value.xlarge_quantity,
        productQuantity: value.total_quantity,
        productCategory: value.category,
        productType: value.type,
        productBrand: value.brand,
        productImageURL0: `${images}${value.id}/${value.id}_0.jpg`,
        productImageURL1: `${images}${value.id}/${value.id}_1.jpg`,
        productImageURL2: `${images}${value.id}/${value.id}_2.jpg`,
        productImageURL3: `${images}${value.id}/${value.id}_3.jpg`,
      });
    });
  }
  return Response.json({ data: product });
}
