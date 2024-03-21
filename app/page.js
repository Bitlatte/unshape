"use client"
import Navbar from "@/components/navbar";

export default function Home() {

  return (
    <>
      <Navbar />
      <div className={"hero h-svh bg-base-200"}>
        <div className={"hero-content text-center"}>
          <div className={"flex flex-col gap-10 max-w-md"}>
            <h1 className={"text-5xl font-bold"}>Gian back your rights</h1>
            <i className="ri-arrow-down-line text-7xl" />
          </div>
        </div>
      </div>
      <div className={"hero h-svh bg-primary"}>
        <div className={"hero-content text-center"}>
          <div className={"flex flex-col gap-10 items-center max-w-md"}>
            <h1 className={"text-5xl text-primary-content font-bold"}>wonder off itno the big wild world</h1>
            <a href="/break-the-chains" className="btn btn-outline btn-wide">Try it now!</a>
          </div>
        </div>
      </div>
    </>
  );
}
