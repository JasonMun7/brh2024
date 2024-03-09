
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.REACT_SUPABASE_URL, 
  process.env.REACT_SUPABASE_ANON_key
)