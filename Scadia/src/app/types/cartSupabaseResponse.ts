import { PostgrestError } from '@supabase/supabase-js';
import { CartSupabaseType } from './cartSupabase';

export type CartSupabaseResponseType = {
  data: CartSupabaseType[] | null;
  error: PostgrestError | null;
};
