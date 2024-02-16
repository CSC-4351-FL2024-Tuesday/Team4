"use client";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import * as React from 'react';
import { Contacts } from './contacts';
import { results } from '@/app/utils/data';
import {Chat} from './chat';

export interface  MessagesProps {
}

export default class Messages extends React.Component< MessagesProps> {
  public render() {
    return (
        <div className='h-screen'>
            <ResizablePanelGroup direction='horizontal'>
                <ResizablePanel>
                    <Contacts items={results}/>
                </ResizablePanel>
                <ResizableHandle/>
                <ResizablePanel>
                    <Chat/>
                </ResizablePanel>
            </ResizablePanelGroup>
        </div>
    );
  }
}
