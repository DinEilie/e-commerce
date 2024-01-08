'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type LoginProps = {
  userEmail: string | undefined;
  dataFetched: boolean;
};

export default function Login(props: LoginProps) {
  return (
    <Link
      href={props.dataFetched ? (props.userEmail === undefined ? `/account/auth` : `/api/auth/sign-out`) : ''}
      as={props.dataFetched ? (props.userEmail === undefined ? `/account/auth` : `/api/auth/sign-out`) : ''}
      className='group/account flex items-center gap-5 rounded px-5 py-3 text-white duration-100 hover:cursor-pointer'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='h-7 w-7 group-hover/account:animate-flip'>
        <path
          fillRule='evenodd'
          d='M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z'
          clipRule='evenodd'
        />
      </svg>

      {props.dataFetched ? (
        <div>
          {props.userEmail === undefined ? `Login to` : `Welcome`}
          <br />
          <span className='font-bold'>{props.userEmail === undefined ? `My Account` : `${props.userEmail}`}</span>
        </div>
      ) : (
        <div className='flex h-[48px] items-center justify-center'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 16 16'
            fill='currentColor'
            className='h-4 w-4 animate-spin'>
            <path
              fillRule='evenodd'
              d='M13.836 2.477a.75.75 0 0 1 .75.75v3.182a.75.75 0 0 1-.75.75h-3.182a.75.75 0 0 1 0-1.5h1.37l-.84-.841a4.5 4.5 0 0 0-7.08.932.75.75 0 0 1-1.3-.75 6 6 0 0 1 9.44-1.242l.842.84V3.227a.75.75 0 0 1 .75-.75Zm-.911 7.5A.75.75 0 0 1 13.199 11a6 6 0 0 1-9.44 1.241l-.84-.84v1.371a.75.75 0 0 1-1.5 0V9.591a.75.75 0 0 1 .75-.75H5.35a.75.75 0 0 1 0 1.5H3.98l.841.841a4.5 4.5 0 0 0 7.08-.932.75.75 0 0 1 1.025-.273Z'
              clipRule='evenodd'
            />
          </svg>
        </div>
      )}
    </Link>
  );
}
