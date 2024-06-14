import HeaderBar from "@/components/headerbar";
import React from "react";

type Props = { children: React.ReactNode };

const Layout = ({ children }: Props) => {
  return (
    <div className="w-full border-l-[1px] h-screen h-full CardStyle border-t-[1px] border-muted-foreground/20 overflow-x-scroll">
      <HeaderBar />
      {children}
    </div>
  );
};

export default Layout;
