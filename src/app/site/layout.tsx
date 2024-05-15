import React from "react";
import type { Metadata } from "next";
import "../globals.css";
import Navigation from "@/components/site/navigation"
import FooterSite from "@/components/site/footer";
export const metadata: Metadata = {
  title: "TaskyApp",
  description: "Free Task Management App",
};

const SiteLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <section className="">
    <Navigation />
        <main>{children}</main>
    <FooterSite />
    </section>
  );
}
export default SiteLayout