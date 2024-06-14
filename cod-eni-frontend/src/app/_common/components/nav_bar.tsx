import React from 'react';
import Link from "next/link";

const NavBar = () => {
    return (
        <div className="flex fixed w-full top-0 justify-between px-[8%] backdrop-filter backdrop-blur-lg bg-opacity-30  py-4 items-center ">
            <div>
                <h1>
                    Logo.
                </h1>
            </div>
            <div className="flex space-x-4 font-semibold">
                <Link href={""}>Acceuil</Link>
                <Link href={""}>A props</Link>
                <Link href={""}>Service</Link>
                <Link href={""}>Contacts</Link>
            </div>
            <button className="px-6 py-3 border border-[#1E1E1E] hover:border-[#1E1E1E] bg-transparent rounded-full">Inscriver gratuitement</button>
        </div>
    );
};

export default NavBar;