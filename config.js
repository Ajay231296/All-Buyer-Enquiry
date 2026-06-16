/* ============================================================
   Supabase connection settings for the Product Enquiry System.

   Replace the two values below with your own project's values:
     Supabase dashboard -> Project Settings -> API
       - Project URL   -> SUPABASE_URL
       - anon public   -> SUPABASE_ANON

   SAFE TO COMMIT: the "anon" key is a public key by design. Your data
   is protected by the Row Level Security rules in the database, not by
   hiding this key.

   NEVER put the "service_role" key or any database password in this
   file — those are secret and must stay only in the Supabase dashboard.
   ============================================================ */
window.SUPABASE_URL  = "YOUR_SUPABASE_URL";       // e.g. https://abcdefgh.supabase.co
window.SUPABASE_ANON = "YOUR_SUPABASE_ANON_KEY";  // the long public anon key
