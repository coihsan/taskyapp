"use client"
import Link from 'next/link'
import { Separator } from "@/components/ui/separator"
import { sitelink } from '@/lib/const';
import { ModeToggle } from '@/components/global/ModeToggle';
import Logo from '@/components/global/logo';
import ButtonLink from '@/components/global/ButtonLink';
const MenuLink =() =>{
    return (
        <ul className='hidden lg:flex items-center gap-8'>
            {sitelink.map((link) => (
                <li className='text-onyx-400 textHover' key={link.id}>
                    <Link href={link.url}>{link.title}</Link>
                </li>
            ))}
        </ul>
    )
}
const Navigation = () =>{
    return (
        <header className='mx-auto w-full border-b-[1px] border-black/10 dark:border-white/10 bg-transparent'>
            <nav className="flex items-center justify-between w-full max-w-screen-xl mx-auto px-4 py-4 bg-white-30">
                <div className='flex'>
                    <Link className='flex items-center gap-2' href={'/'}>
                        <Logo />
                        <span className='borderStyle bg-white/5 px-1 py-px text-onyx-500 rounded-full text-[10px] font-semibold'>Beta</span>
                    </Link>
                    <div className='hidden lg:flex ml-0 lg:ml-4 flex items-center gap-3'>
                        <Separator orientation="vertical" />
                        <MenuLink />
                    </div>
                </div>
                <div className='flex items-center h-7 space-x-4'>
                    <Link className='textHover text-sm font-semibold uppercase px-4 py-2 border border-black/10 dark:border-white/10 rounded-md bg-onyx-50 dark:bg-white/5' href='/login'>Login</Link>
                    <Separator orientation="vertical" />
                    <ModeToggle />
                </div>
            </nav>
        </header>
    )
}

export default Navigation