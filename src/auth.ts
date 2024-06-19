import NextAuth, { User, NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google"
import type { Provider } from "next-auth/providers"
import { PrismaNeon } from "@prisma/adapter-neon"
import { Pool } from "@neondatabase/serverless"
import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"
import authConfig from "./config/auth.config";

export const BASE_PATH = "/api/auth";

const neon = new Pool({
    connectionString: process.env.AUTH_POSTGRES_PRISMA_URL,
  })
  const adapter = new PrismaNeon(neon)
  const prisma = new PrismaClient()


export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  secret: process.env.AUTH_SECRET,
  basePath: BASE_PATH,
  callbacks: {
    async session({ session, user }) {
      session.user.id = user.id
      return session
    },
  },
  pages: {
    signIn: "/sign-in",
  },
  ...authConfig
})