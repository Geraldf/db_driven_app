"use client"

// src/app/posts/create/page.tsx
import React, { useActionState, useEffect, useState } from "react"
import { useTranslation } from "@/i18n/client"
import { guestAdressModel } from "@/prisma/zod"
import { EMPTY_FORM_STATE, FormState } from "@/utils/to-form-state"
import { guestAdress } from "@prisma/client"
import { AlertCircle } from "lucide-react"

import { useFormReset } from "@/hooks/use-form-reset"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
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

import { getAddress, updateAddress } from "./actions"

function Page({ params }: { params: { id: string } }) {
  const { id } = params
  const [address, setAddress] = useState(null as null | guestAdress)
  const { t } = useTranslation("common")
  const [formState, formAction] = useActionState(
    updateAddress,
    EMPTY_FORM_STATE
  )

  const formRef = useFormReset(formState as FormState)

  useEffect(() => {
    getAddress(id)
      .then((res) => setAddress(res))
      .catch((error) => {
        console.error(error)
      })
  }, [id]) // This is the new line
  return (
    <ContentLayout title={t("guest.new.title")}>
      <MBC />
      <div className="flex justify-center">
        <div className="grid-cols-1 grid-rows-2 gap-4">
          <Card className="w-max">
            <CardHeader className="pb-1">
              <CardTitle>{t("guest.edit.title")}</CardTitle>
              <CardDescription>{t("guest.edit.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <FormForm
                schema={guestAdressModel}
                formAction={formAction}
                formRef={formRef}
                formState={formState}
                className="mt-2 grid grid-flow-row grid-cols-3 gap-4 rounded-md p-4 pt-2"
                data={address}
              ></FormForm>
            </CardContent>
          </Card>

          {"status" in formState && formState.status === "ERROR" && (
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
