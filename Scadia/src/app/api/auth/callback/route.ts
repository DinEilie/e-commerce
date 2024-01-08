import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { Database } from '@/app/types/supabase';

export async function GET(req: NextRequest) {
  const reqURL = new URL(req.url);
  const token = reqURL.searchParams.get('code');
  if (token) {
    const cookies_store = cookies();
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookies_store });
    await supabase.auth.exchangeCodeForSession(token);
  }

  return NextResponse.redirect(reqURL.origin);
}
