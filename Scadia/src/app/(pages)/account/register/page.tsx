import React from 'react';
import Image from 'next/image';
import logo from '@/app/assets/Scadia.svg';
import Link from 'next/link';
import Form from './client/Form/Form';
export default function page() {
  return (
    <div className='flex h-[70vh] items-center justify-center overflow-hidden'>
      <div className='flex w-3/12 flex-col items-center justify-center gap-5 rounded border bg-white p-20'>
        <div className='flex items-center gap-4'>
          <Image src={logo} alt='Scadia logo.' className='w-16' />
          <div className='text-3xl font-bold'>Register to Scadia</div>
        </div>
        <hr className='my-5 w-full' />
        <Form />
        <hr className='w-1/2' />
        <div className='flex gap-2'>
          Already a member?
          <Link
            className='font-semibold underline decoration-red-600 decoration-dashed underline-offset-4 duration-300'
            href='/account/auth'
            as='/account/auth'>
            sign in
          </Link>
        </div>
      </div>
    </div>
  );
}
