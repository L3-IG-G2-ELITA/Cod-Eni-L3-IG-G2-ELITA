import React from 'react';
import Link from "next/link";
import { CiLinkedin } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

const Footer = () => {
    return (
        <>
            <div className="bg-[#5541D9] text-white rounded-3xl mx-[8%]  bg-opacity-65 px-20">
                <div className="flex flex-col space-y-4">
                    <div className="flex w-full justify-around pt-20">
                        <div>

                        </div>
                        <div className="flex flex-col space-y-3">
                            <Link href={""}>A propos de nous</Link>
                            <Link href={""}>Contact</Link>
                            <Link href={""}>FAQ</Link>
                            <Link href={""}>Mentions legales</Link>
                        </div>
                        <div className="flex flex-col space-y-3">
                            <Link href={""}>Condition d&apos;utilisation</Link>
                            <Link href={""}>Support</Link>
                            <Link href={""}>Blog</Link>
                            <Link href={""}>Mentions legales</Link>
                        </div>
                    </div>
                    <div className="w-full h-[1px] bg-white"/>
                </div>
                <div className="pt-20 pb-5  flex justify-between">
                    <p className='opacity-70'> Elita &#169; {new Date().getFullYear()} </p>
                    <div className="flex items-center space-x-8">
                        <Link href={""}><CiLinkedin className="text-2xl" /></Link>
                        <Link href={""}><FaFacebook className="text-2xl" /></Link>
                        <Link href={""}><CiInstagram className="text-2xl" /></Link>
                    </div>
                </div>
            </div>
            <div className="h-16"/>
        </>
    );
};

export default Footer;