'use client';

import { InputHTMLAttributes, forwardRef } from 'react';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  error?: string;
  label: string;
}

const Input = forwardRef<HTMLInputElement, Props>(function Input(
  { name, error, label, required, className, ...rest },
  ref
) {
  return (
    <fieldset className={`flex flex-col ${className ? className : ''}`}>
      <label htmlFor={name} className="text-sm font-normal mb-1 pt-2 w-fit">
        {label + (required ? ' *' : '')}
      </label>
      <input
        ref={ref}
        id={name}
        name={name}
        {...rest}
        className="ring-1 ring-gray-300 rounded-sm p-2 shadow-md w-full"
      />
      {error && <span className="text-sm text-red-600">{error}</span>}
    </fieldset>
  );
});

export default Input;