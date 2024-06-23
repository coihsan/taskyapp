"use client"
import NewWorkspace from '@/components/forms/NewWorkspace'
import EditWorkspace from '@/components/global/edit-workspace'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { workspaceExample } from '@/lib/const'
import Link from 'next/link'
import React, { useState } from 'react'

export default function ListWorkspace() {
  const [isVisible, setIsVisible] = useState(false)
  return (
    <div>
        <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-onyx-600 dark:text-muted-foreground uppercase">
            space
            </span>
            <TooltipProvider>
            <Tooltip>
                <TooltipTrigger asChild>
                <NewWorkspace />
                </TooltipTrigger>
                <TooltipContent>
                <p>New Space</p>
                </TooltipContent>
            </Tooltip>
            </TooltipProvider>
        </div>
        <Command className="pt-4 h-72 z-50">
            <CommandInput placeholder="Search..." />
            <CommandList>
              <CommandEmpty>No results found.</CommandEmpty>
              <CommandGroup>
              {workspaceExample.map((list) => (
                <CommandItem className="grid w-full" key={list.id}>
                  <Link
                    href={list.url}
                    className="text-sm h-9 px-2 hover:bg-onyx-100 dark:hover:bg-onyx-800 rounded-md flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <div className="size-9 flex items-center justify-center aspect-square">
                        <list.icon />
                      </div>
                      <span className="overflow-hidden text-clip-1 text-nowrap">
                        {list.name}
                      </span>
                    </div>
                    <EditWorkspace />
                  </Link>
                </CommandItem>
              ))}
              </CommandGroup>
            </CommandList>
          </Command>
    </div>
  )
}