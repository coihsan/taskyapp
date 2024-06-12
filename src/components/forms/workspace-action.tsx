'use server'
import { prisma } from '@/lib/db'
import { auth, currentUser } from '@clerk/nextjs/server'

declare interface globalTypes {
    name: string;
    email: string;
    id: string;
    description: string;
    logo: string;
}

export const onProjects = async ({name, description} : Partial<globalTypes>) =>{
    const user = currentUser()
    const { userId } = auth()

    return(
        <div>
            hello
        </div>
    )
}