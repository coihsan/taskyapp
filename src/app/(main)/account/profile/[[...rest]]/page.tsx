import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getUserDetails } from '../../_action/account-action';

const ProfilePage = async () =>{
    const {name, avatar, email, userId} = await getUserDetails()

    return(
        <div className='p-6'>
            <p className='text-lg font-semibold'>Profile</p>
            <h2 className='text-3xl font-bold'>Hello, {name} </h2>
            <p>{email}</p>
            <div className='py-6 flex items-center'>
            </div>
            <div className='bg-white/50 p-1 rounded-full w-max'>
                <Image className='rounded-full aspect-square border' 
                src={`${avatar}`} 
                width={200} 
                height={200} 
                alt={`${userId}`} 
                />
            </div>

            <Button type='submit'>Save</Button>
        </div>
    )
}

export default ProfilePage