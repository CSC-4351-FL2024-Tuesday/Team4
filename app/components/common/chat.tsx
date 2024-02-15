"use client";
import { Card } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import * as React from 'react';

export interface  ChatProps {
}

export default class Chat extends React.Component< ChatProps> {
  public render() {
    return (
      <div className='w-full h-screen'>
        <div className='flex flex-col justify-between items-center h-full'>
            <Card className='flex w-full h-20 transition-all hover:bg-accent border gap-2 p-3'>

            </Card>
            <ScrollArea className='flex-grow h-max w-max'>

            </ScrollArea>
            <Card className='flex w-full h-20 transition-all hover:bg-accent border gap-2 p-3'>
                
            </Card>
        </div>
      </div>
    );
  }
}
