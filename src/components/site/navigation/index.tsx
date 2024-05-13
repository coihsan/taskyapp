"use client"
import Link from 'next/link'
import { Separator } from "@/components/ui/separator"
import { sitelink } from '@/lib/const';
import { ModeToggle } from '@/components/global/ModeToggle';
import Logo from '@/components/global/logo';
const MenuLink =() =>{
    return (
        <ul className='hidden lg:flex items-center gap-4'>
            {sitelink.map((link) => (
                <li className='textHover' key={link.id}>
                    <Link href={link.url}>{link.title}</Link>
                </li>
            ))}
        </ul>
    )
}
const Navigation = () =>{
    return (
        <header className='mx-auto w-full border-b-[1px] border-black/10 dark:border-white/10'>
            <nav className="flex items-center justify-between w-full max-w-screen-xl mx-auto px-4 py-4 bg-white-30">
                <Link className='flex items-center gap-2' href={'/'}>
                    <Logo />
                    <span className='border border-white/10 bg-white/5 px-1 py-px text-onyx-500 rounded-full text-[10px] font-bold'>Beta</span>
                </Link>
                <div className='flex items-center h-7 space-x-4'>
                    <MenuLink />
                    <Separator orientation="vertical" />
                    <ModeToggle />
                </div>
            </nav>
        </header>
    )
}

export default Navigation