import React from "react";
import { ModeToggle } from "../global/ModeToggle";

const HeaderBar = () =>{
    return(
        <header className="flex items-center h-16">
            <h1>InfoBar</h1>
            <ModeToggle />
        </header>
    )
}
export default HeaderBar;