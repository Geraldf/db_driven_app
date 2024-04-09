'use client'

import { useState } from 'react'
import { signIn } from 'next-auth/react'
import { useToast } from "@/components/ui/use-toast"


import { AlertDestructive } from '@/components/Alert'


const SignInPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('') // Initialize with an empty string
  const [error, setError] = useState('')
  const { toast } = useToast()

  const handleSignIn = async (e: React.FormEvent) => {
    
    e.preventDefault()
    try {
      const res = await signIn('onboarding-signup', {
        email,
        password,
        redirect: false
      })
      if (res?.error) {
        setError(res.error)
      }
    } catch (error) {
      console.error('Sign in error:', error)
      setError('An unexpected error occurred. Please try again.')
    }
  }

  return (
    <div className='flex flex-col h-screen items-center justify-center bg-gray-200'>
      <form
        onSubmit={handleSignIn}
        className='mb-4 rounded bg-white px-8 pb-8 pt-6 shadow-md'
      >
        <div className='mb-4'>
          <label
            className='mb-2 block text-sm font-bold text-gray-700'
            htmlFor='email'
          >
            Email
          </label>
          <input
            className='focus:shadow-outline w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='email'
            type='email' // Use type="email" for better mobile keyboard support
            placeholder='Email'
            value={email}
            onChange={e => setEmail(e.target.value)}
            aria-label='Email' // Improve accessibility
          />
        </div>
        <div className='mb-6'>
          <label
            className='mb-2 block text-sm font-bold text-gray-700'
            htmlFor='password'
          >
            Password
          </label>
          <input
            className='focus:shadow-outline mb-3 w-full appearance-none rounded border px-3 py-2 leading-tight text-gray-700 shadow focus:outline-none'
            id='password'
            type='password'
            placeholder='******************'
            value={password}
            onChange={e => setPassword(e.target.value)}
            aria-label='Password' // Improve accessibility
          />
        </div>
        <div className='flex items-center justify-between'>
          <button
            className='focus:shadow-outline rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 focus:outline-none'
            type='submit'
          >
            Sign In
          </button>
          
        </div>
      </form>
     {error && <AlertDestructive msg={error} />} {/* Correct conditional rendering */}
    </div>
  )
}

export default SignInPage
