import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
const isPublicRoute = createRouteMatcher([
    '/site',
    '/login',
    '/signup',
    '/dashboard',
    '/forum',
])
const isProtectedRoute = createRouteMatcher([
    '/dashboard(.*)',
    '/forum(.*)',
  ]);
  export default clerkMiddleware((auth, req) => {
    const url = req.nextUrl
    const searchParams = url.searchParams.toString()
    const pathWithSearchParams = `${url.pathname}${
      searchParams.length > 0 ? `?${searchParams}` : ''
    }`
    let hostname = req.headers
    if (
      url.pathname === '/' ||
      (url.pathname === '/site' && url.host === process.env.NEXT_PUBLIC_DOMAIN)
    ) {
      return NextResponse.rewrite(new URL('/site', req.url))
    }

    if (isProtectedRoute(req)) auth().protect();
  });

export const config = {
  matcher: ['/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};