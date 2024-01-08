import React from 'react';
import Image from 'next/image';
import logo from '@/app/assets/Scadia.svg';
import Link from 'next/link';
import Message from './client/Message/Message';
export default function page() {
  return (
    <div className='flex h-[70vh] items-center justify-center overflow-hidden'>
      <div className='flex w-3/12 flex-col items-center justify-center gap-5 rounded border bg-white p-20'>
        <div className='flex items-center gap-4'>
          <Image src={logo} alt='Scadia logo.' className='w-16' />
          <div className='text-3xl font-bold'>Login to Scadia</div>
        </div>
        <hr className='my-5 w-full' />
        <Message />
        <form className='w-1/2' action='/api/auth/sign-in' method='post'>
          <label className='mt-10 block gap-3 text-sm font-medium' htmlFor='email'>
            Email
          </label>
          <input className='border-b-2 p-2 font-semibold outline-red-600' placeholder='Type your email' name='email' />
          <label className='mt-10 block gap-3 text-sm font-medium' htmlFor='password'>
            Password
          </label>
          <input
            className='border-b-2 p-2 font-semibold outline-red-600'
            type='password'
            placeholder='Type your password'
            name='password'
          />
          <button
            className='mt-10 w-full rounded bg-red-600 px-4 py-2 text-center text-lg font-medium text-white duration-300 hover:bg-red-500'
            type='submit'>
            Login
          </button>
        </form>
        <hr className='w-1/2' />
        <div className='flex gap-2'>
          Not a member?
          <Link
            className='font-semibold underline decoration-red-600 decoration-dashed underline-offset-4 duration-300'
            href='/account/register'
            as='/account/register'>
            register
          </Link>
        </div>
      </div>
    </div>
  );
}
