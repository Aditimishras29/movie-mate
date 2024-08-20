import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function SignIn() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
          <TabsTrigger value="forgot-password">Forgot Password</TabsTrigger>
        </TabsList>

        {/* Login Tab Content */}
        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your credentials to access your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@domain.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Your password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Register Tab Content */}
        <TabsContent value="register">
          <Card>
            <CardHeader>
              <CardTitle>Register</CardTitle>
              <CardDescription>
                Create a new account by filling in the details below.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input id="name" placeholder="Your full name" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@domain.com"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Create a password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>Create account</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Register Tab Content */}
        <TabsContent value="forgot-password">
          <Card>
            <CardHeader>
              <CardTitle>Forgot Password?</CardTitle>
              <CardDescription>
                Enter your email address to receive a password reset link.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
                <div className="space-y-1">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="example@domain.com"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button>
                Send password reset link
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
