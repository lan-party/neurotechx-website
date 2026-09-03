"use client"

import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import LoginMessage from "./LoginMessage"
import { hasCookie, setCookie } from "cookies-next"
import { Usable, use, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function AuthProviders(
    { session, addUser, children }: 
    { session: Session | null, addUser: (email: string) => Promise<void>, children: React.ReactNode }
) {

    useEffect(() => {
        if(session && session.user?.email && !hasCookie('firstLogin')){
            // Add user to db if not present
            addUser(session.user.email);

            setCookie('firstLogin', true, {maxAge: (10 * 365 * 24 * 60 * 60)});
        }
    }, []);

    
    return (
        <SessionProvider session={session}>
            {session ? children : <LoginMessage />}
        </SessionProvider>
    )
}