"use client";
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import * as React from 'react';
import { IoIosChatboxes } from 'react-icons/io';
import { SiGooglemeet } from 'react-icons/si';
import { IoIosSearch } from "react-icons/io";
import { MdInsights } from 'react-icons/md';

export interface RecruiterDashboardProps {
}

export default class RecruiterDashboard extends React.Component<RecruiterDashboardProps> {
    public render() {
        return (
          <div className='w-screen h-screen flex items-center justify-center'>
            <div className='flex flex-col'>
                <div className='flex gap-5 pb-5'>
                    <button className=''>
                        <Card className='items-center gap-2 rounded-lg border p-3 text-md transition-all hover:bg-accent py-10 px-10'>
                            <CardContent>
                                <IoIosChatboxes size={48} />
                            </CardContent>
                            <CardTitle>Messages</CardTitle>
                        </Card>
                    </button>
                    <button>
                        <Card className='items-center gap-2 rounded-lg border p-3 text-md transition-all hover:bg-accent py-10 px-10'>
                            <CardContent>
                                <SiGooglemeet size={48} />
                            </CardContent>
                           <CardTitle className=''>Interviews</CardTitle>
                        </Card>
                    </button>
                </div>
                <div className='flex gap-5'>
                    <button>
                        <Card className='items-center gap-2 rounded-lg border p-3 text-md transition-all hover:bg-accent py-10 px-10'>
                            <CardContent>
                                <IoIosSearch size={48} />
                            </CardContent>
                            <CardTitle>Search <br></br> Candidates</CardTitle>
                        </Card>
                    </button>
                    <button>
                        <Card className='items-center gap-2 rounded-lg border p-3 text-md transition-all hover:bg-accent py-10 px-10'>
                            <CardContent>
                                <MdInsights size={48} />   
                            </CardContent>
                            <CardTitle>Insights</CardTitle>
                        </Card>
                    </button>
                </div>
            </div>
          </div>
        );
      }
    }
    