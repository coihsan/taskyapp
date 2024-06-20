"use client";

import { menuUser } from "@/lib/const";
import clsx from "clsx";
import Link from "next/link";
import Logo from "../global/logo";

import { ScrollArea, ScrollBar } from "../ui/scroll-area";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { SidebarContent } from "../global/SidebarContent";
import ListWorkspace from "@/app/(main)/(pages)/organization/[organizationId]/_components/ListWorkspace";
import WorkspaceMenu from "@/app/(main)/(pages)/organization/[organizationId]/_components/WorkspaceMenu";
import OrganizaztionList from "@/app/(main)/(pages)/organization/[organizationId]/_components/OrganizationList";
import FooterOnSidebar from "../global/FooterOnSidebar";

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
          <OrganizaztionList />
        </SidebarContent>
        <SidebarContent borderBottom>
          <WorkspaceMenu />
        </SidebarContent>
        <SidebarContent className="grid">
            
          <ListWorkspace />
        </SidebarContent>
        <SidebarContent borderBottom borderTop>
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
          <FooterOnSidebar />
        </SidebarContent>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
  );
}
