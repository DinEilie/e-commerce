import { Database } from '@/app/types/supabase';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookies_store = cookies();
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookies_store });
  const user = await supabase.auth.getUser();
  return NextResponse.json({ userData: user.data.user });
}
