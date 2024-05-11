import { EmailConfig, EmailUserConfig } from "@auth/core/providers"
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import type { NextAuthConfig } from "next-auth"

import { sendVerificationRequest } from "./actions/resendVerification"
import MyMailer from "./actions/SendMail"

const prisma = new PrismaClient()

export default {
  adapter: PrismaAdapter(prisma),
  providers: [
    MyMailer({
      id: "http-email",
      from: "guestapp@fuchsclan.de",
    }),
  ],
  pages: {
    verifyRequest: "/verifyrequest", // (used for check email message)
  },
} satisfies NextAuthConfig
