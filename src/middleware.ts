import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { redirectToSignIn } from "@clerk/nextjs/server";
import { NextRequest, NextResponse } from "next/server";

const isOnboardingRoute = createRouteMatcher(["/onboarding"])
const isPublicRoute = createRouteMatcher(["/site"])

export default clerkMiddleware((auth, req: NextRequest) => {
    const { userId, sessionClaims, redirectToSignIn } = auth();

    const url = req.nextUrl
    const searchParams = url.searchParams.toString()
    let hostname = req.headers

    if (userId && isOnboardingRoute(req)) {
      return NextResponse.next();
    }

    if (url.pathname === '/' || (url.pathname === '/site' && url.host === process.env.NEXT_PUBLIC_DOMAIN)){
      return NextResponse.rewrite(new URL('/site', req.url))
    }

    if (!userId && !isPublicRoute(req))
      return redirectToSignIn({ returnBackUrl: req.url });

    if (userId && !sessionClaims?.metadata?.onboardingComplete) {
      const onboardingUrl = new URL("/onboarding", req.url);
      return NextResponse.redirect(onboardingUrl);
    }

    // If the user is logged in and the route is protected, let them view.
    if (userId && !isPublicRoute(req)) return NextResponse.next();
  }
);

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};