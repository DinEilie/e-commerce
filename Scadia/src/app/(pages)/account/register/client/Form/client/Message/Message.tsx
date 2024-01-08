'use client';
import { useSearchParams } from 'next/navigation';
import React from 'react';

export default function Message() {
  const searchParams = useSearchParams();
  const status = searchParams.get('status');

  return (
    <div
      className={`flex w-full select-none items-center justify-center gap-2 rounded-md ${
        status === '400' || status === '403' ? 'bg-red-500' : status === '201' ? 'bg-green-500' : 'hidden'
      } p-3 text-white`}>
      <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' fill='currentColor' className='h-4 w-4'>
        <path
          fillRule='evenodd'
          d={
            status === '400'
              ? `M6.701 2.25c.577-1 2.02-1 2.598 0l5.196 9a1.5 1.5 0 0 1-1.299 2.25H2.804a1.5 1.5 0 0 1-1.3-2.25l5.197-9ZM8 4a.75.75 0 0 1 .75.75v3a.75.75 0 1 1-1.5 0v-3A.75.75 0 0 1 8 4Zm0 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z`
              : 'M15 8c0 .982-.472 1.854-1.202 2.402a2.995 2.995 0 0 1-.848 2.547 2.995 2.995 0 0 1-2.548.849A2.996 2.996 0 0 1 8 15a2.996 2.996 0 0 1-2.402-1.202 2.995 2.995 0 0 1-2.547-.848 2.995 2.995 0 0 1-.849-2.548A2.996 2.996 0 0 1 1 8c0-.982.472-1.854 1.202-2.402a2.995 2.995 0 0 1 .848-2.547 2.995 2.995 0 0 1 2.548-.849A2.995 2.995 0 0 1 8 1c.982 0 1.854.472 2.402 1.202a2.995 2.995 0 0 1 2.547.848c.695.695.978 1.645.849 2.548A2.996 2.996 0 0 1 15 8Zm-3.291-2.843a.75.75 0 0 1 .135 1.052l-4.25 5.5a.75.75 0 0 1-1.151.043l-2.25-2.5a.75.75 0 1 1 1.114-1.004l1.65 1.832 3.7-4.789a.75.75 0 0 1 1.052-.134Z'
          }
          clipRule='evenodd'
        />
      </svg>
      {status === '403'
        ? 'Register failed, email is already in use.'
        : status === '400'
          ? 'Register failed, invalid email or password.'
          : status === '201'
            ? 'Register successful, please verify your email in mailbox.'
            : ''}
    </div>
  );
}
