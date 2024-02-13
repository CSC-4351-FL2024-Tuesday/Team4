"use client";
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import * as React from 'react';

export interface StudentInfoProps {
}

export default class StudentInfo extends React.Component<StudentInfoProps> {
  public render() {
    return (
        <div className='h-screen w-full flex flex-col px-6 my-10'>
        <Button>Download Resume</Button>

        <Separator className='mt-4'/>

        <div className='flex justify-between items-center pt-4'>
            <h1 className='text-2xl font-bold'>Experience</h1>
            <Button>Add</Button>
        </div>
        <div className='mt-4'>
            <h3 className='text-lg font-bold'>Software Engineer Intern</h3>
            <p className='text-gray-500'>Google</p>
            <p className='text-gray-500'>2023 - 2024</p>
            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
        <div className='mt-4'>
            <h3 className='text-lg font-bold'>Software Engineer Intern</h3>
            <p className='text-gray-500'>Google</p>
            <p className='text-gray-500'>2023 - 2024</p>
            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <Separator className='mt-4'/>

        <div className='flex justify-between items-center pt-4'>
            <h1 className='text-2xl font-bold'>Projects</h1>
            <Button>Add</Button>
        </div>
        <div className='mt-4'>
            <h3 className='text-lg font-bold'>Software Engineer Intern</h3>
            <p className='text-gray-500'>Google</p>
            <p className='text-gray-500'>2023 - 2024</p>
            <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>

        <Separator className='mt-4'/>

        <div className='flex justify-between items-center pt-4'>
            <h1 className='text-2xl font-bold'>Education</h1>
            <Button>Add</Button>
        </div>
        <div className='mt-4'>
            <h3 className='text-lg font-bold'>BSc. Computer Science</h3>
            <p className='text-md'>Georgia State University</p>
            <p className='text-md'>2020 - 2024</p>
            <p className='text-md'>3.9/4.0</p>
        </div>

        <Separator className='mt-4'/>

        <div className='flex justify-between items-center pt-4'>
            <h1 className='text-2xl font-bold'>Skills</h1>
            <Button>Add</Button>
        </div>

        <div className='mt-4'>
            <p className='text-lg font-bold'>Programming Languages</p>
            <p className='text-md'>Python, Java, C++, JavaScript, TypeScript</p>
        </div>
    </div>
    );
  }
}
