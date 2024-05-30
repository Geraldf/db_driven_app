import React from "react"
import Link from "next/link"
import { auth } from "@/auth"
import { createTranslation } from "@/i18n/server"
import { LogIn, LogOut, UserPlus } from "lucide-react"
import { signIn, signOut, useSession } from "next-auth/react"

import { Button } from "@/components/ui/button"

type Props = {}

export default async function LoginRegister({}: Props) {
  const session = await auth()
  console.log(session)
  const { t } = await createTranslation("common")
  if (!session) {
    return (
      <div className="flex gap-2">
        {!session && (
          <>
            <Link href="/signin">
              <Button className="h-9 bg-blue-500">
                <LogIn className="mr-2 h-4 w-4" /> {t("login.login")}
              </Button>
            </Link>
          </>
        )}
        {session && (
          <Link href="/api/auth/signout">
            <Button className="h-9 bg-blue-500">
              <LogOut className="mr-2 h-4 w-4" /> {t("login.logout")}
            </Button>
          </Link>
        )}
      </div>
    )
  }
  return <></>
}
