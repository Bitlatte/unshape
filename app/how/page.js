"use client"

import Navbar from "@/components/navbar"

export default function How() {

    return (
        <>
            <div className="min-h-svh">
                <Navbar />
                <div className="h-[80vh] flex flex-col gap-10 justify-center items-center">
                    <div className="flex flex-col max-w-lg gap-5 justify-center items-center">
                        <h1 className={"text-9xl font-black bg-gradient-to-tr from-pink-600 to-blue-600 via-red-600 text-transparent bg-clip-text animate-gradient"}>
                            Magic!
                        </h1>
                        <p className="text-xl">with the power of the worlds best minds and some creativity spun out of a couple beers</p>
                    </div>
                </div>
                <div className="w-full h-svh flex flex-col justify-center items-center bg-primary">
                    <div className="flex flex-col max-w-lg gap-5 justify-center items-center">
                        <p className="text-xl">
                            For any Public Document owned by a Free Plan User created on or after August 7, 2018, or any Public Document created prior to that date without a LICENSE tab, Customer grants a worldwide, royaltyfree and non-exclusive license to any End User or third party accessing the Public Document to use the intellectual property contained in Customer’s Public Document without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Document, and to permit persons to whom the Document is made available to do the same.
                        </p>
                        <p className="text-md w-full italic flex justify-end">
                            - Onshape Terms of Service
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}