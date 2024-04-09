import * as React from 'react'
import Image from 'next/image'
export function SubLogin() {
  return (
    <div className='flex max-w-[314px] flex-col px-5 text-center text-sm font-medium tracking-wide text-zinc-600'>
      <div className='w-full text-4xl uppercase tracking-wider text-black'>
        Welcome back
      </div>
      <div className='mt-5 w-full'>
        Welcome back! Please enter your details.
      </div>
      <div className='mt-11 w-full text-neutral-900'>Email</div>
      <div className='mt-3 w-full items-start justify-center rounded-xl border border-solid border-black border-opacity-30 bg-stone-300 bg-opacity-0 px-4 py-3.5 font-light shadow-sm'>
        Enter your email
      </div>
      <div className='mt-7 w-full text-neutral-900'>Password</div>
      <div className='mt-3 w-full items-start justify-center whitespace-nowrap rounded-xl border border-solid border-black border-opacity-30 bg-stone-300 bg-opacity-0 p-5 font-light shadow-sm'>
        **********
      </div>
      <div className='mt-12 w-full items-center justify-center rounded-xl bg-red-500 px-16 py-3.5 text-white shadow-sm'>
        Sign in
      </div>
      <div className='mt-3 flex gap-2.5 rounded-xl border border-solid border-black border-opacity-30 bg-red-500 bg-opacity-0 px-16 py-1.5 text-black shadow-sm'>
        <div className='my-auto flex-auto'>Sign in with Google</div>
      </div>
    </div>
  )
}
