import React from 'react';
type LogoutProps = {
  userEmail: string | undefined;
  dataFetched: boolean;
  logout: () => void;
};
export default function Logout(props: LogoutProps) {
  return (
    <button
      onClick={props.logout}
      className={`group/account flex items-center gap-5 rounded px-5 py-3 text-white duration-100 hover:cursor-pointer ${
        props.userEmail === undefined ? 'hidden' : ''
      }`}>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        fill='currentColor'
        className='h-7 w-7 group-hover/account:animate-jello'>
        <path
          fillRule='evenodd'
          d='M7.5 3.75A1.5 1.5 0 0 0 6 5.25v13.5a1.5 1.5 0 0 0 1.5 1.5h6a1.5 1.5 0 0 0 1.5-1.5V15a.75.75 0 0 1 1.5 0v3.75a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3V5.25a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3V9A.75.75 0 0 1 15 9V5.25a1.5 1.5 0 0 0-1.5-1.5h-6Zm10.72 4.72a.75.75 0 0 1 1.06 0l3 3a.75.75 0 0 1 0 1.06l-3 3a.75.75 0 1 1-1.06-1.06l1.72-1.72H9a.75.75 0 0 1 0-1.5h10.94l-1.72-1.72a.75.75 0 0 1 0-1.06Z'
          clipRule='evenodd'
        />
      </svg>

      {props.dataFetched && props.userEmail ? (
        <div className='font-bold'>
          Logout
          <br />
          <span className='font-bold'></span>
        </div>
      ) : (
        <></>
      )}
    </button>
  );
}
