"use client"

import { get } from "http"
import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "@/i18n/client"
import { guestAdress } from "@prisma/client"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import MBC from "@/components/mbc"
import { getAddresses } from "@/app/guest/list/actions"
import PlaceholderContent from "@/app/placeholder-content"

export default function Page() {
  const [addresses, setAddresses] = useState([] as guestAdress[])
  const { t } = useTranslation("common")
  const p = usePathname()
  const slices = p.split("/").filter((s) => s !== "")

  useEffect(() => {
    getAddresses().then((data: guestAdress[]) => {
      setAddresses(data)
    })
  }, [])
  return (
    <ContentLayout title={t(`${slices.join(".")}.title`)}>
      <MBC />
      <PlaceholderContent />
    </ContentLayout>
  )
}
