'use client';

import { deleteCookie } from 'cookies-next/client';
import { signOut } from 'next-auth/react';
import React from 'react'
import styles from '../app/(public)/page.module.css';

const SignOutButton = () => {

    const HandleLogout = async () => {
        deleteCookie('firstLogin');
        await signOut({ callbackUrl: "/" });
    }

  return (
    <button className={`${styles.buttonSecondary}`} style={{'padding': '13px'}} onClick={HandleLogout}>
      Sign Out
    </button>
  )
}

export default SignOutButton
