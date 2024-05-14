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

export function Sidebar() {
  const isActive = false;

  return (
    <aside className="max-w-[300px] w-full">
      <nav className="flex flex-col ">
      {sidebar.map((item) => (
        <Link
          className={clsx(
            'flex items-center h-11 py-2 gap-6 px-4 hover:bg-onyx-100 dark:hover:bg-onyx-800 gap-2 hover:ring-2 hover:ring-onyx-100 dark:hover:ring-onyx-800 rounded-md transitionAll',
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
    </aside>
  );
}

