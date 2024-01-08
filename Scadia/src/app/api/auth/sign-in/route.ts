import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import type { Database } from '@/app/types/supabase';

export async function POST(req: NextRequest) {
  const reqURL = new URL(req.url);
  const reqDATA = await req.formData();
  const user_email = String(reqDATA.get('email'));
  const user_password = String(reqDATA.get('password'));
  const cookies_store = cookies();
  const supabase = createRouteHandlerClient<Database>({ cookies: () => cookies_store });

  const supabase_response = await supabase.auth.signInWithPassword({
    email: user_email,
    password: user_password,
  });
  // Success
  if (supabase_response.data.user) {
    return NextResponse.redirect(reqURL.origin, {
      status: 301,
    });
  }

  // Invalid email or password
  return NextResponse.redirect(`${reqURL.origin}/account/auth?status=400`, {
    status: 301,
  });
}
