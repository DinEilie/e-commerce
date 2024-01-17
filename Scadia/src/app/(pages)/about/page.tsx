import React from 'react';
import Image from 'next/image';

//Amit
import ScadiaLogo from '@/app/assets/Scadia.svg';
import About from './components/About/About';
import AboutImage from '@/app/assets/about.png';

export default function page() {
  return (
    <div className='relative mx-auto w-10/12 border bg-white p-5 py-3 3xl:w-7/12'>
      <div className='mx-auto flex items-center bg-gradient-to-l from-pink-600 to-red-600'>
        <div className='w-1/2'>
          <About file='store' />
        </div>
        <div
          title='Home page'
          className='mx-auto flex items-center justify-center gap-2 rounded-lg border bg-white p-6 text-center text-5xl font-extrabold text-white'>
          <Image src={ScadiaLogo} alt='Scadia logo.' width={56} height={56} />
          <span className='bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text font-extrabold text-transparent'>
            Welcome to scadia
          </span>
        </div>
      </div>
      <div className='mx-auto flex items-center bg-gradient-to-r from-orange-500 via-pink-600 to-red-500'>
        <div className='flex w-1/2 flex-col items-center justify-center p-2 text-center'>
          <div className='mx-auto w-fit p-1 text-5xl font-bold text-white'>Our Story</div>
          <p className='mt-2 line-clamp-3 text-lg text-white'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem mollitia labore animi doloribus totam
            tempora quis inventore culpa numquam corrupti deleniti impedit error a aperiam, suscipit repellendus.
            Mollitia, velit modi!
          </p>
        </div>
        <div className='w-1/2'>
          <About file='about' />
        </div>
      </div>
      <div className='my-16 bg-gradient-to-r from-red-600 to-pink-500 bg-clip-text text-center text-5xl font-extrabold text-transparent'>
        Contact Us!
      </div>
    </div>
  );
}
