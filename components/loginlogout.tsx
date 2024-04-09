
import React from 'react'
import { LogIn, LogOut } from 'lucide-react'
import { useSession, signIn, signOut } from 'next-auth/react'

import { Button } from '@/components/ui/button'
import Link from 'next/link';
import { getServerSession } from 'next-auth';

type Props = {}

export default async function LoginLogout({}: Props) {
  const session = await getServerSession()
  if (session) {
    return (
      <Link href="/api/auth/signout">
      <Button className='bg-blue-500 h-9'>
        <LogOut className='mr-2 h-4 w-4' /> 
      </Button>
    </Link>
    )
  }
  return (
     <></> 
  )
}
