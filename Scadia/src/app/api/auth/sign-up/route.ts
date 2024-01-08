import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import { validateEmail } from '@/app/services/validation/email';
import { validatePassword } from '@/app/services/validation/password';
import type { NextRequest } from 'next/server';
import type { Database } from '@/app/types/supabase';

export async function POST(req: NextRequest) {
  const reqURL = new URL(req.url);
  const reqDATA = await req.formData();
  const user_email = String(reqDATA.get('email'));
  const user_password = String(reqDATA.get('password'));
  const cookies_store = cookies();

  if (validateEmail(user_email) === 'ok' && validatePassword(user_password) === 'ok') {
    const supabase = createRouteHandlerClient<Database>({ cookies: () => cookies_store });
    const supabase_response = await supabase.auth.signUp({
      email: user_email,
      password: user_password,
      options: {
        emailRedirectTo: `${reqURL.origin}/api/auth/callback`,
      },
    });
    // Success
    if (supabase_response.data.user) {
      return NextResponse.redirect(`${reqURL.origin}/account/register?status=201`, {
        status: 301,
      });
    }

    // User already exists
    return NextResponse.redirect(`${reqURL.origin}/account/register?register=403`, {
      status: 301,
    });
  }
  // Invalid email or password
  return NextResponse.redirect(`${reqURL.origin}/account/register?register=400`, {
    status: 301,
  });
}
