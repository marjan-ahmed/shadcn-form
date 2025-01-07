"use client";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "./ui/form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "./ui/button";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "./ui/input";

// Separate Schemas for Register and Sign In
const registerSchema = z.object({
  firstName: z.string().min(3).max(20),
  lastName: z.string().min(3).max(20),
  email: z.string().email().min(8).max(20),
  password: z.string().min(8).max(12),
});

const signInSchema = z.object({
  email: z.string().email().min(8).max(20),
  password: z.string().min(8).max(12),
});

type RegisterType = z.infer<typeof registerSchema>;
type SignInType = z.infer<typeof signInSchema>;

function onRegisterSubmit(values: RegisterType) {
  console.log("Register:", values);
}

function onSignInSubmit(values: SignInType) {
  console.log("Sign In:", values);
}

function AuthForms() {
  const registerForm = useForm<RegisterType>({ resolver: zodResolver(registerSchema) });
  const signInForm = useForm<SignInType>({ resolver: zodResolver(signInSchema) });

  return (
    <div className="flex justify-center items-center w-[600px] p-4">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6 md:p-8">
        <Tabs defaultValue="register" className="w-full">
          <TabsList className="flex justify-around mb-6 font-[poppins]">
            <TabsTrigger value="register" className="w-1/2 text-center">Register</TabsTrigger>
            <TabsTrigger value="signin" className="w-1/2 text-center">Sign In</TabsTrigger>
          </TabsList>

          {/* Register Tab */}
          <TabsContent value="register" className="w-full">
            <h1 className="text-xl md:text-2xl font-semibold mb-6 font-[poppins]">Register your account</h1>
            <Form {...registerForm}>
              <form onSubmit={registerForm.handleSubmit(onRegisterSubmit)} className="space-y-4">
                <FormField
                  control={registerForm.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-[poppins]">First Name</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="John" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="lastName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-[poppins]">Last Name</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="Doe" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-[poppins]">Email</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="johndoe@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={registerForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-[poppins]">Password</FormLabel>
                      <FormControl>
                        <Input className="w-full" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full font-[poppins]">Register</Button>
              </form>
            </Form>
          </TabsContent>

          {/* Sign In Tab */}
          <TabsContent value="signin" className="w-full">
            <h1 className="text-xl md:text-2xl font-bold mb-6 font-[poppins]">Sign In</h1>
            <Form {...signInForm}>
              <form onSubmit={signInForm.handleSubmit(onSignInSubmit)} className="space-y-4">
                <FormField
                  control={signInForm.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-[poppins]">Email</FormLabel>
                      <FormControl>
                        <Input className="w-full" placeholder="johndoe@gmail.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={signInForm.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="font-[poppins]">Password</FormLabel>
                      <FormControl>
                        <Input className="w-full" type="password" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full font-[poppins]">Sign In</Button>
              </form>
            </Form>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

export default AuthForms;
