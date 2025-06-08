import {
    ClerkProvider,
    SignInButton,
    SignUpButton,
    SignedIn,
    SignedOut,
    UserButton,
} from '@clerk/nextjs'


function Navbar() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="flex-1">
                    <a className="btn btn-ghost text-xl">TTM</a>
                </div>
                <div className="flex gap-2">

                    
                    <div className="w-10 rounded-full">
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
        </>
    )
}

export default Navbar