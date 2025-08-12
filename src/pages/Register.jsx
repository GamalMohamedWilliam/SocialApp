import React, { useState } from 'react'
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { email } from 'zod';
import { RegisterScheme } from "../libr/register.scheme"; // adjust path
import Feedback from '../components/Feedback';
import { addUser } from '../APIs/Register.api';
import { tr } from 'zod/v4/locales';


export default function Register() {
  const [error,setErorr]=useState('')
  const [loading,setLoading]=useState(false)

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(RegisterScheme),
    mode: 'onChange',
    reValidateMode: 'onChange',

    defaultValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      gender: undefined,
      dateOfBirth: '',
    }
  })

  async function onSubmit(data) {
    setLoading(true)
    try {
      const res = await addUser(data)
      setLoading(false)
      setErorr('')

    } catch (error) {
      setLoading(false)
      setErorr(error?.response?.data?.error);
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto shadow shadow-gray-400 p-7">
      <div className="relative z-0 w-full mb-5 group">
        <input type="text" id="name" {...register("name")} className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purble-500 focus:outline-none focus:ring-0 focus:border-purble-600 peer" placeholder=" " />
        {errors.name && <Feedback msg={errors.name?.message}></Feedback>}
        <label htmlFor="name" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purble-600 peer-focus:dark:text-purble-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-4xl-">Name</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input type="email" id="email" {...register("email")} className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purble-500 focus:outline-none focus:ring-0 focus:border-purble-600 peer" placeholder=" " />
        {errors.email && <Feedback msg={errors.email?.message}></Feedback>}
        <label htmlFor="email" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purble-600 peer-focus:dark:text-purble-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-4xl-">email</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input type="password" id="password" {...register("password")} className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purble-500 focus:outline-none focus:ring-0 focus:border-purble-600 peer" placeholder=" " />
        {errors.password && <Feedback msg={errors.password?.message}></Feedback>}
        <label htmlFor="password" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purble-600 peer-focus:dark:text-purble-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-4xl-">password</label>
      </div>
      <div className="relative z-0 w-full mb-5 group">
        <input type="password" id="rePassword" {...register("rePassword")} className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purble-500 focus:outline-none focus:ring-0 focus:border-purble-600 peer" placeholder=" " />
        {errors.rePassword && <Feedback msg={errors.rePassword.message} />}
        <label htmlFor="rePassword" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purble-600 peer-focus:dark:text-purble-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-4xl-">repassword</label>
      </div>

      <div className="relative z-0 w-full mb-5 group">
        <input type="date" id="dateOfBirth"  {...register("dateOfBirth")} className="block py-2.5 px-0 w-full text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-purble-500 focus:outline-none focus:ring-0 focus:border-purble-600 peer" placeholder=" " />
        {errors.dateOfBirth && <Feedback msg={errors.dateOfBirth?.message}></Feedback>}
        <label htmlFor="dateOfBirth" className="peer-focus:font-medium absolute text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-purble-600 peer-focus:dark:text-purble-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 text-4xl-">date of Birth</label>
      </div>
      <div className="flex items-center gap-6 mb-4">
        <div className="flex items-center">
          <input
            id="female"
            type="radio"
            value="female"
            {...register("gender")}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300
                 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                 dark:border-gray-600 accent-purple-700"
          />
          <label
            htmlFor="female"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            female
          </label>
        </div>

        <div className="flex items-center">
          <input
            id="male"
            type="radio"
            value="male"
            {...register("gender")}
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300
                 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700
                 dark:border-gray-600 accent-purple-700"
          />
          <label
            htmlFor="male"
            className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            male
          </label>
        </div>
      </div>

      {errors.gender && <Feedback msg={errors.gender?.message} />}



      <button onSubmit={onSubmit} className='bg-blue-700 rounded-xl px-4 py-2 cursor-pointer text-white'>Register</button>

    </form>

  )
}
