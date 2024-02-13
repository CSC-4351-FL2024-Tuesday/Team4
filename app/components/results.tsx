"use client";
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import * as React from 'react';
import { ResultsList } from '../utils/result_list';
import { results } from '../utils/data';
import StudentInfo from './common/student_info';
import { ScrollArea } from '@/components/ui/scroll-area';
import FiltersSidebar from './layout/filters_sidebar';

export interface ResultsProps {
}

export default class Results extends React.Component<ResultsProps> {
  public render() {
    return (
    <div className='h-screen'>
      <ResizablePanelGroup direction='horizontal'>
      <ResizablePanel defaultSize={18}>
            <FiltersSidebar/>
        </ResizablePanel>
        <ResizableHandle/>
        <ResizablePanel>
            <ResultsList items={results}/>
        </ResizablePanel>
        <ResizableHandle/>
        <ResizablePanel>
            <ScrollArea className='h-screen pb-10'>
            <StudentInfo/>
            </ScrollArea>
        </ResizablePanel>
      </ResizablePanelGroup>
      </div>
    );
  }
}
