import { db } from "@/lib/db"
import { userProps } from "@/lib/types/types";
import { clerkClient, currentUser } from "@clerk/nextjs/server"
import { User } from "@prisma/client";

export const getUserDetails = async () =>{
    const user = await currentUser();

    const userInfo = await db.user.findUnique({
        where: {
            clerkId: user?.id
        }
    })
    const userDetail = userInfo

    const name = `${userDetail?.fullName}`
    const avatar = userDetail?.imageUrl
    const email = userDetail?.emailUser
    const userId = userDetail?.id

    return {name, avatar, email, userId}
}

// UPDATE USER INFORMATION

export const updateUser = async (user: Partial<User>) => {
    const response = await db.user.update({
      where: { emailUser: user.emailUser },
      data: { ...user },
    })
  
    return response
  }

  export const getAuthUserDetails = async () => {
    const user = await currentUser()
    if (!user) {
      return
    }
  
    const userData = await db.user.findUnique({
      where: {
        emailUser: user.emailAddresses[0].emailAddress,
      },
      include: {
        organizationUser: true,
        Permissions: true,
      },
    })
  
    return userData
  }


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
            fullName: user.fullName,
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
          organizationUser: true,
          projectsUser: true
        }
    })
    return getUser
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
          organizationUser: true,
          projectsUser: true
        }
    })
    return deleteUSer
}