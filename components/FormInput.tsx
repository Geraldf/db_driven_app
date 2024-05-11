"use client"

import { forwardRef, InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label: string
}

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { name, error, label, required, className, ...rest },
  ref
) {
  return (
    <fieldset className={`flex flex-col ${className ? className : ""}`}>
      <label htmlFor={name} className="mb-1 w-fit pt-2 text-sm font-normal">
        {label + (required ? " *" : "")}
      </label>
      <input
        ref={ref}
        id={name}
        name={name}
        {...rest}
        className="w-full rounded-sm p-2 shadow-md ring-1 ring-gray-300"
      />
      {error && <span className="text-sm text-red-600">{error}</span>}
    </fieldset>
  )
})

export default Input
