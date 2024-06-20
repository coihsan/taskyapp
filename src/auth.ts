import NextAuth from "next-auth"
import GitHub from "next-auth/providers/github"
import Google from "next-auth/providers/google"
import type { Provider } from "next-auth/providers"
import { PrismaClient } from "@prisma/client"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaNeon } from "@prisma/adapter-neon"
import { Pool } from "@neondatabase/serverless"

const neon = new Pool({
  connectionString: process.env.AUTH_POSTGRES_PRISMA_URL,
})
const adapter = new PrismaNeon(neon)
const prisma = new PrismaClient()
 
const providers: Provider[] = [
    GitHub({
        clientId: process.env.AUTH_GITHUB_ID,
        clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    Google ({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
]
 
export const providerMap = providers.map((provider) => {
  if (typeof provider === "function") {
    const providerData = provider()
    return { id: providerData.id, name: providerData.name }
  } else {
    return { id: provider.id, name: provider.name }
  }
})
 
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers,
  adapter: PrismaAdapter(prisma),
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
})