'use server'
import {db} from "@/lib/db";
import { clerkClient, currentUser, auth, getAuth } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation'
import { User } from "@prisma/client";
import { v4 } from 'uuid';

// Create a new organization

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

// Create a new workspace

export const createNewWorkspace = async (
    organizationId: string,
    title: string,
    description: string,
    dueDateFrom: string,
    dueDateTo: string,
    id: string,
    userId: string
    
    ) =>{
    const user = await currentUser()

    if(user){
        const createSpace = await db.projects.create({
            where: {
                userId: user.id
            },
            data:{
                organizationId: organizationId,
                title: title,
                id: id,
                description: description,
                dueDateFrom: dueDateFrom,
                dueDateTo: dueDateTo,
                userId: userId
            }
        })
        return createSpace
    }
}

// Get all organization of user
export const getAllOrganization = async () =>{
    const user = await currentUser()
    
    const organization = await db.organization.findMany()

    return organization.map((list) => ({
        id: list.id,
        name: list.name,
        description: list.description,
        logo: list.logo
    }))
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
