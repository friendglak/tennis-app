"use server";

import { createSupbaseServerClientReadOnly } from "@/lib/supabase/server";

export async function readUserSession() {
  const supabase = await createSupbaseServerClientReadOnly();

  return supabase.auth.getSession();
}
