import React from "react"
import Link from "next/link"
import { auth } from "@/auth"
import { LogOut } from "lucide-react"

import { Button } from "@/components/ui/button"

type Props = {}

export default async function Logout({}: Props) {
  const session = await auth()
  if (session) {
    return (
      <Link href="/api/auth/signout">
        <Button className="h-9 bg-blue-500">
          <LogOut className="mr-2 h-4 w-4" />
        </Button>
      </Link>
    )
  }
  return <></>
}
