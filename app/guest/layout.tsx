// src/app/protected/layout.tsx

import { redirect } from "next/navigation"
import { auth } from "@/auth"

export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await auth()

  //if (!session) return redirect("/signin")

  return <>{children}</>
}
