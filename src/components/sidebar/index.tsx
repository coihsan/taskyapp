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
        <SidebarContent borderTop>
          <FooterOnSidebar />
        </SidebarContent>
        <ScrollBar orientation="vertical" />
      </ScrollArea>
  );
}
