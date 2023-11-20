"use server";

import { createSupbaseServerClient } from "@/lib/supabase/server";
import { Provider } from "@supabase/supabase-js";
import { redirect } from "next/navigation";

export async function signUpWithEmailAndPassword(data: {
  email: string;
  password: string;
  confirm: string;
}) {
  const supabase = await createSupbaseServerClient();

  const result = await supabase.auth.signUp(data);
  return JSON.stringify(result);
}

export async function loginWithEmailAndPassword(data: {
  email: string;
  password: string;
}) {
  const supabase = await createSupbaseServerClient();

  const result = await supabase.auth.signInWithPassword(data);
  return JSON.stringify(result);
}

export async function loginWithOuthProvider(data: { provider: Provider }) {
  const supabase = await createSupbaseServerClient();
  const result = await supabase.auth.signInWithOAuth(data);
  return JSON.stringify(result);
}

export async function logout() {
  const supabase = await createSupbaseServerClient();
  await supabase.auth.signOut();
  redirect("/auth");
}
