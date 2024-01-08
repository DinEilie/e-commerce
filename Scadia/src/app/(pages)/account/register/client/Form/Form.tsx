'use client';
import React, { useEffect, useState } from 'react';
import Message from './components/Message/Message';
import MessageAlert from './client/Message/Message';
import { validatePassword } from '@/app/services/validation/password';
import { validateEmail } from '@/app/services/validation/email';

export default function Form() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailValid, setEmailValid] = useState('none');
  const [passwordValid, setPasswordValid] = useState('none');

  useEffect(() => {
    setEmailValid(validateEmail(email));
    setPasswordValid(validatePassword(password));
  }, [email, password]);
  return (
    <>
      <MessageAlert />
      <Message validity={emailValid} type='email' />
      <Message validity={passwordValid} type='password' />
      <form className='w-1/2' action='/api/auth/sign-up' method='post'>
        <label className='mt-10 block gap-3 text-sm font-medium' htmlFor='email'>
          Email
        </label>
        <input
          className='border-b-2 p-2 font-semibold outline-red-600'
          placeholder='Type your email'
          name='email'
          id='email'
          onChange={(event) => setEmail(event.target.value)}
        />
        <label className='mt-10 block gap-3 text-sm font-medium' htmlFor='password'>
          Password
        </label>
        <input
          className='border-b-2 p-2 font-semibold outline-red-600'
          placeholder='Type your password'
          name='password'
          id='password'
          type='password'
          maxLength={22}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          className='mt-10 w-full rounded bg-neutral-800 px-4 py-2 text-center text-lg font-medium text-white duration-300 hover:bg-neutral-700 disabled:bg-neutral-500/50'
          type='submit'
          disabled={emailValid !== 'ok' || passwordValid !== 'ok'}>
          Register
        </button>
      </form>
    </>
  );
}
