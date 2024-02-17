'use client';
import * as React from 'react';
import Header from '../../components/common/header';
import { Button } from '@/components/ui/button';
import { IoIosSchool } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { IoIosLink } from "react-icons/io";
import { Separator } from '@/components/ui/separator';
import StudentInfo from '../../components/common/student_info';
export interface StudentProfileProps {
}

export default class StudentProfile extends React.Component<StudentProfileProps> {
  public render() {
    return (
      <div className='flex flex-col h-screen w-screen overflow-x-hidden'>
            <div>
                <Header/>
            </div>
            <div className='flex-grow flex mt-8 w-5/6 mx-auto justify-center'>
                <div className='flex flex-col'>
                    <div className='flex justify-center items-center h-auto w-auto max-h-[260px] max-w-[260px] '>
                        <img src='https://via.placeholder.com/250' alt='profile' className='rounded-full'/>
                    </div>
                    <div className='mt-4'>
                        <h1 className='text-2xl font-bold text-center'>John Doe</h1>
                        <h3 className='text-lg text-center text-gray-500'>Student</h3>
                        <Button className='mt-4 w-full'>Edit Profile</Button>
                        <p className='mt-4 text-center break-words max-w-[230px]'>Bio. Lorem Ipsum blah blah</p>
                    </div>
                    <div className='mt-6 flex'>
                        <IoIosSchool className='text-gray-500 mt-1'/>
                        <div className='flex flex-col ml-2'>
                            <h3 className='text-md'>Georgia State University</h3>
                            <p className='text-gray-500'>BSc. Computer Science</p>
                            <p className='text-gray-500'>2020 - 2024</p>
                        </div>
                    </div>
                    <div className='mt-3'>
                        <div className='flex'>
                            <IoLocationSharp className='text-gray-500 mt-1'/>
                            <p className='ml-2'>Atlanta, Georgia</p>
                        </div>
                        <div className='flex'>
                            <MdEmail className='text-gray-500 mt-1'/>
                            <p className='ml-2'>email@email.com</p>
                        </div>
                        <div className='flex'>
                            <IoIosLink className='text-gray-500 mt-1'/>
                            <p className='ml-2'>www.website.com</p>
                        </div>
                    </div>
                </div>
                <div className='flex-grow'>
                    <StudentInfo/>
                </div>
            </div>
        </div>
    );
  }
}
