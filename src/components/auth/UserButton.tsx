"use client";
import React from "react"
import { Skeleton } from "@/components/ui/skeleton"
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
import { useUser } from "@clerk/clerk-react";
import { ModeToggle } from "../global/ModeToggle"
import { SignOutButton } from "@clerk/nextjs"
import { FluentPerson24Regular } from "../icons/person";
import { FluentSettings24Regular } from "../icons/settings";
import { FluentSignOut24Regular } from "../icons/sign-out";

const UserButtonCustom = () =>{
const { isLoaded, isSignedIn, user } = useUser()
  if (!isLoaded || !isSignedIn) {
    return null
  }
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
                  src={`${user.imageUrl}`}
                  width={36}
                  height={36}
                  alt="Avatar"
                  className="overflow-hidden rounded-full"
                />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="CardStyle min-w-[200px] w-full" align="end">
              <DropdownMenuLabel className="grid gap-1">
                <span>{user.fullName}</span>
                <span className="text-xs text-muted-foreground">{user.username}</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
                <DropdownMenuItem>
                  <Link className="flex items-center gap-2" href="/account/profile">
                      <FluentPerson24Regular />
                      <span>Profile</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link className="flex items-center gap-2" href="/account/profile">
                      <FluentSettings24Regular />
                      <span>Settings</span>
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuItem className="flex items-center gap-2">
                  <FluentSignOut24Regular />
                  <SignOutButton redirectUrl="/sign-in" />
                </DropdownMenuItem>
              <DropdownMenuSeparator />
                <div className="flex items-center justify-center w-full">
                  <ModeToggle />
                </div>
            </DropdownMenuContent>
        </DropdownMenu>
        </div>
    )
}

export default UserButtonCustom