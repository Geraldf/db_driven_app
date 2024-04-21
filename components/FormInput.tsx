'use client'

import { InputHTMLAttributes, forwardRef } from 'react'
import { Input } from './ui/input'
import { Label } from './ui/label'

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
  label: string
}

function FormInput(props: Props) {
  const { className, label, error, required, name } = props
  return (
    <fieldset className={`flex flex-col pt-3  ${className ? className : ''}`}>
      <Label htmlFor={name} className='mb-1'>{label + (required ? ' *' : '')}</Label>

      <input
        id={name}
        name={name}
        className='w-full rounded-sm p-1 shadow-md ring-1 ring-gray-100'
      />
      {error && <span className='text-sm text-red-600'>{error}</span>}
    </fieldset>
  )
}

export default FormInput
