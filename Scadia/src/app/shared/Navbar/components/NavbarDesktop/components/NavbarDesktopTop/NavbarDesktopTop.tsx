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

export default function NavbarDesktopTop() {
  const store = useNavbarStore();
  const router = useRouter();
  const supabase = createClientComponentClient();
  const [userEmail, setUserEmail] = useState<string | undefined>(undefined);
  const [isFetched, setIsFetched] = useState<boolean>(false);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setUserEmail(undefined);
    setIsFetched(false);
    router.refresh();
  };

  useEffect(() => {
    async function getCurrentUser() {
      const email = (await supabase.auth.getUser()).data.user?.email;
      setUserEmail(email);
      setIsFetched(true);
    }
    if (!isFetched) getCurrentUser();
  }, [isFetched]);
  return (
    <div
      className='bg-neutral-900'
      onMouseEnter={() => {
        store.setShowClothing(false);
        store.setShowBags(false);
        store.setShowShoes(false);
        store.setShowCamping(false);
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
