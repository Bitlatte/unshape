"use client"

import Navbar from "@/components/navbar"

export default function When() {

    return (
        <>
            <div className="min-h-svh">
                <Navbar />
                <div className="h-[80vh] flex flex-col gap-10 justify-center items-center">
                    <h1 className={"text-9xl font-black bg-gradient-to-tr from-pink-600 to-blue-600 via-red-600 text-transparent bg-clip-text animate-gradient"}>
                        RIGHT NOW!
                    </h1>
                    <a href="/break-the-chains" className="btn btn-outline btn-wide">Be FREE!</a>
                </div>
            </div>
        </>
    )
}