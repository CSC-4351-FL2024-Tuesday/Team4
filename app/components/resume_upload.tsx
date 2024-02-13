"use client";
import * as React from 'react';
import DragAndDrop from '../utils/drag_and_drop';
import Header from './common/header';

export interface ResumeUploadProps {
}

export default class ResumeUpload extends React.Component<ResumeUploadProps> {
  public render() {
    return (
    <div className='flex flex-col h-screen w-screen'>
        <div>
            <Header />
        </div>    
        <div className='w-screen flex-grow flex justify-center items-center'>
            <DragAndDrop />
        </div>
    </div>
    );
  }
}
