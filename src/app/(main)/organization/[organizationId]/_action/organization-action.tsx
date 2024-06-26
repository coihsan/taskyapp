import { db } from '@/lib/db'
import { clerkClient, currentUser, auth, getAuth } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation'
import { User } from "@prisma/client";

// export const createNewOrganization = async () =>{
//     const user = await currentUser();

//     const CreateOrganization = await db.organization.create({
//         whe
//     })
// }

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
