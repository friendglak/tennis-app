import React from "react";
import AuthForm from "./components/AuthForm";
import { readUserSession } from "@/lib/actions/index";
import { redirect } from "next/navigation";

export default async function page() {
  const { data: userSession } = await readUserSession();

  if (userSession.session) {
    return redirect("/dashboard");
  }
  return (
    <div className="flex gap-y-10 items-center justify-center h-screen flex-col">
      <h1 className="text-center font-bold text-2xl">Tennis League 🎾</h1>
      <AuthForm />
    </div>
  );
}
