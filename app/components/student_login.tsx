"use client";
import React, { useState } from 'react';
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Header from './header';

const StudentLoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // Perform login logic here
    };

    return (
    <div className='flex flex-col h-screen w-screen'>
        <div>
            <Header />
        </div>
        <div className='flex-grow flex justify-center items-center'>
            <Tabs defaultValue="login" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Card>
                    <CardHeader>
                        <CardTitle>Student Login</CardTitle>
                        <CardDescription>
                        Login to your account to access your dashboard.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username"/>
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type='password' />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Login</Button>
                    </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="signup">
                    <Card>
                    <CardHeader>
                        <CardTitle>Student Sign Up</CardTitle>
                        <CardDescription>
                            Create a new account to start your journey.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email"/>
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" />
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input id="confirmPassword" type="password" />
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button>Sign Up</Button>
                    </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    </div>
    );
};

export default StudentLoginPage;