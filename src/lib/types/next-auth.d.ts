import NextAuth, { type DefaultSession } from "next-auth";
import { JWT } from "next-auth/jwt"
import { Role } from "@prisma/client";

export type ExtendUser = DefaultSession["user"] & {
    email: string,
    password: string,
    role: Role
}
declare module "next-auth"{
    interface Session {
        user : ExtendUser
    }

    interface User {
        name: string,
        email: string,
        password: string,
        image: string,
        role: Role
    }
    interface Account {
        id: string
    }
    interface Profile {
        provider: string
    }
    interface Session {
        user?: User
    }

    // interface AdapterUser {
    //     role: Role,
    //     password: string
    // }

}

 
declare module "next-auth/jwt" {
  interface JWT {
    idToken?: string,
  }
}