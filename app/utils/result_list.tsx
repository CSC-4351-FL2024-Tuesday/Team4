"use client";
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { cn } from '@/lib/utils';
import { it } from 'node:test';
import * as React from 'react';
import { Results } from './data';
import { useResult } from '@/lib/use-results';

export interface ResultListProps {
    items: Results[];
}

export function ResultsList(props: ResultListProps) {
    const [result, setResult] = useResult();
    return (
        <ScrollArea className='h-screen pt-10'>
            <div className='flex flex-col gap-2 p-4 pt-0'>
                {props.items.map((item) => (
                    <button
                        key={item.id}
                        className={cn("flex flex-col items-start gap-2 rounded-lg border p-3 text-left text-sm transition-all hover:bg-accent",
                            result.selected === item.id && "bg-muted"
                        )}
                        onClick={() => setResult({ ...result, selected: item.id })}
                    >
                        <div className='flex w-full flex-col gap-1'>
                            <div className='flex items-center'>
                                <div className='flex items-center gap-2'>
                                    <div className='font-semibold'>{item.name}</div>
                                    {item.new && (
                                        <span className='flex h-2 w-2 rounded-full bg-blue-600'/>
                                    )}
                                </div>
                            </div>
                            <div className='text-xs font-medium'>{item.university}</div>
                        </div>
                        <div className='line-clamp-2 text-xs text-muted-foreground'>
                            {item.bio.substring(0, 300)}
                        </div>
                        {item.labels.length? (
                            <div className='flex items-center gap-2'>
                                {item.labels.map((label) => (
                                    <Badge key={label} variant={getBadgeVariantFromLabel(label)}>{label}</Badge>
                                ))}
                            </div>
                        ): null}
                    </button>
                ))}
            </div>
        </ScrollArea>
    );
}

function getBadgeVariantFromLabel(label:string): React.ComponentProps<typeof Badge>['variant'] {
    if (label === 'Location') return 'default';
    if (label === 'Experience') return 'default';
    if (label === 'GPA') return 'outline';
    return 'secondary';
}