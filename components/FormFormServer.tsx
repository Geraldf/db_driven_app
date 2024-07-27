"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { useTranslation } from "@/i18n/client"
import type { BaseComponent, FormState } from "@/types"
import { useFormState } from "react-dom"

import { DisplayErrors } from "./DisplayError"
import { SubmitButton } from "./SubmitButton"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form"
import { Input } from "./ui/input"

interface IFormProps extends BaseComponent {
  action: (prevState: FormState, formData: FormData) => Promise<FormState>
  submitButtonText?: string
}

const Form = ({
  action,
  submitButtonText,
  children,
  className,
}: IFormProps) => {
  const [state, formAction] = useFormState(action, { data: null, error: null })
  const ref = useRef<HTMLFormElement | null>(null)

  useEffect(() => {
    if (state.data) {
      ref.current?.reset()
    }
  }, [state])

  return (
    <form ref={ref} action={formAction} className={className}>
      <FF>{children}</FF>
      {state.error ? <DisplayErrors errors={state.error} /> : null}
      {state.data ? (
        <div className="my-2 text-lg font-semibold">{state.data} 🎉</div>
      ) : null}
      <SubmitButton>{submitButtonText}</SubmitButton>
    </form>
  )
}

const FF = (props: any) => {
  const { control, name, fieldSchema, children } = props
  const pathname: string = usePathname().replaceAll("/", ".").substring(1)
  const { i18n, t } = useTranslation("common")
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t(`${pathname}.${name}`) as string}</FormLabel>
          <FormControl>{children}</FormControl>

          {fieldSchema.description && (
            <FormDescription className="text-xs">
              {fieldSchema.description}
            </FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  )
}
