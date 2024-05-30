import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import type { NextAuthConfig } from "next-auth"

import MyMailer from "./actions/SendMail"

const prisma = new PrismaClient()

export default {
  adapter: PrismaAdapter(prisma),
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
