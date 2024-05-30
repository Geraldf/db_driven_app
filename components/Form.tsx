"use client"

import { usePathname } from "next/navigation"
import { useTranslation } from "@/i18n/client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { boolean, z } from "zod"

import FormBool from "./FormBool"
//import { SchemaInputType, FieldNames, Schema } from '@/schemas/loginSchema'
import FormInput from "./FormInput"
import { Button } from "./ui/button"

type Props = {
  schema: any
  onSubmit: (val: z.infer<any>) => void
  className?: string
  submitText?: string
}
export default function Form({
  schema,
  onSubmit,
  className,
  submitText,
}: Props) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<z.input<typeof schema>>({
    resolver: zodResolver(schema, {}, { raw: true }),
    mode: "all",
  })
  const { i18n, t } = useTranslation("common")
  const pathname = usePathname().replaceAll("/", ".").substring(1)
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: "",
    },
  })
  return (
    <form onSubmit={handleSubmit(onSubmit)} className={className}>
      {Object.keys(schema.shape).map((fieldName) => {
        const ty = schema.shape[fieldName].type
        const field = schema.shape[fieldName]
        switch (field._def.typeName) {
          case "ZodBoolean":
            return (
              <FormBool
                key={fieldName}
                label={t(fieldName) as string}
                {...register(fieldName)}
                error={errors[fieldName]?.message as string}
                required={schema.shape[fieldName].minLength > 0}
              />
            )
          default:
            return (
              <FormInput
                key={fieldName}
                label={t(`${pathname}.${fieldName}`) as string}
                {...register(fieldName)}
                error={errors[fieldName]?.message as string}
                required={schema.shape[fieldName].minLength > 0}
              />
            )
        }
      })}
      {/* <Select
        label="Title"
        options={titleOptions}
        {...register('title')}
        error={errors.title?.message}
        required
      />

      <Input
        label="First Name"
        {...register('firstName')}
        error={errors.firstName?.message}
        required
      />

      <Input
        label="Middle Name"
        {...register('middleName')}
        error={errors.middleName?.message}
      />

      <Input
        label="Last Name"
        {...register('lastName')}
        error={errors.lastName?.message}
        required
      />

      <Input
        label="Birth Date"
        {...register('birthDate')}
        type="date"
        error={errors.birthDate?.message}
        required
      />

      <Input
        label="Email"
        {...register('email')}
        type="email"
        error={errors.email?.message}
        required
      />

      <Input
        label="Phone Number"
        {...register('phone')}
        error={errors.phone?.message}
        required
      />

      <Input
        label="Website"
        {...register('website')}
        type="url"
        error={errors.website?.message}
        required
      />

      <Input
        label="Profile Image"
        {...register('profileImage')}
        type="file"
        error={errors.profileImage?.message}
        className="col-span-full"
        required
      />

      <Input
        label="New Password"
        {...register('password')}
        type="password"
        error={errors.password?.message}
        className="sm:col-span-2"
        required
      />

      <Input
        label="Confirm Password"
        {...register('confirmPassword')}
        type="password"
        error={errors.confirmPassword?.message}
        className="sm:col-span-2"
        required
      />

      <Checkbox
        label="Subscribe to Newsletter?"
        {...register('subscribe')}
        error={errors.subscribe?.message}
        className="col-span-full"
      /> */}
      <div className="flex h-full items-end justify-end">
        <Button type="submit" className="h-9 bg-blue-500">
          {isSubmitting ? "Submitting..." : t(submitText || "submit")}
        </Button>
      </div>
    </form>
  )
}
