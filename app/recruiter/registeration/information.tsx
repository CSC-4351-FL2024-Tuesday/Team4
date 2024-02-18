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

const informationFormSchema = z.object({
    companyName: z
        .string({
            required_error: 'Company name is required',
        })
        .min(2, {
            message: 'Company name is too short',
        })
        ,
    companyWebsite: z
        .string()
        .url({ message: 'Invalid URL' }),
    companySize: z
        .number({
            required_error: 'Company size is required',
        }),
    companyType: z
        .string({
            required_error: 'Company type is required',
        }),
    companyIndustry: z
        .string({
            required_error: 'Company industry is required',
        }),
    companyDescription: z.string().optional(),
    locations: z.array(
        z.object({
            location: z.string(),
        })
    ),
});

type InformationFormValues = z.infer<typeof informationFormSchema>;

function Information() {

    const route = useRouter();

    const form = useForm<InformationFormValues>({
        resolver: zodResolver(informationFormSchema),
        mode: 'onChange',
    });

    const { fields, append, remove } = useFieldArray({
        control: form.control,
        name: 'locations',
    });

    function onSubmit() {
        route.push('/recruiter/registeration/contact');
      }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
                <FormField
                    control={form.control}
                    name = 'companyName'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company Name</FormLabel>
                            <FormControl>
                                <Input placeholder='Alphabet LLC' {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the name of your company
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />

                <FormField
                    control={form.control}
                    name = 'companyWebsite'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company Website</FormLabel>
                            <FormControl>
                                <Input placeholder='https://example.com' {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the website of your company
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}  
                />
                <FormField
                    control={form.control}
                    name = 'companySize'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company Size</FormLabel>
                            <FormControl>
                                <Input 
                                    placeholder='100' 
                                    {...field} 
                                    type='number' 
                                    onChange={e => {
                                        const value = e.target.value;
                                        // Convert the input value to a number when a change event occurs
                                        field.onChange(value === "" ? "" : Number(value));
                                      }}
                                    />
                            </FormControl>
                            <FormDescription>
                                This is the size of your company
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name = 'companyType'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company Type</FormLabel>
                            <FormControl>
                                <Input placeholder='Private' {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the type of your company
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <FormField
                    control={form.control}
                    name = 'companyIndustry'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company Industry</FormLabel>
                            <FormControl>
                                <Input placeholder='Software' {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the industry of your company
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )} 
                />
                <FormField
                    control={form.control}
                    name = 'companyDescription'
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Company Description</FormLabel>
                            <FormControl>
                                <Input placeholder='This is a company' {...field} />
                            </FormControl>
                            <FormDescription>
                                This is the description of your company
                            </FormDescription>
                            <FormMessage/>
                        </FormItem>
                    )}
                />
                <div>
                    {fields.map((field, index) => (
                        <FormField
                            key={field.id}
                            control={form.control}
                            name={`locations.${index}.location`}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className={cn(index!==0 && "sr-only")}>
                                        Location
                                    </FormLabel>
                                    <FormDescription className={cn(index!==0 && "sr-only")}>
                                        This is the location of your company
                                    </FormDescription>
                                    <FormControl>
                                        <Input placeholder='Location' {...field} />
                                    </FormControl>
                                    <FormMessage/>
                                </FormItem>
                            )}
                        />
                    ))}
                    <Button
                        type='button'
                        variant={'outline'}
                        size={'sm'}
                        className='mt-2'
                        onClick={() => append({ location: '' })}
                    >
                        Add Location
                    </Button>
                </div>
                <Button type="submit">Next</Button>
            </form> 
        </Form>
    );
};

export default Information;