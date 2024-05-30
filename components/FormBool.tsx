"use client"

import { forwardRef, InputHTMLAttributes } from "react"
import Link from "next/link"

import { Checkbox } from "./ui/checkbox"
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
} from "./ui/form"
import { Switch } from "./ui/switch"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label: string
}

const Bool = forwardRef<HTMLInputElement, Props>(function Input(
  { name, error, label, required, className, ...rest },
  ref
) {
  return (
    <fieldset className={`flex flex-col ${className ? className : ""}`}>
      <label htmlFor={name} className="mb-1 w-fit pt-2 text-sm font-normal">
        {label}
      </label>
      <Switch
        id={name}
        ref={ref}
        name={name}
        {...rest}
        // className="w-full rounded-sm p-2 shadow-md ring-1 ring-gray-300"
      />

      {error && <span className="text-sm text-red-600">{error}</span>}
    </fieldset>
  )
})

export default Bool
