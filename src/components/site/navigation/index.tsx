import Link from 'next/link'
import { ModeToggle } from '@/components/global/ModeToggle';
import Logo from '@/components/global/logo';

const Navigation = () =>{
    return (
        <header className='mx-auto w-full border-b-[1px] border-black/10 dark:border-white/10'>
            <nav className="flex items-center justify-between w-full max-w-screen-xl mx-auto px-4 py-4 bg-white-30">
                <Link className='flex items-center gap-2' href={'/'}>
                    <Logo />
                    <span className='border border-white/10 bg-white/5 px-1 py-px text-onyx-500 rounded-full text-[10px] font-bold'>Beta</span>
                </Link>
                <div className='flex items-center gap-1'>
                    <ModeToggle />
                </div>
            </nav>
        </header>
    )
}

export default Navigation