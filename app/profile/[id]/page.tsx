import { loginAction } from "@/actions/loginAction"
import { createTranslation } from "@/i18n/server"
import { UserModel } from "@/prisma/zod"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default async function Page() {
  const { t } = await createTranslation("common")
  return (
    <main>
      <div className="flex justify-center">
        <div className="grid-cols-1 grid-rows-2  gap-4">
          <Card className="w-max">
            <CardHeader className="pb-1">
              <CardTitle>{t("guest.new.title")}</CardTitle>
              <CardDescription>{t("guest.new.subtitle")}</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              {/* <Form
                action={loginAction}
                submitButtonText="Save"
                className="mt-2  grid grid-flow-row grid-cols-3 gap-4 rounded-md p-4 pt-2"
              >
                {Object.keys(UserModel.shape).map((fieldName) => {
                  return <>{fieldName}</>
                })}
              </Form> */}
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}
