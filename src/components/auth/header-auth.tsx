import Image from 'next/image';
import React from 'react'
interface HeaderAuthProps {
    label: string,
    headerCard: string
}

const HeaderAuth = ({ label }: HeaderAuthProps) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center">
            <Image className='pb-2' src={'/logo.svg'} width={128} height={128} alt={'Logo'} />
            <h1 className="text-3xl font-bold">Login</h1>
            <p className='text-muted-foreground text-sm'>{label}</p>
        </div>
    )
}

export default HeaderAuth;