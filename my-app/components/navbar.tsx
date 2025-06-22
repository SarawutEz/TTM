"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@clerk/nextjs"

import {
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from "@clerk/nextjs"

export default function Navbar() {
    const { isSignedIn } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (isSignedIn) {
            router.push("/about")
        }
    }, [isSignedIn, router])

    return (
        <div className="navbar bg-base-200 rounded-3xl fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-opacity-60">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">TTM</a>
            </div>
            <div className="flex gap-2">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                    <SignedIn>
                        <UserButton />
                    </SignedIn>
                </div>
                <SignedOut>
                    <div className="btn">
                        <SignInButton />
                    </div>
                    <div className="btn">
                        <SignUpButton />
                    </div>
                </SignedOut>
            </div>
        </div>
    )
}
