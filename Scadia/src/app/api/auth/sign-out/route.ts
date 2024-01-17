import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { Database } from '@/app/types/supabase';

export async function GET() {
  const cookies_store = cookies();
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookies_store });
  const { error } = await supabase.auth.signOut();
  return NextResponse.json({ error: error });
}
