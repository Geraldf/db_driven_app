import NextAuth from "next-auth"

import authConfig from "./auth.config"

export const { handlers,  signOut, auth } = NextAuth({
  session: { strategy: "jwt" },
  ...authConfig,
})
