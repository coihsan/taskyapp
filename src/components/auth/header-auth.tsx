import Image from 'next/image';
import React from 'react'
import Logo from '../global/logo';
interface HeaderAuthProps {
    label: string,
    description: string
}

const HeaderAuth = ({ label, description }: HeaderAuthProps) => {
    return (
        <div className="w-full flex flex-col gap-y-4 items-center">
            <Logo />
            <div className='mt-4'>
                <h1 className="text-2xl font-semibold">{label}</h1>
                <p className='text-muted-foreground text-sm'>{description}</p>
            </div>
        </div>
    )
}

export default HeaderAuth;