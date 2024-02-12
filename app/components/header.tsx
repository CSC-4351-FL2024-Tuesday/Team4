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
import { ModeToggle } from '../utils/mode_toggle';
  
export interface HeaderProps {
}

export default class Header extends React.Component<HeaderProps> {
  public render() {
    return (
      <div className='w-screen flex'>
        {/* logo */}
        <div className='my-2 ml-4'>
          CareerSwipe
        </div>

        {/* Navigation menu */}
        <div className='flex justify-end'>
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
          <div>
            <ModeToggle />
          </div>
        </div>
      </div>
    );
  }
}
