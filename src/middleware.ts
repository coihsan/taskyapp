export { auth as middleware } from "@/auth"
import authConfig from "@/config/auth.config"
import NextAuth from "next-auth"
import { NextRequest } from "next/server"

import { 
  apiAuthPrefix,
  publicRoutes,
  authRoutes,
  DEFAULT_LOGIN_REDIRECT
 } from "../routes"

const { auth } = NextAuth(authConfig)

export default auth((req) =>{{
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isApiAuthRoutes = nextUrl.pathname.startsWith(apiAuthPrefix)
}})

export const config = {
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};