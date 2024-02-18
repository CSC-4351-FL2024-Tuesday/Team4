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

const AdditionalFormSchema = z.object({
    purpose: z
        .string()
        .optional()
    ,
    hearAboutUs: z
        .string()
        .optional()
    ,
});

type AdditionalFormValues = z.infer<typeof AdditionalFormSchema>;

function AdditionalForm() {

    const route = useRouter();

    const form = useForm<AdditionalFormValues>({
        resolver: zodResolver(AdditionalFormSchema),
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
                    name = 'purpose'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>What is your purpose of joining this platform</FormLabel>
                            <FormControl>
                                <Input placeholder='We want to make hiring process easier' {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the purpose of your company joining this platform
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name = 'hearAboutUs'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>How did you hear about Us</FormLabel>
                            <FormControl>
                                <Input placeholder='Word of mouth in the market' {...field} />
                            </FormControl>
                            <FormDescription>
                                This is how you heard about us
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}  
                />
                <Button type="submit">Submit</Button>
            </form> 
        </Form>
    );
};

export default AdditionalForm;