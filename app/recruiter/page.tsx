"use client";
import * as React from 'react';
import RecruiterDashboard from './recruiter_dashboard';
import Header from '../components/common/header';

export interface IRecruiterPageProps {
}

export default class RecruiterPage extends React.Component<IRecruiterPageProps> {
  public render() {
    return (
        <div className='h-screen w-screen flex flex-col'>
            <Header/>
            <div className='flex-grow h-full w-full flex items-center justify-center'>
                <RecruiterDashboard/>
            </div>
        </div>
    );
  }
}
