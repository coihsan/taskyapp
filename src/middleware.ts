import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

const isPublicRoute = createRouteMatcher([
    '/', 
    '/sign-in(.*)', 
    '/sign-up(.*)',
    '/demo',
    '/policy',
]);

export default clerkMiddleware((auth, request) => {
  const user = auth()

    if(!isPublicRoute(request)) {
      auth().protect();
    }

    // if(user && user.orgPermissions){
    //   return user.orgPermissions
    // }

  });

export const config = {
  matcher: [ '/((?!.*\\..*|_next).*)', '/', '/(api|trpc)(.*)'],
};