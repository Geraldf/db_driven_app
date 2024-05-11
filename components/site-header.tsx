import { auth } from "@/auth"

import { ChangeLocale } from "@/components/ChangeLocale"
import { MainNav } from "@/components/main-nav"
import Logout from "@/app/logout"

import LoginRegister from "./loginregister"

export async function SiteHeader() {
  const session = await auth()
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-slate-300 bg-opacity-60  backdrop-blur-sm ">
      <div className="flex h-14  items-center px-4">
        <MainNav />

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 grow md:w-auto md:flex-none"></div>

          <ChangeLocale />
          <LoginRegister />
          <Logout />
        </div>
      </div>
    </header>
  )
}
