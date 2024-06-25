"use client";
import React, { useEffect, useState } from 'react'
import { db } from '@/lib/db';
import { useUser } from "@clerk/nextjs";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Input } from "@/components/ui/input"
import { Toggle } from "@/components/ui/toggle"
const ProfilePage = () =>{
    const [enabled, setIsEnable] = useState(true);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState('');
    const [customName, setCustomName] = useState('');
    const [customBio, setCustomBio] = useState('');
    const [imageUrl, setImageUrl] = useState('');

    const { isLoaded, isSignedIn, user } = useUser();
    if (!isLoaded || !isSignedIn) {
        return null;
    }
    const updateUser = async (data : any) => {
        await user.update({
          firstName: data.firstName,
          lastName: data.lastName,
          unsafeMetadata: {
            customName: data.customName,
            customBio: data.customBio,
          },
        });
      };
      const handleChange = (event: any) => {
        setFirstName(event.target.value);
      };
    return(
        <div className='p-6'>
            <p className='text-lg font-semibold'>Profile</p>
            <h2 className='text-3xl font-bold'>Hello, {user.fullName} </h2>
            <div className='py-6 flex items-center'>
                <span>Name</span>
                <Input disabled={enabled} onChange={handleChange} className='w-max border-0 focus-none ring-0' type="email" defaultValue={`${user.fullName}`}  />
                <div className='space-x-1'>
                    <Button size={'sm'} variant={enabled ? 'ghost' : 'default'} onClick={() => setIsEnable(false)}>{enabled ? "Edit" : "Save"}</Button>
                    {enabled ? null : <Button size={'sm'} variant={'destructive'} onClick={() => setIsEnable(true)}>Cancel</Button>}
                </div>
            </div>
            <Image className='rounded-lg' 
            src={user.imageUrl} 
            width={300} 
            height={300} 
            alt={`${user.fullName}`} 
            />

            <Button type='submit' onClick={updateUser}>Save</Button>
        </div>
    )
}

export default ProfilePage