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

const StudentLoginPage: React.FC = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCPassword] = useState('');
    const [name, setName] = useState('');
    const [isMismatched, setIsMismatched] = useState(false);

    const router = useRouter();
    const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL;
    const handleLoginClick = async () => {
        try {
            const response = await fetch(`${backendUrl}/api/signin/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email: username,
                    Password: password,
                }),
                credentials: 'include',
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                router.push('/student');
            } else {
                alert('Login failed. Please check your credentials and try again.');
            }
        } catch (error) {
            console.error('There was an error logging in:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    const handleSignupClick = async () => {
        try {
            const response = await fetch(`${backendUrl}/api/signup/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    name: name,
                    email: username,
                    Password: password,
                }),
                credentials: 'include',
            });

            if (response.ok) {
                const data = await response.json();
                console.log(data);
                router.push('/student/signup');
            } else {
                alert('Signup failed. Please try again.');
            }

        } catch (error) {
            console.error('There was an error signing up:', error);
            alert('An error occurred. Please try again later.');
        }
    };

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    };

    const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setName(event.target.value);
    }

    const handleCPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCPassword(event.target.value);
        if (password !== event.target.value) {
            setIsMismatched(true);
        } else {
            setIsMismatched(false);
        }
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        handleLoginClick();
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
                        <CardTitle>Student Login</CardTitle>
                        <CardDescription>
                        Login to your account to access your dashboard.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                        <Label htmlFor="username">Username</Label>
                        <Input id="username" value={username} onChange={handleUsernameChange}/>
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type='password' value={password} onChange={handlePasswordChange}/>
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
                        <CardTitle>Student Sign Up</CardTitle>
                        <CardDescription>
                            Create a new account to start your journey.
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <div className="space-y-1">
                        <Label htmlFor="name">Full Name</Label>
                        <Input id="name" value={name} onChange={handleNameChange}/>
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" value={username} onChange={handleUsernameChange}/>
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" value={password} onChange={handlePasswordChange}/>
                        </div>
                        <div className="space-y-1">
                        <Label htmlFor="confirmPassword">Confirm Password</Label>
                        <Input id="confirmPassword" type="password" value={cpassword} onChange={handleCPasswordChange} />
                        </div>
                        {isMismatched && (
                            <div style={{ color: 'red' }}>
                                Passwords do not match.
                            </div>
                        )}
                    </CardContent>
                    <CardFooter>
                        <Button onClick={handleSignupClick} disabled={isMismatched}>Sign Up</Button>
                    </CardFooter>
                    </Card>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default StudentLoginPage;