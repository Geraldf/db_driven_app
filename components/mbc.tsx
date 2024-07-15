"use client"

import React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "@/i18n/client"
import { House } from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "./ui/breadcrumb"

type Props = {}

export default function MBC({}: Props) {
  const { t } = useTranslation("common")
  const p = usePathname()
  const slices = p.split("/").filter((s) => s !== "")
  console.log(t("guests.title"))
  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">
              <House width={12} height={12} />
            </Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {slices.map((slice, i) => (
          <div key={i}>
            <BreadcrumbItem>
              <BreadcrumbLink key={i} asChild>
                <Link href={`/${slices.slice(0, i + 1).join("/")}`}>
                  {t(`${slices.slice(0, i + 1).join(".")}.title`)}
                </Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </div>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
