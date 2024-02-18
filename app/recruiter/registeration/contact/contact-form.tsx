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

const contactFormSchema = z.object({
    officialEmailAddress: z
        .string({
            required_error: 'Official email is required',
        })
        .email()
        ,
    phoneNumber: z
        .string({
            required_error: 'Phone number is required',
        })
    ,
    hqAddress: z
        .string({
            required_error: 'Official Address is required',
        }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

function ContactForm() {

    const route = useRouter();

    const form = useForm<ContactFormValues>({
        resolver: zodResolver(contactFormSchema),
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
                    name = 'officialEmailAddress'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Official Email Address to HR Department</FormLabel>
                            <FormControl>
                                <Input placeholder='hr@hiring.com' {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the official email address to reach the HR department of your company
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name = 'phoneNumber'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>A Phone number to reach if additional verification is needed</FormLabel>
                            <FormControl>
                                <Input placeholder='(123)-456-7890' {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the phone number to reach if additional verification is needed
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}  
                />
                <FormField
                    control={form.control}
                    name = 'hqAddress'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Official Address of the company headquarters</FormLabel>
                            <FormControl>
                                <Input placeholder='9993 Hodkiewicz Ranch Suite 735' {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the official address of the company headquarters
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

export default ContactForm;