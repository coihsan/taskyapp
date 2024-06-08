"use client"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { sidebar } from "@/lib/const"
import clsx from "clsx"
import Link from "next/link"
import { ModeToggle } from "../global/ModeToggle"
import Logo from "../global/logo"
import { PlusIcon } from "@radix-ui/react-icons"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue } from "../ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"
import { workspaceExample } from "@/lib/const"
import Image from "next/image"
import NewOrganization from "./NewOrganization"
import NewWorkspace from "../global/NewWorkspace"
import EditWorkspace from "../global/edit-workspace"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "../ui/command"
import React from "react"
import { usePathname } from "next/navigation"
interface SidebarProps {
  children: React.ReactNode;
  borderTop?: boolean;
  borderBottom?: boolean;
  className?: string;
}
const labels = [
  "Up",
  "To top",
  "To down",
  "down",
]
const SidebarContent =({children, borderTop, borderBottom, className} : SidebarProps ) =>{
  return(
    <div className={clsx(borderTop && 'border-t border-onyx-100 dark:border-onyx-800', borderBottom && 'border-b border-onyx-100 dark:border-onyx-800', 'py-4 px-4', {className})}>
      {children}
    </div>
  )
}
export function Sidebar() {
  const isActive = false;
  const pathname = usePathname()
  const [label, setLabel] = React.useState("feature")
  const [open, setOpen] = React.useState(false)

  return (
    <aside className="w-full max-w-64 relative h-screen min-h-screen">
      <SidebarContent borderBottom>
        <Logo />
      </SidebarContent>
      <SidebarContent borderBottom>
      <Select>
      <SelectTrigger className="h-12">
        <SelectValue placeholder="Select a organization" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
        <SelectLabel className="text-xs font-medium text-onyx-600 dark:text-onyx-500 uppercase">Your Own</SelectLabel>
          <SelectItem value="apple">
          <div className="flex items-center gap-4 w-full overflow-hidden">
            <div className="">
            <Avatar>
              <AvatarImage src="/profile.jpeg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </div>  
              <p className="truncate overflow-hidden">Freelancer.com</p>
          </div>
          </SelectItem>
          <SelectItem value="bossco">
          <div className="flex items-center gap-4">
            <div className="">
            <Avatar>
              <AvatarImage src="/profile.jpeg" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            </div>
              <p className="line-clamp-1">PT. Bossco Indolestari</p>
          </div>
          </SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
        </SelectGroup>
          <SelectSeparator />
        <SelectGroup>
          <SelectLabel className="text-xs font-medium text-onyx-600 dark:text-onyx-500 uppercase">Your Joined</SelectLabel>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <NewOrganization />
      </SelectContent>
    </Select>
      </SidebarContent>
      <SidebarContent borderBottom>
      <span className="text-xs font-medium text-onyx-600 dark:text-onyx-500 uppercase">Menu</span>
      <nav className="flex flex-col gap-1 pt-4">
      {sidebar.map((item) => (
        <Link
          className={clsx(
            'flex items-center text-sm h-12 py-4 gap-6 pl-2 dark:text-onyx-400 font-semibold hover:bg-onyx-100 dark:hover:bg-onyx-800 gap-2 hover:ring-2 hover:ring-onyx-100 dark:hover:ring-onyx-800 rounded-md transitionAll',
            {'borderStyle bg-onyx-50 dark:text-white dark:bg-onyx-900' : pathname === item.url}
          )}
          href={item.url}
          key={item.id}
        >
          <div className="text-onyx-600 dark:text-onyx-400">
            <item.icons />
          </div>
          <span>{item.title}</span>
        </Link>
      ))}
      </nav>
      </SidebarContent>
      <SidebarContent className="grid">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium text-onyx-600 dark:text-onyx-500 uppercase">Workpace</span>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <NewWorkspace />
              </TooltipTrigger>
              <TooltipContent>
                <p>New Workpace</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        {/* <div className="pt-4">
        <Command>
          <CommandInput
            placeholder="Search..."
            autoFocus={true}
            className="h-full"
            />
                  <CommandList>
                    <CommandEmpty>No label found.</CommandEmpty>
                    <CommandGroup heading={'By You'}>
                      {workspaceExample.map((list) => (
                        <CommandItem
                          key={list.id}
                          value={list.name}
                          onSelect={(value) => {
                            setLabel(value)
                            setOpen(false)
                          }}
                        >
                          <div className="flex items-center justify-between">
                            <Link href={list.url} className="text-sm h-12 px-2 hover:bg-onyx-100 dark:hover:bg-onyx-800 rounded-md flex items-center justify-between">
                              <div className="flex items-center gap-4">
                                <div className="size-9 flex items-center justify-center bg-lime-900 rounded-md aspect-square">
                                  <list.icon />
                                </div>
                                <span className="w-full bg-white/10 overflow-hidden text-clip-1 text-nowrap">
                                  {list.name}
                                </span>
                              </div>
                            </Link>
                          <EditWorkspace />
                          </div>
                        </CommandItem>
                      ))}
                      </CommandGroup>
                  </CommandList>
                </Command>
        </div> */}
        <div className="w-full pt-4">
          <div className="grid w-full">
            {workspaceExample.map((list) => (
                <Link href={list.url} key={list.id} className="text-sm h-12 px-2 hover:bg-onyx-100 dark:hover:bg-onyx-800 rounded-md flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="size-9 flex items-center justify-center bg-lime-900 rounded-md aspect-square">
                      <list.icon />
                    </div>
                    <span className="overflow-hidden text-clip-1 text-nowrap">
                      {list.name}
                    </span>
                  </div>
                  <EditWorkspace />
                </Link>
            ))}
          </div>
        </div>
      </SidebarContent>
      <SidebarContent borderTop>
      <footer className="flex items-center justify-evenly">
          <Link className="text-xs" href="/privacy">Privacy</Link>
          <Link className="text-lime-600 text-xs dark:text-lime-400" href="/support">Support</Link>
      </footer>
      </SidebarContent>
    </aside>
  );
}

