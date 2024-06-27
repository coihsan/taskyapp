import { db } from '@/lib/db'
import { clerkClient, currentUser, auth, getAuth } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation'
import { User } from "@prisma/client";
import { v4 } from 'uuid';

// export const createNewOrganization = async () =>{
//     const user = await currentUser();

//     const CreateOrganization = await db.organization.upsert({
//         where: {
//             userId: user?.id,
//             role: 'ADMIN',
//         },
//         create: {
//             userId: user?.id,
//         },
//         update: {
//             userId: user?.id
//         },
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
