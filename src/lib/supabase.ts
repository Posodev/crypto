import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xcgdmwuzckeberfpsaos.supabase.co';
const supabaseAnonKey = 'sb_publishable_jqiA8qCyyDe9H2EMudrVlg_yZNJ8FEH';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

