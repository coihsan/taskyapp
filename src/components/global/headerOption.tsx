"use client"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation";

const HeaderOption = () =>{
    const pathname = usePathname();
    return(
        <>
            <Link
                className={clsx("py-4 px-4 rounded-md hover:bg-zinc-50/20", {
                    CardStyle: pathname === "/",
                })}
                href={"/"}
                >Board
        </Link>
        </>
    )
}

export default HeaderOption