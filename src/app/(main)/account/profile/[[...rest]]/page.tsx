"use server";
import React, { useEffect, useState } from 'react'
import { db } from '@/lib/db';
import { useUser } from "@clerk/nextjs";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { Toggle } from "@/components/ui/toggle"
import { currentUser } from '@clerk/nextjs/server';
const ProfilePage = async () =>{
    const user = await currentUser()

    const userInfo = await db.user.update({
      where: {clerkId: user?.id},
      data:{
        firstName: `${user?.firstName}`,
        lastName: `${user?.lastName}`,
        imageUrl: `${user?.imageUrl}`,
      }
    })

    return(
        <div className='p-6'>
            <p className='text-lg font-semibold'>Profile</p>
            <h2 className='text-3xl font-bold'>Hello, {userInfo.firstName} </h2>
            <div className='py-6 flex items-center'>
                {/* <span>Name</span>
                <Input disabled={enabled} onChange={handleChange} className='w-max border-0 focus-none ring-0' type="email" defaultValue={`${user.fullName}`}  />
                <div className='space-x-1'>
                    <Button size={'sm'} variant={enabled ? 'ghost' : 'default'} onClick={() => setIsEnable(false)}>{enabled ? "Edit" : "Save"}</Button>
                    {enabled ? null : <Button size={'sm'} variant={'destructive'} onClick={() => setIsEnable(true)}>Cancel</Button>}
                </div> */}
            </div>
            <Image className='rounded-lg' 
            src={`${userInfo.imageUrl}`} 
            width={300} 
            height={300} 
            alt={`${userInfo.id}`} 
            />

            <Button type='submit'>Save</Button>
        </div>
    )
}

export default ProfilePage