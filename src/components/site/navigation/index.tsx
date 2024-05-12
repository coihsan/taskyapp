import Image from 'next/image'
import { UserButton } from '@clerk/nextjs'
import UserAuth from '@/components/global/userAuth'
import { dark } from '@clerk/themes';
import Link from 'next/link'
import { ModeToggle } from '@/components/global/ModeToggle';

const Navigation = () =>{
    return (
        <header className='mx-auto w-full border-b-2 border-white/20'>
            <nav className="flex items-center justify-between w-full max-w-screen-xl mx-auto px-4 py-4 bg-white-30">
                <Link className='flex items-center gap-2' href={'/'}>
                    <Image src={'/logo.svg'} alt={'logo'} width={130} height={40} />
                    <span className='border border-white/10 bg-white/5 px-1 py-px text-onyx-500 rounded-full text-[10px] font-bold'>Beta</span>
                </Link>
                <div className='flex items-center gap-1'>
                    <UserAuth />
                    <UserButton appearance={{baseTheme: dark}}/>
                    <ModeToggle />
                </div>
            </nav>
        </header>
    )
}

export default Navigation