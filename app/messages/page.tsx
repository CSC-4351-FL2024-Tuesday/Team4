"use client";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import * as React from 'react';
import { Contacts } from './contacts';
import { results } from '@/app/utils/data';
import {Chat} from './chat';
import Header from '../components/common/header';
import { Separator } from '@/components/ui/separator';

export interface  MessagesProps {
}

export default class Messages extends React.Component< MessagesProps> {
  public render() {
    return (
        <div className='h-screen flex flex-col'>
            <div>
                <Header/>
            </div>
            <Separator/>
            <div className='flex-grow'>
                <ResizablePanelGroup direction='horizontal'>
                    <ResizablePanel>
                        <Contacts items={results}/>
                    </ResizablePanel>
                    <ResizableHandle withHandle/>
                    <ResizablePanel>
                        <Chat/>
                    </ResizablePanel>
                </ResizablePanelGroup>
            </div>
        </div>
    );
  }
}
