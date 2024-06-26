import { db } from "../db";
import { clerkClient, currentUser } from "@clerk/nextjs/server";
import { User } from "@prisma/client";
import { z } from 'zod'

export const checkUser = async () =>{
    const user = await currentUser()

    // check user logged in or not
    if(!user){
        return null
    };
    // if the user is already in the database
    const loggedInUser = await db.user.findUnique({
        where: {
            clerkId: user.id
        }
    })
    if(loggedInUser){
        return loggedInUser
    }

    // if the user is not in the database, create a new user

    const createUser = await db.user.create({
        data:{
            clerkId: user.id,
            emailUser: user.emailAddresses[0].emailAddress,
            firstName:`${ user.firstName}`,
            lastName: `${user.lastName}`,
            imageUrl: user.imageUrl,
        }
    })
    return createUser
}

// GET USER INFORMATION 

export const getUserInformation = async (id: string) =>{
    const user = await currentUser()
    if (!user) {
        return null
      }

    const getUser = await db.user.findUnique({
        where: {
            emailUser: user.emailAddresses[0].emailAddress,
        },
        include:{
            organization: true,
            projects: true
        }
    })
    return getUser
}

// UPDATE USER INFORMATION

export const updateUser = async (user: Partial<User>) =>{
    const response = await db.user.update({
        where: {
            emailUser: user.emailUser
        },
        data: {
            ...user
        }
    })
    await clerkClient.users.updateUserMetadata(response.clerkId, {
        privateMetadata: {
          role: user.role || 'ADMIN',
        },
      })
    return response
}


// Delete User Account
export const setDeleteUser = async () =>{
    const user = await currentUser()

    if(!user){
        return null
    }

    const deleteUSer = await db.user.delete({
        where: {
            clerkId: user.emailAddresses[0].emailAddress
        },
        include:{
            organization: true,
            projects: true
        }
    })
    return deleteUSer
}