import React from "react";
import type { Metadata } from "next";
import "../globals.css";
import Navigation from "@/components/site/navigation"

export const metadata: Metadata = {
  title: "TaskyApp",
  description: "Free Task Management App",
};

const SiteLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <body className="">
    <Navigation />
        <main>{children}</main>
    </body>
  );
}
export default SiteLayout