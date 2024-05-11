"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useSession } from "next-auth/react"

import { siteConfig } from "@/config/site"

import { Fox } from "./fox"
import LoginRegister from "./loginregister"
import { NavigationMenuDemo } from "./main-nav-2"

export function MainNav() {
  const { data: session, status } = useSession()
  return (
    <>
      <div className="mr-4 hidden font-sans md:flex">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <Fox className="h-6 w-6" />
          <span className="hidden font-bold sm:inline-block">
            {siteConfig.name}
          </span>
        </Link>
      </div>

      <div className="rounded-md bg-white ">
        {status === "authenticated" && <NavigationMenuDemo />}
      </div>
    </>
  )
}
