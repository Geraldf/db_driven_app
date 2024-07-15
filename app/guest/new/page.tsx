"use client"

// src/app/posts/create/page.tsx
import { useActionState, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useTranslation } from "@/i18n/client"
import { guestAdressModel } from "@/prisma/zod"
import { EMPTY_FORM_STATE } from "@/utils/to-form-state"
import { AlertCircle } from "lucide-react"

import { useFormReset } from "@/hooks/use-form-reset"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ContentLayout } from "@/components/admin-panel/content-layout"
import { FormForm } from "@/components/FormForm"
import MBC from "@/components/mbc"

import { addAddress } from "./actions"

function Page() {
  const { t } = useTranslation("common")
  const pathname = usePathname()
  const [formState, action] = useActionState(addAddress, EMPTY_FORM_STATE)
  const formRef = useFormReset(formState)
  return (
    <ContentLayout title={t("guest.new.title")}>
      <MBC />
      <div className="flex justify-center">
        <div className="grid-cols-1 grid-rows-2 gap-4">
          <Card className="w-max">
            <CardHeader className="pb-1">
              <CardTitle>{t("guest.new.title")}</CardTitle>
              <CardDescription>{t("guest.new.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <FormForm
                schema={guestAdressModel}
                formAction={action}
                formRef={formRef}
                formState={formState}
                className="mt-2 grid grid-flow-row grid-cols-3 gap-4 rounded-md p-4 pt-2"
              ></FormForm>
            </CardContent>
          </Card>

          {formState.status == "ERROR" && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{formState.message}</AlertDescription>
            </Alert>
          )}
        </div>
      </div>
    </ContentLayout>
  )
}

export default Page
