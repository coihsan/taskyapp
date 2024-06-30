import React from "react";
import { Separator } from "../ui/separator";
import UserButtonCustom from "../auth/UserButton";
import HeaderOption from "../global/headerOption";
import TBreadcrumbs from "../global/TBreacrumbs";
import Logo from "../global/logo";
import NotificationUser from "../global/notification-user";
import { FluentSlashForward24Filled } from "../icons/slash-icon";
import { ModeToggle } from "../global/ModeToggle";

const HeaderBar = () => {
  
  return (
    <header className="flex space-x-4 items-center w-full h-16 py-2 px-3 relative">
      <Logo />
        <FluentSlashForward24Filled />
      <TBreadcrumbs />
        <FluentSlashForward24Filled />
      <HeaderOption />
      <FluentSlashForward24Filled />
      <div className="flex items-center gap-3 absolute right-4">
          <NotificationUser />
          <UserButtonCustom />
          <ModeToggle />
      </div>
    </header>
  );
};
export default HeaderBar;
