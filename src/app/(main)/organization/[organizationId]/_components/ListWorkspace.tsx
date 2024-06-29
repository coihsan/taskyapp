import NewWorkspace from '@/components/forms/NewWorkspace'
import EditWorkspace from '@/components/global/edit-workspace'
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/components/ui/command'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { getAllSpace } from '../../_action/organization-action'
import Link from 'next/link'
import React, { useState } from 'react'
import FluentDocumentFolder24Regular from '@/components/icons/document-folder'


export async function ListWorkspace() {
  const project = await getAllSpace();

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
              {project.map((list) => {
                return(
                  <CommandItem className="grid w-full" key={list.id}>
                  <Link
                    href={'/'}
                    className="text-sm h-9 px-2 hover:bg-onyx-100 dark:hover:bg-onyx-800 rounded-md flex items-center justify-between"
                  >
                    <div className="flex items-center gap-4">
                      <span className="overflow-hidden text-clip-1 text-nowrap">
                        {list.name}
                      </span>
                    </div>
                    <EditWorkspace />
                  </Link>
                </CommandItem>
                )
              })}
              </CommandGroup>
            </CommandList>
          </Command>
    </div>
  )
}