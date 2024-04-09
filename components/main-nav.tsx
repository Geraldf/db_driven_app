
"use client"
import * as React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

import { siteConfig } from '@/config/site'
import { Fox } from './fox'
import { NavigationMenuDemo } from './main-nav-2'
import { useSession } from 'next-auth/react'
import LoginRegister from './loginregister'

export function MainNav() {
  const { data: session, status } = useSession()
  return (
    <>
      <div className='mr-4 hidden font-sans md:flex'>
        <Link href='/' className='mr-6 flex items-center space-x-2'>
          <Fox className='h-6 w-6' />
          <span className='hidden font-bold sm:inline-block'>
            {siteConfig.name}
          </span>
        </Link>
      </div>
    

      <div className='bg-white rounded-md '>
        {(status === "authenticated")&&<NavigationMenuDemo />}
     
      </div>

    </>
   
  )
}
