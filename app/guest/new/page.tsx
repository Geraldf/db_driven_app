"use client"

// src/app/posts/create/page.tsx
import { useState } from "react"
import { redirect, useRouter } from "next/navigation"
import { auth } from "@/auth"
import { useTranslation } from "@/i18n/client"
import { guestAdressModel } from "@/prisma/zod"
import { AlertCircle } from "lucide-react"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { FormForm } from "@/components/FormForm"

function Page() {
  const router = useRouter()
  const [err, setErr] = useState<string | null>(null)
  const { i18n, t } = useTranslation("common")

  async function addAddress(formData: FormData) {
    const rawFormData = Object.fromEntries(formData)

    const result = await fetch("/api/address", {
      method: "POST",
      body: JSON.stringify(rawFormData),
    })
    const d = await result.json()

    if (result.ok) {
      redirect("/")
    } else {
      if ((d.code = "P2002")) {
        setErr(t("guest.new.duplicate"))
      } else {
        setErr(d.error)
      }
    }

    // redirect to new page

    // mutate data
    // revalidate cache
  }
  return (
    <div className="flex justify-center">
      <div className="grid-cols-1 grid-rows-2  gap-4">
        <Card className="w-max">
          <CardHeader className="pb-1">
            <CardTitle>{t("guest.new.title")}</CardTitle>
            <CardDescription>{t("guest.new.subtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <FormForm
              schema={guestAdressModel}
              //onSubmit={submitData}
              formAction={addAddress}
              //className='grid grid-cols-1 gap-1 sm:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-4'
              className="mt-2  grid grid-flow-row grid-cols-3 gap-4 rounded-md p-4 pt-2"
            ></FormForm>
          </CardContent>
        </Card>
        {err && (
          <Alert variant="destructive">
            <AlertCircle className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{JSON.stringify(err)}</AlertDescription>
          </Alert>
        )}
      </div>
    </div>
  )
}

export default Page
