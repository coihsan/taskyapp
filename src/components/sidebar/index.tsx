"use client";

import { menuUser, sidebar } from "@/lib/const";
import clsx from "clsx";
import Link from "next/link";
import { ModeToggle } from "../global/ModeToggle";
import Logo from "../global/logo";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { workspaceExample } from "@/lib/const";
import NewOrganization from "../forms/NewOrganization";
import NewWorkspace from "../forms/NewWorkspace";
import EditWorkspace from "../global/edit-workspace";
import {
  Command,
  CommandEmpty,
  CommandInput,
  CommandItem,
  CommandList,
  CommandGroup
} from "../ui/command";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { SidebarContent } from "../global/SidebarContent";
import { Button } from "../ui/button";

const labels = ["Up", "To top", "To down", "down"];

export function Sidebar() {
  const isActive = false;
  const pathname = usePathname();
  const [label, setLabel] = useState("feature");

  return (
      <ScrollArea className="w-full max-w-72 relative h-full overflow-y-scroll h-screen">
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
                <SelectLabel className="text-xs font-medium text-onyx-600 dark:text-onyx-500 uppercase">
                  Your Own
                </SelectLabel>
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
                <SelectLabel className="text-xs font-medium text-onyx-600 dark:text-onyx-500 uppercase">
                  Your Joined
                </SelectLabel>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <NewOrganization />
            </SelectContent>
          </Select>
        </SidebarContent>
        <SidebarContent borderBottom>
          <span className="text-xs text-onyx-600 dark:text-muted-foreground uppercase">
            Workpace
          </span>
          <nav className="flex flex-col gap-1 pt-4">
            {sidebar.map((item) => (
              <Link
                className={clsx(
                  "flex items-center text-sm h-9 gap-3 pl-2 text-black dark:text-foreground hover:bg-onyx-100 dark:hover:bg-onyx-800 hover:ring-2 hover:ring-onyx-100 dark:hover:ring-onyx-800 rounded-md transitionAll",
                  {
                    "borderStyle bg-onyx-50 text-lime-600 dark:text-lime-400 dark:bg-onyx-900":
                      pathname === item.url,
                  },
                )}
                href={item.url}
                key={item.id}
              >
                <div
                  className={clsx("text-black dark:text-foreground", {
                    "text-lime-600 dark:text-lime-400": pathname === item.url,
                  })}
                >
                  <item.icon />
                </div>
                <span>{item.title}</span>
              </Link>
            ))}
          </nav>
        </SidebarContent>
        <SidebarContent className="grid">
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
          <Command className="pt-4 z-50">
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
        </SidebarContent>
        <SidebarContent borderBottom>
          <span className="text-xs text-onyx-600 dark:text-muted-foreground uppercase">
              Your
            </span>
            <nav className="flex flex-col gap-1 pt-4">
              {menuUser.map((menu) => (
                <Link
                  className={clsx(
                    "flex items-center text-sm h-9 gap-3 pl-2 text-black dark:text-foreground hover:bg-onyx-100 dark:hover:bg-onyx-800 hover:ring-2 hover:ring-onyx-100 dark:hover:ring-onyx-800 rounded-md transitionAll",
                    {
                      "borderStyle bg-onyx-50 text-lime-600 dark:text-lime-400 dark:bg-onyx-900":
                        pathname === menu.url,
                    },
                  )}
                  href={menu.url}
                  key={menu.id}
                >
                  <div
                    className={clsx("text-black dark:text-foreground", {
                      "text-lime-600 dark:text-lime-400": pathname === menu.url,
                    })}
                  >
                    <menu.icon />
                  </div>
                  <span>{menu.title}</span>
                </Link>
              ))}
            </nav>
        </SidebarContent>
        <SidebarContent borderTop>
          <footer className="w-full flex items-center justify-evenly">
            <Link className="text-xs" href="/privacy">
              Privacy
            </Link>
            <Link className="text-xs" href="/policy">
              Policy
            </Link>
            <Link
              className="text-lime-600 text-xs dark:text-lime-400"
              href="/support"
            >
              Support
            </Link>
            <ModeToggle />
          </footer>
        </SidebarContent>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
  );
}
