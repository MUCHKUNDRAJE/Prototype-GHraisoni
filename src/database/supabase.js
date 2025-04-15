import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPA_API_KEY;
const supabaseAnonKey = import.meta.env.VITE_SUPA_PRO_KEY;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);