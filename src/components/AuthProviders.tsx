"use client"

import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import LoginMessage from "./LoginMessage"
import { hasCookie, setCookie } from "cookies-next"
import { Usable, use, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function AuthProviders(
    { session, addUser, sendWelcomeEmai, children }: 
    { session: Session | null, addUser: (email: string) => Promise<number>, sendWelcomeEmai: (email: string) => Promise<void>, children: React.ReactNode }
) {

    useEffect(() => {

        (async () => {

            if(session && session.user?.email && !hasCookie('firstLogin')){
                
                    // Add user to db if not present
                    const rows = await addUser(session.user.email);

                    // Send welcome email if user email was added to the db for the first time
                    if(rows > 0){
                        sendWelcomeEmai(session.user.email);
                    }

                setCookie('firstLogin', true, {maxAge: (10 * 365 * 24 * 60 * 60)});
            }

        })();

    }, []);

    
    return (
        <SessionProvider session={session}>
            {session ? children : <LoginMessage />}
        </SessionProvider>
    )
}