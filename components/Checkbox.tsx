"use client"

import { forwardRef, InputHTMLAttributes } from "react"

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label: string
}

const Checkbox = forwardRef<HTMLInputElement, Props>(function Checkbox(
  { name, error, label, required, className, ...rest },
  ref
) {
  return (
    <fieldset className={`flex ${className ? className : ""}`}>
      <input ref={ref} id={name} name={name} {...rest} type="checkbox" />
      <label htmlFor={name} className="ml-1 w-fit text-sm font-semibold">
        {label + (required ? " *" : "")}
      </label>
      {error && <span className="text-sm text-red-600">{error}</span>}
    </fieldset>
  )
})

export default Checkbox
