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
      <p className='mx-auto w-2/3 text-center'>
        Get in touch with Scadia – your premier online outdoor store located in the heart of Tel Aviv. Whether you have
        questions about our curated collection of high-quality outdoor gear and apparel or need assistance in selecting
        the perfect equipment for your adventure, our team is here to help. At Scadia, we value customer satisfaction
        and are committed to providing excellent service. Reach out to us via email at <b>info@scadia.com</b> or through
        our contact form below. Your outdoor journey starts here, and we look forward to assisting you every step of the
        way.
      </p>
      <iframe
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54084.949090626884!2d34.83844526469505!3d32.08792483340408!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4ca6193b7c1f%3A0xc1fb72a2c0963f90!2z16rXnCDXkNeR15nXkS3Xmdek15U!5e0!3m2!1siw!2sil!4v1705503671828!5m2!1siw!2sil'
        width='600'
        height='450'
        className='mx-auto'></iframe>
    </div>
  );
}
