import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import type { NextAuthConfig } from "next-auth"

import MyMailer from "./actions/SendMail"

const prisma = new PrismaClient()

export default {
  adapter: PrismaAdapter(prisma),
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.id = user.id
      }
      return token
    },
    session({ session, token }) {
      session.user.id = token.id as string
      return session
    },
  },
  providers: [
    MyMailer({
      id: "http-email",
      from: process.env.EMAIL_FROM!,
    }),
  ],
  pages: {
    verifyRequest: "/verifyrequest", // (used for check email message)
    signIn: "/signin",
  },
} satisfies NextAuthConfig
