'use server'
import {db} from "@/lib/db";
import { clerkClient, currentUser, auth, getAuth } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation'
import { Projects, Role, User } from "@prisma/client";
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
    title: string, 
    description: string, 
    dueDate: string, 
    organizationId: string) => {

    const user = await currentUser();

    if(user){
        const newWorkspace = await db.projects.create({
            data:{
                userId: user.id,
                title,
                description,
                dueDate,
                organizationId
            }
        })
        if (newWorkspace) return { message: 'Workspace created' }
        return { message: 'Oops! try again' }
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

// Get all workspace of user

export const getAllSpace = async () =>{
    const user = await currentUser()
    
    const organization = await db.projects.findMany({
        where:{
            userId: user?.id
        }
    })

    return organization.map((list) => ({
        userId: list.userId,
        title: list.title,
    }))
}


