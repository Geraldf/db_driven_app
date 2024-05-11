import NextAuth from "next-auth"

import authConfig from "./auth.config"

export const { auth: middleware } = NextAuth(authConfig)
// Read more: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
export const config = {
  matcher: ["/((?!register|api|MySignIn|test|verifyrequest|$).*)"],
}
