import type { NextAuthConfig } from 'next-auth'

import { sendVerificationRequest } from './actions/sendVerivicationRequest'

import Resend from '@auth/core/providers/resend'

export default {
  providers: [
    Resend({
      id: 'http-email',
      sendVerificationRequest
    })
  ]
} satisfies NextAuthConfig
