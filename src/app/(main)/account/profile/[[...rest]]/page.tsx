import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getUserDetails } from '../../_action/account-action';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const ProfilePage = async () =>{
    const {name, avatar, email, userId} = await getUserDetails()

    return(
        <div className='p-6'>
            <p className='text-lg font-semibold'>Profile</p>
            <h2 className='text-3xl font-bold'>Hello, {name} </h2>
            <p>{email}</p>
            <div className='py-6 flex items-center'>
            </div>
            <Image className='rounded-full aspect-square border w-max' 
                src={`${avatar}`} 
                width={200} 
                height={200} 
                alt={`${userId}`} 
            />

            <Button type='submit'>Save</Button>
        </div>
    )
}

export default ProfilePage