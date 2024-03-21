"use client"

export default function Navbar() {
    return (
        <div className={"navbar bg-base-100"}>
            <div className={"flex-1"}>
                <a href="/" className="btn btn-ghost text-xl">Unahsp</a>
            </div>
            <div className={"flex-none"}>
                <ul className={"menu menu-horizontal px-1"}>
                    <li>
                        <a href="/when">When</a>
                    </li>
                    <li>
                        <a href="/why">why</a>
                    </li>
                    <li>
                        <a href="/how">hwo</a>
                    </li>
                </ul>
            </div>
        </div>
    );
}