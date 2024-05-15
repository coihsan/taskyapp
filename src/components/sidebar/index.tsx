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
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "../ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
import { ScrollArea } from "../ui/scroll-area"
import { Separator } from "../ui/separator"
import { workspaceExample } from "@/lib/const"
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
    <aside className="max-w-[260px] w-full relative">
      <div className="">
      <SidebarContent borderBottom>
        <Logo />
      </SidebarContent>
      <SidebarContent borderBottom>
      <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem className="flex items-center gap-2" value="apple">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
            <span>Apple</span>
          </SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
          <SelectItem value="blueberry">Blueberry</SelectItem>
          <SelectItem value="grapes">Grapes</SelectItem>
          <SelectItem value="pineapple">Pineapple</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
      </SidebarContent>
      <SidebarContent borderBottom>
      <span className="text-xs font-medium text-onyx-600 dark:text-onyx-500 uppercase">Menu</span>
      <nav className="flex flex-col ">
      {sidebar.map((item) => (
        <Link
          className={clsx(
            'flex items-center text-sm h-9 py-2 gap-6 pl-2 hover:bg-onyx-100 dark:hover:bg-onyx-800 gap-2 hover:ring-2 hover:ring-onyx-100 dark:hover:ring-onyx-800 rounded-md transitionAll',
            isActive && 'borderStyle bg-onyx-50 dark:bg-onyx-900'
          )}
          href={item.url}
          key={item.id}
        >
          <item.icons />
          <span>{item.title}</span>
        </Link>
      ))}
      </nav>
      </SidebarContent>
      <SidebarContent>
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
        <main>
            <Input placeholder="search..." />
        </main>
        <ScrollArea className="h-52">
      <div className="pt-4 grid divide-y divide-onyx-100 dark:divide-onyx-800">
        {workspaceExample.map((list) => (
          <>
            <Link href={list.url} key={list.id} className="text-sm w-full py-3 px-3 hover:bg-onyx-100 dark:hover:bg-onyx-800 rounded-md">
              {list.name}
            </Link>
          </>
        ))}
      </div>
    </ScrollArea>
      </SidebarContent>
      <SidebarContent borderTop>
      <footer className="absolute bottom-5 left-5 right-5 flex  justify-between ">
        <div className="*:text-sm flex items-center gap-3">
          <Link href="/privacy">Privacy</Link>
          <Link className="text-lime-600 dark:text-lime-400" href="/support">Support</Link>
        </div>
          <ModeToggle />
      </footer>
      </SidebarContent>
      </div>
    </aside>
  );
}

