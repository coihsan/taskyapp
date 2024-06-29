"use server"

import { clerkClient, currentUser } from '@clerk/nextjs/server'
import { db } from './db'
import { redirect } from 'next/navigation'

export const getSubDomainName = async (subDomainName: string) =>{
    const response = await db.organization.findUnique({
        where:{
            subDomainName,
        },
        include:{
            projects: true
        }
    })
    return response
}