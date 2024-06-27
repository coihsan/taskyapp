import { db } from '@/lib/db'
import { clerkClient, currentUser, auth, getAuth } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation'
import { User } from "@prisma/client";
import { v4 } from 'uuid';
import type { NextApiRequest, NextApiResponse } from "next";
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
    const user = await currentUser();

    const organizationId = await db.organization.findMany({
        where: {
            userId : `${user?.id}`
        },
        select:{
            logo: true,
            name: true,
            id: true
        }
    })

    const organizationData = organizationId
    const organizationName = organizationData.map((organization) => organization.name)
    const organizationLogo = organizationData.map((organization) => organization.logo)

    if (!organizationId){
        return {error : "Not found"}
    }
    return {organizationName, organizationLogo}

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
