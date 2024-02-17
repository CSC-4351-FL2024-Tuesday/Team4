"use client";
import { Button } from '@/components/ui/button';
import * as React from 'react';
import Header from '../components/common/header';
import StudentLoginPage from './student_login';
import RecruiterLoginPage from './recruiter_login';

export interface ILoginProps {
}

function Login(props: ILoginProps) {
    const [loginType, setLoginType] = React.useState('');

    console.log('loginType', loginType);

    const handleStudentClick = () => setLoginType('student');
    const handleRecruiterClick = () => setLoginType('recruiter');

    let loginComponent = null;

    switch (loginType) {
        case 'student':
            loginComponent = <StudentLoginPage />;
            break;
        case 'recruiter':
            loginComponent = <RecruiterLoginPage />;
            break;
        default:
            loginComponent = (
                <div className='flex-grow h-full w-full flex justify-center items-center gap-20'>
                    <Button onClick={handleStudentClick}>I am a Student</Button>
                    <Button onClick={handleRecruiterClick}>I am a Recruiter</Button>
                </div>
            );
    }

    return (
      <div className='h-screen w-full flex flex-col'>
        <Header />
        {loginType === '' ?
            (<div className='flex-grow h-full w-full flex justify-center items-center gap-20'>
                <Button onClick={handleStudentClick} >I am a Student</Button>
                <Button onClick={handleRecruiterClick} >I am a Recruiter</Button>
            </div>)
            : loginType === 'student' ?(
                <div className='flex-grow h-full w-full flex items-center justify-center'>
                    <StudentLoginPage />
                </div>
            ) : (
                <div className='flex-grow h-full w-full flex items-center justify-center'>
                    <RecruiterLoginPage />
                </div>
            )
        }
      </div>
    );
}
export default Login;
