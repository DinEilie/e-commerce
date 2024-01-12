import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { Database } from '@/app/types/supabase';
import type { CartSupabaseResponseType } from '@/app/types/cartSupabaseResponse';

export async function GET() {
  const cookies_store = cookies();
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookies_store });

  const database: CartSupabaseResponseType = await supabase.from('cart').select('*');
  if (database.data !== null && database.error === null) {
    return NextResponse.json({ data: database.data });
  }
  return NextResponse.json({ data: undefined });
}
