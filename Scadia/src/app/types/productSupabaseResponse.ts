import { PostgrestError } from '@supabase/supabase-js';
import { ProductSupabaseType } from './productSupabase';

export type ProductSupabaseResponseType = {
  data: ProductSupabaseType[] | null;
  error: PostgrestError | null;
};
