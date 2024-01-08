import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { Database } from '@/app/types/supabase';

export async function POST(req: NextRequest) {
  const reqURL = new URL(req.url);
  const cookies_store = cookies();
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookies_store });

  await supabase.auth.signOut();

  return NextResponse.redirect(reqURL.origin, {
    status: 301,
  });
}
