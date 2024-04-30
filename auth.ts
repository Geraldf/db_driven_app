import Nodemailer from '@auth/core/providers/nodemailer'
import NextAuth from 'next-auth'
import { sendVerificationRequest } from './actions/sendVerivicationRequest'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import authConfig from './auth.config'

const prisma = new PrismaClient()
export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: 'jwt' },
  ...authConfig
})