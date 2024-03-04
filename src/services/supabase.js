import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://jhuovcvuweaijuszdoow.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpodW92Y3Z1d2VhaWp1c3pkb293Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg1Mzc5NzMsImV4cCI6MjAyNDExMzk3M30.m51dn5RntAlzST-27aAmeZae3v4qVaYEqIYZGm5RvZ0";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
