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
            <div className="navbar bg-base-200 rounded-3xl fixed top-0 left-0 right-0 z-10">
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