import NextAuth from "next-auth"
import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaNeon } from "@prisma/adapter-neon"
import { Pool } from "@neondatabase/serverless"
import authConfig from "./config/auth.config"

export const BASE_PATH = "/api/auth";

const neon = new Pool({
    connectionString: process.env.DATABASE_URL,
  })
  const adapter = new PrismaNeon(neon)
  const prisma = new PrismaClient()

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    secret: process.env.AUTH_SECRET,
    callbacks:{
        async session({session, user}){
            session.user.id = user.id
            return session
        },
    },
    ...authConfig,
})