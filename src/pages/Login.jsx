import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { LoginScheme } from '../libr/Login.scheme'
import Feedback from '../components/Feedback'
import { LoginFn } from '../APIs/Login.api'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(LoginScheme),
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      email: '',
      password: ''
    }
  })

  async function onSubmit(data) {
    setLoading(true)
    try {
      await LoginFn(data)
      setLoading(false)
      setError('')
      navigate('/Home')
    } catch (err) {
      setLoading(false)
      setError(err?.response?.data?.message || err?.response?.data?.error || 'Login failed')
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto shadow shadow-gray-400 p-7">
      {error ? <Feedback msg={error} /> : null}
      <div className="relative z-0 w-full mb-5 group">
        <input type="email" id="email" {...register('email')} className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-purble-600 peer" placeholder=" " />
        {errors.email && <Feedback msg={errors.email?.message} />}
        <label htmlFor="email" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-purble-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input type="password" id="password" {...register('password')} className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 focus:outline-none focus:ring-0 focus:border-purble-600 peer" placeholder=" " />
        {errors.password && <Feedback msg={errors.password?.message} />}
        <label htmlFor="password" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-purble-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Password</label>
      </div>

      <button type="submit" disabled={loading} className='bg-blue-700 rounded-xl px-4 py-2 cursor-pointer text-white disabled:opacity-60'>{loading ? 'Signing in...' : 'Login'}</button>
    </form>
  )
}
