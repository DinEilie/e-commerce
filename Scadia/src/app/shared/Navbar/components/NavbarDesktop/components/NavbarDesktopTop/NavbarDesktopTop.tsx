'use client';
import React, { useEffect, useState } from 'react';
import Brand from './components/Brand/Brand';
import Cart from './components/Cart/Cart';
import Login from './components/Login/Login';
import Searchbar from './components/Searchbar/Searchbar';
import { useNavbarStore } from '@/app/stores/Navbar';
import Newsletter from './components/Newsletter/Newsletter';
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs';
import Logout from './components/Logout/Logout';
import { useRouter } from 'next/navigation';
import { useCartStore } from '@/app/stores/Cart';

export default function NavbarDesktopTop() {
  const storeNavbar = useNavbarStore();
  const storeCart = useCartStore();
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);
  const [isFetched, setIsFetched] = useState<boolean>(false);

  async function handleLogout() {
    const response = await fetch('/api/auth/sign-out');
    const { error } = await response.json();
    if (error === null) {
      setUserEmail(undefined);
      setIsFetched(false);
      storeCart.reset();
      router.refresh();
    }
  }

  async function handleUser() {
    const response = await fetch('/api/auth/getUser');
    const { userData } = await response.json();
    if (userData) setUserEmail(userData.email);
    setIsFetched(true);
  }

  useEffect(() => {
    if (!isFetched) handleUser();
  }, [isFetched]);
  return (
    <div
      className='bg-neutral-900'
      onMouseEnter={() => {
        storeNavbar.setShowClothing(false);
        storeNavbar.setShowBags(false);
        storeNavbar.setShowShoes(false);
        storeNavbar.setShowCamping(false);
      }}>
      <div id='desktopTop' className='mx-auto flex w-10/12 justify-between py-3 3xl:w-7/12 3xl:justify-between'>
        <Brand />
        <Searchbar />
        <Login userEmail={userEmail} dataFetched={isFetched} />
        <Cart />
        <Logout logout={handleLogout} userEmail={userEmail} dataFetched={isFetched} />
      </div>
    </div>
  );
}
