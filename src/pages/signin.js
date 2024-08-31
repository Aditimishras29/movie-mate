import React, { useState } from "react";
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
// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function SignIn() {
  const [otpDialogOpen, setOtpDialogOpen] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        {/* Login Tab Content */}
        <TabsContent value="login">
          <Card className="bg-primary text-textColor">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Enter your username or phone number and password to access your account.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="login">Username or Phone Number</Label>
                <Input id="login" placeholder="Username or Phone Number" />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Your password"
                />
              </div>
              <div className="mt-2">
                <a href="#" className="text-secondary underline">
                  Forgot Password?
                </a>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-secondary text-primary">Login</Button>
            </CardFooter>
          </Card>
        </TabsContent>

        {/* Register Tab Content */}
        <TabsContent value="register">
          <Card className="bg-primary text-textColor">
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
                <Label htmlFor="username">Username</Label>
                <Input id="username" placeholder="Choose a username" />
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
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" placeholder="Your phone number" />
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
              <Button
                className="bg-secondary text-primary"
                onClick={() => setOtpDialogOpen(true)}
              >
                Register
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>

      {/* OTP Dialog */}
      {/* <Dialog open={otpDialogOpen} onOpenChange={setOtpDialogOpen}>
        <DialogContent className="bg-primary">
          <DialogHeader>
            <DialogTitle className="text-textColor">Verify OTP</DialogTitle>
          </DialogHeader>
          <div className="space-y-4">
            <Label htmlFor="otp">Enter the 6-digit OTP sent to your phone</Label>
            <Input id="otp" placeholder="123456" />
            <Button
              className="bg-secondary text-primary w-full"
              onClick={() => setOtpDialogOpen(false)}
            >
              Verify
            </Button>
          </div>
        </DialogContent>
      </Dialog> */}
    </div>
  );
}
