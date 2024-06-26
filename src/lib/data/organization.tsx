'use server';
import { db } from '../db'
import { clerkClient, currentUser, auth } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation'
import { User } from "@prisma/client";

export const getAllOrganization = async () =>{
    const user = await currentUser();

    const organizationId = await db.user.findMany({
        where: {
            clerkId: user?.id
        },
        include:{
            organization: true,
            projects: true
        }
    })

    if (!organizationId){
        return organizationId
    }
    return null

}

export const getAllSpace = async (title: string, description: string) => {
    const user = auth();

    if (!user){
        return {error: "Error"}
    }
    
    try {
        const spaceId = await db.projects.findMany({
            where: {
                id: `${user.userId}`
            },
            select:{
                title: true,
                description: true,
            }
        })
        return spaceId
    } catch (error) {
        return {error : "Not Found"}
    }
}