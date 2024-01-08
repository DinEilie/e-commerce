import React from 'react';
import Image from 'next/image';
import logo from '@/app/assets/Scadia.svg';
import Link from 'next/link';
export default function Brand() {
  return (
    <Link title='Home page' href='/' as='/' className='flex items-center gap-2 text-4xl font-extrabold text-white'>
      <Image src={logo} alt='Scadia logo.' className='h-8 w-8' />
      Scadia
    </Link>
  );
}
