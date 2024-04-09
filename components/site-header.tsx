import { MainNav } from '@/components/main-nav'
import LoginLogout from './loginlogout'
import { getServerSession } from 'next-auth'
import LoginRegister from './loginregister'
import { ChangeLocale } from '@/components/ChangeLocale';

export async function SiteHeader() {
  const session = await getServerSession()
  return (
    <header className='sticky top-0 z-50 w-full border-b border-border/40 bg-slate-300 bg-opacity-60  backdrop-blur-sm '>
      <div className='flex h-14  items-center px-4'>
        <MainNav />

        <div className='flex flex-1 items-center justify-between space-x-2 md:justify-end'>
          <div className='w-full flex-1 grow md:w-auto md:flex-none'></div>

          <ChangeLocale />
          {!session && <LoginRegister />}
        </div>
      </div>
    </header>
  )
}
