"use client";
import * as React from 'react';
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
  } from "@/components/ui/navigation-menu"
import { ModeToggle } from '../../utils/mode_toggle';
  
export interface HeaderProps {
  children?: React.ReactNode;
}

export default class Header extends React.Component<HeaderProps> {
  public render() {
    const {children} = this.props;
    return (
      <div className='w-screen flex justify-between my-2'>
        {/* logo */}
        <div className='ml-4 text-2xl font-sans'>
          CareerSwipe
        </div>

        {/* Navigation menu */}
        <div className='flex mr-4 justify-between justify-items-center'>
          <div className=''>
            <NavigationMenu>
                <NavigationMenuList>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Item One</NavigationMenuTrigger>
                      <NavigationMenuContent>
                          <NavigationMenuLink>Link</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Item Two</NavigationMenuTrigger>
                      <NavigationMenuContent>
                          <NavigationMenuLink>Link</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                      <NavigationMenuTrigger>Item three</NavigationMenuTrigger>
                      <NavigationMenuContent>
                          <NavigationMenuLink>Link</NavigationMenuLink>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
          </div>
          {children && (
            <div className='px-2'>
              {children}
            </div>
          )}
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    );
  }
}
