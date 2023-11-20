"use client";

import { Button } from "@/components/ui/button";
import { createBrowserClient } from "@supabase/ssr";
import { FaGoogle } from "react-icons/fa";

export default function OAuthForm() {
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const LoginWithGoogle = () => {
    supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: `${location.origin}/auth/callback`,
      },
    });
  };

  return (
    <>
      <Button
        type="submit"
        variant="outline"
        className="w-full flex items-center gap-2 my-2"
        onClick={LoginWithGoogle}
      >
        Login with Google
        <FaGoogle />
      </Button>
    </>
  );
}
