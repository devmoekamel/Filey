import { clerkMiddleware  } from "@clerk/nextjs/server";

export default clerkMiddleware({
  signInUrl:"/sign-in",

});

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)",
     "/",
      "/(api|trpc)(.*)",
      "/file-preview/([a-zA-Z0-9]+)"],
      
};