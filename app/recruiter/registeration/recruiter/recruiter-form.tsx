"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import {useFieldArray, useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {z} from 'zod';
import { toast } from '@/components/ui/use-toast';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';

const RecruiterFormSchema = z.object({
    fullName: z
        .string({
            required_error: 'Name is required',
        })
    ,
    position: z
        .string({
            required_error: 'Position is required',
        })
    ,
    linkedin: z
        .string()
        .optional()
    ,
});

type RecruiterFormValues = z.infer<typeof RecruiterFormSchema>;

function RecruiterForm() {

    const route = useRouter();

    const form = useForm<RecruiterFormValues>({
        resolver: zodResolver(RecruiterFormSchema),
        mode: 'onChange',
    });

    function onSubmit() {
        route.push('/recruiter/registeration/contact');
      }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name = 'fullName'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Full Name of the person registering</FormLabel>
                            <FormControl>
                                <Input placeholder='Jane Doe' {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the full name of the person registering the company
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name = 'position'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Position of the person registering</FormLabel>
                            <FormControl>
                                <Input placeholder='Hiring Manager' {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the position of the person registering the company
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}  
                />

                <FormField
                    control={form.control}
                    name = 'linkedin'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>LinkedIn profile of the person registering</FormLabel>
                            <FormControl>
                                <Input placeholder='https://example.com' {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the LinkedIn profile of the person registering the company
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}  
                />
                <Button type="submit">Next</Button>
            </form> 
        </Form>
    );
};

export default RecruiterForm;