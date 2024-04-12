import React from 'react'
import { LogIn, UserPlus,LogOut } from 'lucide-react'
import { useSession, signIn, signOut } from 'next-auth/react'
import {createTranslation} from '@/i18n/server';

import { Button } from '@/components/ui/button'
import Link from 'next/link'
import { getServerSession } from 'next-auth'

type Props = {}

export default async function LoginRegister({}: Props) {
  const session = await getServerSession()
  const {t} = await createTranslation('common');
  if (!session) {
    return (
      <div className='flex gap-2'>
        {!session && (
          <>
            <Link href='/api/auth/signin'>
              <Button className='h-9 bg-blue-500'>
                <LogIn className='mr-2 h-4 w-4' /> {t('login.login')}
              </Button>
            </Link>
            <Link href='/user/register'>
              <Button className='h-9 bg-blue-500'>
                <UserPlus className='mr-2 h-4 w-4' /> {t('login.register')}
              </Button>
            </Link>{' '}
          </>
        )}
        {session && (
          <Link href='/api/auth/signout'>
          <Button className='h-9 bg-blue-500'>
            <LogOut className='mr-2 h-4 w-4' /> {t('login.logout')}
          </Button>
        </Link>
        )}
      </div>
    )
  }
  return <></>
}
