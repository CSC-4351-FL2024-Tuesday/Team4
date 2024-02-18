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

const verificationFormSchema = z.object({
    businessLicenseNumber: z
        .string({
            required_error: 'License Number is required',
        })
        ,
    taxOrEmployerIdentificationNumber: z
        .string({
            required_error: 'TIN or EIN is required',
        })
});

type VerificationFormValues = z.infer<typeof verificationFormSchema>;

function VerificationForm() {

    const route = useRouter();

    const form = useForm<VerificationFormValues>({
        resolver: zodResolver(verificationFormSchema),
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
                    name = 'businessLicenseNumber'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Enter relevant business license number</FormLabel>
                            <FormControl>
                                <Input placeholder='12029' {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the business license number of your company
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name = 'taxOrEmployerIdentificationNumber'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Enter Tax Identification Number (TIN) or Employer Identification Number (EIN)</FormLabel>
                            <FormControl>
                                <Input placeholder='XX-XXXXXXX' {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the tax identification number or employer identification number of your company
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

export default VerificationForm;