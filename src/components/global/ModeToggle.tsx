"use client";

import * as React from "react";
import { MoonIcon, SunIcon, DesktopIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"


export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <div>
      <Tabs defaultValue={`${setTheme}`} className="w-full">
      <TabsList>
        <TabsTrigger onClick={() => setTheme("light")} value="light"><SunIcon /></TabsTrigger>
        <TabsTrigger onClick={() => setTheme("dark")} value="dark"><MoonIcon /></TabsTrigger>
        <TabsTrigger onClick={() => setTheme("sytem")} value="sytem"><DesktopIcon /></TabsTrigger>
      </TabsList>
    </Tabs>
    </div>
  );
}
