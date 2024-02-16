// Assuming you've corrected the useInView hook usage
import React, { useRef, useEffect } from 'react';
import { useInView } from 'framer-motion';
import { cn } from '@/lib/utils';

type QuestionProps = {
    children: React.ReactNode;
    id: string; // Add an identifier for each title
    setActiveFeature: (id: string) => void; // Method to update the active feature in the parent
};

export const QuestionTitle = ({ children, id, setActiveFeature }: QuestionProps) => {
    const ref = useRef<HTMLParagraphElement>(null);
    const isInView = useInView(ref, { margin: '-50% 0px -50% 0px' });

    useEffect(() => {
        if (isInView) {
            setActiveFeature(id);
        }
    }, [isInView, id, setActiveFeature]);

    return (
        <p ref={ref} className={cn(
            'py-16 font-heading text-5xl transition-colors duration-300 ease-in-out',
            isInView ? 'text-neutral-600' : 'text-neutral-300'
        )}>
            {children}
        </p>
    );
};
