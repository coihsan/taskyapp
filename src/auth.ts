import NextAuth from "next-auth"
import { db } from "./lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaNeon } from "@prisma/adapter-neon"
import { Pool } from "@neondatabase/serverless"
import authConfig from "./auth.config"
import { getUserById } from "./lib/data/user"
const neon = new Pool({
  connectionString: process.env.AUTH_POSTGRES_PRISMA_URL,
})
const adapter = new PrismaNeon(neon)

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(db),
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  basePath: "/api/auth",

  // CALLBACKS
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token }) {
      if(token.sub && session.user){
        session.user.id = token.sub
      }
      if(token.role && session.user){
        session.user.role = token.role
      }
      return session
    },
    async jwt({ token }) {
      if (!token.sub) return token
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token
      token.role = existingUser.role
      return token
    }
  },

  pages: {
    signIn: "/sign-in",
  },
  ...authConfig,
})