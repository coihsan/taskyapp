import { NextRequest } from "next/server"
import authConfig from "./config/auth.config"
import NextAuth from "next-auth"
export { auth as middleware } from "@/auth"

const { auth } = NextAuth(authConfig)

export default auth(async function middleware(req: NextRequest) {
  // Your custom middleware logic goes here
})

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
}