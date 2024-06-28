'use server'
import {db} from "@/lib/db";
import { unstable_noStore as noStore } from 'next/cache';
import { clerkClient, currentUser, auth, getAuth } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation'
import { User } from "@prisma/client";
import { v4 } from 'uuid';

export const createNewOrganization = async (name: string, description: string, logo: string) =>{
    const user = await currentUser();

    if(user){
        const newOrganization = await db.organization.create({
            data:{
                userId: user.id,
                name,
                description,
                logo
            }
        })
        if (newOrganization) return { message: 'Organization created' }
        return { message: 'Oops! try again' }
    }
    return {name, description, logo}
}

export const getAllOrganization = async () =>{
    const user = await currentUser()
    if(!user){
        return null
    }
    const organization = await db.organization.findFirst({
        where: {
            userId: user.id,
        },
    })
    const NameOrg = organization?.name
    const DescriptionOrg = organization?.description
    const LogoOrg = organization?.logo

    return {NameOrg, DescriptionOrg, LogoOrg}
}

export const getAllSpace = async () => {
    const user = await currentUser();

    if(user){
        const project = await db.projects.findMany({
            where: {
                userId: `${user.id}`
            },
            select: {title: true, description: true, id: true}
        })

        if (project) return project
    }
}
