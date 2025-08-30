import { createClient } from '@supabase/supabase-js'

// ✅ use actual values for now
const supabaseUrl = "https://qlqxjbiynnnrjcrqufch.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFscXhqYml5bm5ucmpjcnF1ZmNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY0NDMwNTksImV4cCI6MjA3MjAxOTA1OX0.nOMn4N2uwDibJ4s5e6hBygruPruEMILava0zmBobAoI"

export const supabase = createClient(supabaseUrl, supabaseKey)
