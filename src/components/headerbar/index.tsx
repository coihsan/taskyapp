'use client'
import React from "react";
import { ModeToggle } from "../global/ModeToggle";
import { UserButton } from "@clerk/nextjs";
import { Separator } from "../ui/separator";
import Link from "next/link";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import AddTeam from "../global/AddTeam";
const HeaderBar = () =>{
    const pathname = usePathname()
    return(
        <header className="flex items-center w-full h-16 py-2 relative bg-gradient-to-r from-zinc-900/70 to-zinc-800/30 border-b border-zinc-800 ">
            <div>
                <Link className={clsx('py-4 px-4 rounded-md hover:bg-zinc-50/20', {'CardStyle': pathname === '/'}) } href={"/"}>Board</Link>
            </div>
            <Separator orientation="vertical" />
            <nav className="flex items-center gap-3 absolute right-4">
                <AddTeam />
                <UserButton />
            </nav>
        </header>
    )
}
export default HeaderBar;