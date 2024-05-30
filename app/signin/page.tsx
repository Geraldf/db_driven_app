"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useTranslation } from "@/i18n/client"
import { Schema, SchemaInputType } from "@/schemas/loginSchema"
import { AlertCircle } from "lucide-react"
import { signIn } from "next-auth/react"
import { SubmitHandler } from "react-hook-form"

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { toast } from "@/components/ui/use-toast"
import Form from "@/components/Form"

function Page() {
  const router = useRouter()
  const [err, setErr] = useState<string | null>(null)
  const { i18n, t } = useTranslation("common")
  const sendMail = async () => {
    const formData = {
      name: "Gerald",
      email: "gerald@fuchsclan.de",
      message: "test",
    }
    try {
      const response = await fetch("/api/mail", {
        method: "post",
        body: JSON.stringify(formData),
      })
      if (response.ok) {
        // Function logic here
        location.reload()
      } else {
        const data = await response.json()
        setErr(data.error.response as string)
      }

      //router.refresh()
    } catch (err) {
      setErr(err as string)
    }
  }
  const onSubmit: SubmitHandler<SchemaInputType> = async (data) => {
    const formData = new FormData()
    let res

    const { email } = data

    // Generate magic link

    res = await signIn("http-email", { email, callbackUrl: "/" })
  }
  return (
    <div className="flex justify-center">
      <Card className="w-[350px] ">
        <CardHeader className="pb-1">
          <CardTitle>{t("login.login")}</CardTitle>
          <CardDescription>{t("login.subtitle")}</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Form
            schema={Schema}
            onSubmit={onSubmit}
            className="mt-2  grid grid-flow-row grid-cols-1 gap-4 rounded-md p-4 pt-2"
            //className='grid grid-cols-1 gap-1 sm:grid-cols-2 lg:max-w-screen-lg lg:grid-cols-4'
          ></Form>
          {err && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertTitle>{t(`wronglogin.title`)}</AlertTitle>
              <AlertDescription>{t(`wronglogin.${err}`)}</AlertDescription>
              <AlertDescription>
                {" "}
                {err === "noverification" && (
                  <Button className="mt-4 h-9  bg-blue-500" onClick={sendMail}>
                    {t("wronglogin.sendagain")}
                  </Button>
                )}
              </AlertDescription>
            </Alert>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

export default Page
