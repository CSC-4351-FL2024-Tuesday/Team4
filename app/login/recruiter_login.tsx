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
import Header from '../components/common/header';
import { useRouter } from 'next/navigation';

const RecruiterLoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const router = useRouter();

    const handleLoginClick = () => {
      router.push('/recruiter');
    };

    const handleSignupClick = () => {
        router.push('/recruiter/registeration');
    };

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
        <div className='h-full w-full flex justify-center items-center'>
            <Tabs defaultValue="login" className="w-[400px]">
                <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="login">Login</TabsTrigger>
                    <TabsTrigger value="signup">Sign Up</TabsTrigger>
                </TabsList>
                <TabsContent value="login">
                    <Card>
                    <CardHeader>
                        <CardTitle>Recruiter Login</CardTitle>
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
                        <Button onClick={handleLoginClick}>Login</Button>
                    </CardFooter>
                    </Card>
                </TabsContent>
                <TabsContent value="signup">
                    <Card>
                    <CardHeader>
                        <CardTitle>Recruiter Sign Up</CardTitle>
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
                        <Button onClick={handleSignupClick}>Sign Up</Button>
                    </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default RecruiterLoginPage;