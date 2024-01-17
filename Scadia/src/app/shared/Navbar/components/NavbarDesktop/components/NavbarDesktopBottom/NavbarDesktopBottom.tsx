import React from 'react';
import Clothing from './client/Clothing/Clothing';
import Bags from './client/Bags/Bags';
import Shoes from './client/Shoes/Shoes';
import Camping from './client/Camping/Camping';
import About from './client/About/About';

export default function NavbarDesktopBottom() {
  return (
    <div className='relative z-10 border-b border-zinc-300 bg-gray-100'>
      <div id='desktopBottom' className='mx-auto flex w-10/12 gap-16 text-lg text-black 3xl:w-7/12'>
        <Clothing />
        <Bags />
        <Shoes />
        <Camping />
        <About />
      </div>
    </div>
  );
}
