import { Separator } from '@/components/ui/separator';
import * as React from 'react';
import { SidebarNav } from './components/sidebar-nav';
import { title } from 'process';

export interface IRegistrationLayoutProps {
    children: React.ReactNode;
}

const sidebarNavItems = [
    {
        title: "Company Information",
        href: "/recruiter/registeration",
    },
    {
        title: "Contact Information",
        href: "/recruiter/registeration/contact",
    },
    {
        title: "Verification",
        href: "/recruiter/registeration/verification",
    },
    {
        title: "Recruiter Information",
        href: "/recruiter/registeration/recruiter",
    },
    {
        title: "Additional Information",
        href: "/recruiter/registeration/additional",
    },
    {
        title: "Review",
        href: "/recruiter/registeration/hangtight",
    }
];

export default function RegistrationLayout ({children}: IRegistrationLayoutProps) {
  return (
    <>
      <div className='hidden space-y-6 p-10 pb-16 md:block'>
        <div className='space-y-0.5'>
            <h2 className='text-2xl font-bold tracking-tight'>
                Register a Company
            </h2>
            <p className='text-muted-foreground'>
                Register your company to start hiring top talent
            </p>
        </div>
        <Separator/>
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
            <aside className='-mx-4 lg:w-1/5'>
                <SidebarNav items={sidebarNavItems}/>
            </aside>
            <div className='flex-1 lg:max-w-2xl'>{children}</div>
        </div>
      </div>
    </>
  );
}
