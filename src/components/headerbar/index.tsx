import React from "react";
import { Separator } from "../ui/separator";
import UserButtonCustom from "../auth/UserButton";
import HeaderOption from "../global/headerOption";

const HeaderBar = () => {
  
  return (
    <header className="flex items-center w-full h-16 py-2 relative bg-gradient-to-r from-zinc-900/70 to-zinc-800/30 border-b border-zinc-800 ">
        <HeaderOption />
      <Separator orientation="vertical" />
      <div className="flex items-center gap-3 absolute right-4">
          <UserButtonCustom />
      </div>
    </header>
  );
};
export default HeaderBar;
