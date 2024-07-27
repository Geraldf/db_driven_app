"use server"

import { redirect } from "next/navigation"
import { createTranslation } from "@/i18n/server"
import { formatError } from "@/utils"
import { fromErrorToFormState, type FormState } from "@/utils/to-form-state"

export async function addAddress(
  state: FormState,
  formData: any
): Promise<FormState> {
  const { t } = await createTranslation("common")
  const rawFormData = Object.fromEntries(formData)
  const res = await import("@/app/api/address/route")

  const result = await fetch("http://localhost:3000/api/address", {
    method: "POST",
    body: JSON.stringify(rawFormData),
  })

  const d = await result.json()
  const updatedFormState = {
    ...state,
  }
  if (result.ok) {
    redirect("/guest/list")
    updatedFormState.status = "SUCCESS"
    return updatedFormState
  } else {
    if ((d.code = "P2002")) {
      updatedFormState.status = "ERROR"
      updatedFormState.message = t("guest.new.duplicate")
      return updatedFormState
    } else {
      updatedFormState.status = "ERROR"
      updatedFormState.message = "an error occurred"
      return updatedFormState
    }
  }
}
