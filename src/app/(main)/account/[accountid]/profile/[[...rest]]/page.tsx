import React from 'react'
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { getUserDetails } from '../../../_action/account-action';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const ProfilePage = async () =>{
    const {name, avatar, email, userId} = await getUserDetails()

    return(
        <div className='p-6'>
            <p className='text-lg font-semibold'>Public profile</p>
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
            <Card>
                <CardHeader>
                    <CardTitle className='text-lg font-semibold text-destructive'>Delete your account</CardTitle>
                    <CardDescription>Once you delete your account, there is no going back. Please be certain.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Button type='submit' variant={'destructive'}>Delete your account</Button>
                </CardContent>
            </Card>
        </div>
    )
}

export default ProfilePage