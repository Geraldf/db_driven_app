import React from 'react'
import { LogIn, UserPlus,LogOut } from 'lucide-react'
import { useSession, signIn, signOut } from 'next-auth/react'

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getServerSession } from 'next-auth'

type Props = {}

export default async function LoginRegister({}: Props) {
  const session = await getServerSession()
  if (!session) {
    return (
      <div className='flex gap-2'>
        {!session && (
          <>
            <Link href='/api/auth/signin'>
              <Button className='h-9 bg-blue-500'>
                <LogIn className='mr-2 h-4 w-4' /> Login
              </Button>
            </Link>
            <Link href='/user/register'>
              <Button className='h-9 bg-blue-500'>
                <UserPlus className='mr-2 h-4 w-4' /> Neuer Nutzer
              </Button>
            </Link>{' '}
          </>
        )}
        {session && (
          <Link href='/api/auth/signout'>
          <Button className='h-9 bg-blue-500'>
            <LogOut className='mr-2 h-4 w-4' /> logout
          </Button>
        </Link>
        )}
      </div>
    )
  }
  return <></>
}
