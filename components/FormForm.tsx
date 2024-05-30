"use client"

import { usePathname } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { useTranslation } from "react-i18next"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

type Props = {
  schema: any
  // onSubmit: (val: z.infer<any>) => void
  formAction: any
  className?: string
  submitText?: string
}

export function FormForm({ schema, formAction, className, submitText }: Props) {
  const { i18n, t } = useTranslation("common")
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {},
  })
  const isSubmitting = form.formState.isSubmitting

  //   function onSubmit(data: z.infer<typeof FormSchema>) {
  //     toast({
  //       title: "You submitted the following values:",
  //       description: (
  //         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
  //           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
  //         </pre>
  //       ),
  //     })
  //   }

  return (
    <Form {...form}>
      {/* <form onSubmit={form.handleSubmit(onSubmit)} className={className}> */}
      <form action={formAction} className={className}>
        {Object.keys(schema.shape).map((fieldName) => {
          return (
            <FF
              key={fieldName}
              control={form.control}
              name={fieldName}
              fieldSchema={schema.shape[fieldName]}
            />
          )
        })}

        <div className="flex h-full items-end justify-end">
          <Button className="h-9 bg-blue-500">
            {isSubmitting ? "Submitting..." : t(submitText || "submit")}
          </Button>
        </div>
      </form>
    </Form>
  )
}

const FF = (props: any) => {
  const { control, name, fieldSchema } = props
  const pathname: string = usePathname().replaceAll("/", ".").substring(1)
  const { i18n, t } = useTranslation("common")
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{t(`${pathname}.${name}`) as string}</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>

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
