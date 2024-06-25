import { useUser, useAuth, useClerk } from "@clerk/clerk-react";
import { db } from './db'
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { redirect } from 'next/navigation'
import { User } from "@prisma/client";


export const getAuthUserDetails = async () =>{
    const { isLoaded, isSignedIn, user } = useUser()
    if (!isLoaded || !isSignedIn) {
        return null
    }
    const fullName = user.fullName
    const username = user.username
    const email = user.id
    const imageUrl = user.imageUrl

}

export const createTeamUser = async (projectsID: string, user: User) => {
    if (user.role === 'ADMIN') return null
    const response = await db.user.create({ data: { ...user } })
    return response
}

export const updateUser = async (user: Partial<User>) => {
    const response = await db.user.update({
      where: { emailUser: user.emailUser },
      data: { ...user },
    })
  
    await clerkClient.users.updateUserMetadata(response.clerkId, {
      privateMetadata: {
        role: user.role || 'SUBACCOUNT_USER',
      },
    })
  
    return response
  }

  export const deleteUser = async (userId: string) => {
    await clerkClient.users.updateUserMetadata(userId, {
      privateMetadata: {
        role: undefined,
      },
    })
    const deletedUser = await db.user.delete({ where: { id: userId } })
  
    return deletedUser
  }
  
  export const getUser = async (id: string) => {
    const user = await db.user.findUnique({
      where: {
        clerkId,
      },
    })
  
    return user
  }