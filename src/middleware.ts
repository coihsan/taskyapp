import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
    '/', 
    '/sign-in(.*)', 
    '/sign-up(.*)',
    '/demo',
    '/policy',
]);

export default clerkMiddleware((auth, req, res) => {
  const user = auth();
  const url = req.nextUrl;
  const searchParams = url.searchParams.toString()
  const hostname = req.headers

  const pathWithSearchParams = `${url.pathname}${
    searchParams.length > 0 ? `?${searchParams}` : ''
  }`

  const customSubDomain = hostname
      .get('host')
      ?.split(`${process.env.NEXT_PUBLIC_DOMAIN}`)
      .filter(Boolean)[0]

    if(!isPublicRoute(req)) {
      auth().protect();
    }

    // if(!user.userId && !isPublicRoute(req)){

    //   return user.redirectToSignIn()
    // }

});

export const config = {
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};