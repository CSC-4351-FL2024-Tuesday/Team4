"use client";
import * as React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import Rhetoricals from './rhetoricals_scrolling';
import Header from './header';
import { IoIosArrowDown } from "react-icons/io";
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

export interface  LandingProps {
}

function Landing(props: LandingProps) {
    const router = useRouter();

    const handleLoginClick = () => {
      router.push('/login');
    };

    return (
      <div className='h-full w-full flex flex-col items-center justify-center relative'>
        <div className='flex flex-col items-center justify-center w-screen h-screen'>
            <p className='font-heading text-2xl'>Tired of not finding the right career match?</p>
            <p className="font-heading text-lg">Scroll down to find the solution</p>
            <IoIosArrowDown className='text-2xl'/>
        </div>
        <div className='sticky top-0 z-10'>
            <Header>
              <Button onClick={handleLoginClick}>Login/SignUp</Button>
            </Header>
        </div>
        <Rhetoricals/>
      </div>
    );

}

export default Landing;