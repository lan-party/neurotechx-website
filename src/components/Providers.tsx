"use client"

import type { Session } from "next-auth"
import { SessionProvider } from "next-auth/react"
import LoginMessage from "./LoginMessage"
import { hasCookie, setCookie } from "cookies-next"
import { Usable, use, useEffect } from "react"
import { useSearchParams } from "next/navigation"

export default function Providers(
    { session, children }: 
    { session: Session | null, children: React.ReactNode }
) {

    
    return (
        <SessionProvider session={session}>
            {children}
        </SessionProvider>
    )
}