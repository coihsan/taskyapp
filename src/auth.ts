import NextAuth from "next-auth"
import { db } from "./lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaNeon } from "@prisma/adapter-neon"
import { Pool } from "@neondatabase/serverless"
import authConfig from "./config/auth.config"

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
  callbacks: {
    async redirect({ url, baseUrl }) {
      return baseUrl;
    }
  },
  pages: {
    signIn: "/auth/sign-in",
  },
  ...authConfig,
})