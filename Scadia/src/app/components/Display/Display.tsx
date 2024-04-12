import React from 'react';

export default function Display() {
  return (
    <div className='fixed left-0 top-0 z-50 flex h-screen w-screen items-center justify-center bg-black/90 lg:hidden'>
      <div className='w-5/6 rounded-2xl bg-slate-100 p-2 text-black'>
        This is a project Demo currently accessible by wider desktop resolution (e.g 1024px).
      </div>
    </div>
  );
}
