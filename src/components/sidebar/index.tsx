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
interface SidebarProps {
  children: React.ReactNode;
  borderTop?: boolean;
  borderBottom?: boolean;
  className?: string;
}

const SidebarContent =({children, borderTop, borderBottom, className} : SidebarProps ) =>{
  return(
    <div className={clsx(borderTop && 'border-t border-onyx-100 dark:border-onyx-800', borderBottom && 'border-b border-onyx-100 dark:border-onyx-800', 'py-4 px-4', {className})}>
      {children}
    </div>
  )
}
export function Sidebar() {
  const isActive = false;

  return (
    <aside className="w-full relative h-screen min-h-screen">
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
        <Button className="mt-4 w-full" variant={'default'}>
          <PlusIcon className="w-4 h-4" />
          New Organization
        </Button>
      </SelectContent>
    </Select>
      </SidebarContent>
      <SidebarContent borderBottom>
      <span className="text-xs font-medium text-onyx-600 dark:text-onyx-500 uppercase">Menu</span>
      <nav className="flex flex-col pt-4">
      {sidebar.map((item) => (
        <Link
          className={clsx(
            'flex items-center text-sm h-9 py-2 gap-6 pl-2 text-onyx-600 dark:text-onyx-400 font-semibold hover:bg-onyx-100 dark:hover:bg-onyx-800 gap-2 hover:ring-2 hover:ring-onyx-100 dark:hover:ring-onyx-800 rounded-md transitionAll',
            isActive && 'borderStyle bg-onyx-50 dark:bg-onyx-900'
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
                <Button variant="ghost"><PlusIcon /></Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>New Workpace</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>
        <div className="pt-4">
            <Input placeholder="search..." />
        </div>
        <div className="w-full pt-4">
          <div className="grid w-full">
            {workspaceExample.map((list) => (
                <Link href={list.url} key={list.id} className="text-sm h-12 pl-2 hover:bg-onyx-100 dark:hover:bg-onyx-800 rounded-md flex items-center gap-4">
                  <div className="size-9 flex items-center justify-center bg-lime-900 rounded-md aspect-square">
                    <list.icon />
                  </div>
                  <span>
                    {list.name}
                  </span>
                </Link>
            ))}
          </div>
        </div>
      </SidebarContent>
      <SidebarContent borderTop>
      <footer className="flex items-center justify-between">
        <div className="*:text-sm flex items-center gap-3">
          <Link href="/privacy">Privacy</Link>
          <Link className="text-lime-600 dark:text-lime-400" href="/support">Support</Link>
        </div>
          <ModeToggle />
      </footer>
      </SidebarContent>
    </aside>
  );
}

