"use client"
import { sidebaraccountuser } from '@/lib/const'
import clsx from 'clsx';
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

const SidebarMenuAccount = () =>{
    const pathname = usePathname();
  return (
    <div className='w-full max-w-[280px] px-1'>
        <nav className="flex flex-col gap-1">
            {sidebaraccountuser.map((item) => (
              <Link
                className={clsx(
                  "flex items-center text-sm h-9 gap-3 pl-2 text-black dark:text-foreground hover:bg-onyx-100 dark:hover:bg-onyx-800 hover:ring-2 hover:ring-onyx-100 dark:hover:ring-onyx-800 rounded-md transitionAll",
                  {
                    "borderStyle ButtonStyle font-bold":
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
    </div>
  )
} 

export default SidebarMenuAccount