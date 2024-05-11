"use client"

import { forwardRef, SelectHTMLAttributes } from "react"

interface Props extends SelectHTMLAttributes<HTMLSelectElement> {
  error?: string
  label: string
  options: string[]
}

const Select = forwardRef<HTMLSelectElement, Props>(function Select(
  { name, error, label, required, className, options, ...rest },
  ref
) {
  return (
    <fieldset className={`flex flex-col ${className ? className : ""}`}>
      <label htmlFor={name} className="mb-1 text-sm font-semibold">
        {label + (required ? " *" : "")}
      </label>
      <select
        ref={ref}
        id={name}
        name={name}
        {...rest}
        className="rounded-sm p-3 shadow-md ring-1 ring-gray-500"
      >
        <option key="" value="">
          Choose an option...
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      {error && <span className="text-sm text-red-600">{error}</span>}
    </fieldset>
  )
})

export default Select
