"use client";
import { Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command';
import { EnvelopeClosedIcon, GearIcon, PersonIcon } from '@radix-ui/react-icons';
import * as React from 'react';


export function SearchBar() {
    const [open, setOpen] = React.useState(false)
 
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])
 
  return (
    <>
    <CommandDialog open={open} onOpenChange={setOpen}>
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>Software Engineer</CommandItem>
          <CommandItem>Web Developer</CommandItem>
          <CommandItem>Risk Analayst</CommandItem>
        </CommandGroup>
        <CommandGroup heading="Settings">
            <CommandItem>
              <PersonIcon className="mr-2 h-4 w-4" />
              <span>Profile</span>
            </CommandItem>
            <CommandItem>
              <EnvelopeClosedIcon className="mr-2 h-4 w-4" />
              <span>Mail</span>
            </CommandItem>
            <CommandItem>
              <GearIcon className="mr-2 h-4 w-4" />
              <span>Settings</span>
            </CommandItem>
        </CommandGroup>
      </CommandList>
    </CommandDialog>
    </>
  )
}
