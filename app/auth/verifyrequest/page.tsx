"use client"

import { useTranslation } from "@/i18n/client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const VerifyRequestPage = () => {
  const { i18n, t } = useTranslation("common")
  return (
    <>
      <div className="flex justify-center">
        <Card className="w-[350px] ">
          <CardHeader className="pb-1">
            <CardTitle>{t("login.verifytitle")}</CardTitle>
            <CardDescription>{t("login.verifysubtitle")}</CardDescription>
          </CardHeader>
          <CardContent className="p-0"></CardContent>
        </Card>
      </div>
    </>
  )
}

export default VerifyRequestPage
