import React from "react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Button } from "../ui/button"
import Image from "next/image"
import Link from "next/link"
import { auth, signOut } from "@/auth"
import { db } from "@/lib/db"
import { ModeToggle } from "./ModeToggle"
import { menuUser } from "@/lib/const"

const UserButton = () =>{
  
// const getUserInfo = await db.user.findFirst({
//   select: {
//     email: true,
//     name: true,
//   },
// })
    return(
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="overflow-hidden rounded-full"
              >
                <Image
                  src="/profile.jpeg"
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="CardStyle min-w-[200px] w-full" align="end">
              <DropdownMenuLabel className="grid gap-1">
                <span>shadcn</span>
                <span className="text-xs text-muted-foreground">ihsan.onlinefs@gmail.com</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
                {menuUser.map((menu) =>(
                  <DropdownMenuItem>
                      <Link className="flex items-center gap-2" href={menu.url} key={menu.id}>
                        <menu.icon />
                        <span>{menu.title}</span>
                      </Link>
                  </DropdownMenuItem>
                ))}
              <DropdownMenuSeparator />
                <div className="w-full">
                  <ModeToggle />
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    )
}

export default UserButton