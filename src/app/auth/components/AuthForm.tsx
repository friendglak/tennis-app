"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SignInForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function AuthForm() {
  return (
    <div className="w-1/4 space-y-5">
      <Tabs defaultValue="signin" className="w-full">
        <TabsList className="grid w-[100%] grid-cols-2">
          <TabsTrigger value="signin">SignIn</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>
        <TabsContent value="signin">
          <SignInForm />
        </TabsContent>
        <TabsContent value="register">
          <RegisterForm />
        </TabsContent>
      </Tabs>
    </div>
  );
}
