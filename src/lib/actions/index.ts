"use server";

import { createSupabaseServerClientReadOnly } from "@/lib/supabase/server";

export async function readUserSession() {
  const supabase = await createSupabaseServerClientReadOnly();

  return supabase.auth.getSession();
}
