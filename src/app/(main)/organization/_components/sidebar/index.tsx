import { menuUser } from "@/lib/const";
import clsx from "clsx";
import Link from "next/link";
import Logo from "../../../../../components/global/logo";

import { ScrollArea, ScrollBar } from "../../../../../components/ui/scroll-area";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { SidebarContent } from "../../../../../components/global/SidebarContent";
import {ListWorkspace} from "@/app/(main)/organization/[organizationId]/_components/ListWorkspace";
import WorkspaceMenu from "@/app/(main)/organization/[organizationId]/_components/WorkspaceMenu";
import OrganizaztionList from "@/app/(main)/organization/[organizationId]/_components/OrganizationList";
import FooterOnSidebar from "../../../../../components/global/FooterOnSidebar";

const labels = ["Up", "To top", "To down", "down"];

export function Sidebar() {

  return (
      <ScrollArea className="w-full max-w-72 relative h-full overflow-y-scroll h-screen">
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
