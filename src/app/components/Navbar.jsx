"use client"

import Link from 'next/link';
import NavLink from './NavLink';
import LRnavLink from './LRnavLink';
import ThemeToggle from './ThemeToggle';
import { authClient } from '../lib/auth-client';
import Image from 'next/image';
import ittachi from "@/app/ittachi.jpg"

const NavbarPage = () => {

    const { data: session } = authClient.useSession();
    const user = session?.user
    console.log(user)


    return (
        <nav className=" top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

                <div className="flex  md:flex-row md:h-16 items-center md:justify-between py-4 md:py-0">


                    <div className="flex justify-between items-center gap-2">

                        <div className="dropdown lg:hidden flex items-center">

                            <div tabIndex={0} role="button" className='cursor-pointer'>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#003366]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" />
                                </svg>
                            </div>

                            <div className="">
                                <ul tabIndex="-1" className="menu menu-sm dropdown-content bg-white  rounded-box z-1 mt-3 w-52 p-2 shadow">
                                    <li>
                                        <NavLink href="/" >
                                            Home
                                        </NavLink>
                                    </li>
                                    <li>
                                        {/* অ্যাক্টিভ লিংক - ছবিতে যেমন নিচে আন্ডারলাইন আছে */}
                                        <NavLink href="/tutors" >
                                            Tutors
                                        </NavLink>
                                    </li>

                                    {user ? (
                                        <ul className='  '>
                                            <li>
                                                <NavLink href="/add-tutor" >
                                                    Add Tutor
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink href="/my-tutors">
                                                    My Tutors
                                                </NavLink>
                                            </li>
                                            <li>
                                                <NavLink href="/booked-sessions" >
                                                    My Booked Sessions
                                                </NavLink>
                                            </li>
                                        </ul>
                                    ) : ""}

                                </ul>

                            </div>

                        </div>


                        {/* ১. লোগো */}
                        <div className="shrink-0 text-center md:text-left  md:mb-0">
                            <Link href="/" className="text-2xl font-bold text-[#003366]">
                                MediQueue
                            </Link>
                        </div>

                    </div>






                    {/* ২. মেনু লিংকসমূহ */}
                    <div className=" w-full md:w-auto mb-4 md:mb-0">

                        {/* boro screen er jonno  */}

                        <ul className="hidden lg:flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
                            <li>
                                <NavLink href="/" >
                                    Home
                                </NavLink>
                            </li>
                            <li>
                                {/* অ্যাক্টিভ লিংক - ছবিতে যেমন নিচে আন্ডারলাইন আছে */}
                                <NavLink href="/tutors" >
                                    Tutors
                                </NavLink>
                            </li>
                            {user ? (
                                <ul className='flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6'>
                                    <li>
                                        <NavLink href="/add-tutor" >
                                            Add Tutor
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="/my-tutors">
                                            My Tutors
                                        </NavLink>
                                    </li>
                                    <li>
                                        <NavLink href="/booked-sessions" >
                                            My Booked Sessions
                                        </NavLink>
                                    </li>
                                </ul>
                            ) : ""}

                        </ul>
                    </div>

                    {/* ৩. ডানদিকের অ্যাকশন বাটনসমূহ */}

                    <div className='flex items-center justify-center gap-4'>
                        <button className="text-gray-600 hover:text-[#003366] " aria-label="Toggle Theme">
                            <ThemeToggle></ThemeToggle>
                        </button>
                        {user ? (
                            <div className="flex justify-center items-center gap-3">
                                <p className="text-[10px] font-bold tracking-widest uppercase  text-amber-800 px-3 py-1 ">Hello {user.name}</p>

                                <div tabIndex={0} className="group relative">

                                    <div role="button" className="btn btn-ghost btn-circle avatar cursor-pointer ">
                                        <div className="w-10 rounded-full bg-slate-200 cursor-pointer ">
                                            <Image src={user.image || ittachi} width={60} height={60} alt="user's picture"></Image> <br />

                                        </div>

                                    </div>
                                    <div onClick={async () => await authClient.signOut()} tabIndex="-1" className="cursor-pointer    text-gray-500 dropdown-content z-1 menu menu-sm absolute scale-y-0 group-focus:scale-y-100
                                     duration-200">
                                        <li className="cursor-pointer font-bold hover:bg-[#003366] hover:text-white hover:rounded-md">
                                            Logout
                                        </li>
                                    </div>

                                </div>


                            </div>

                        ) :
                            (
                                <div className="flex items-center justify-center gap-x-0.5 md:gap-4 border-t border-gray-100  md:pt-0 md:border-none">

                                    <LRnavLink href="/login" >
                                        Login
                                    </LRnavLink>
                                    <LRnavLink href="/register" >
                                        Register
                                    </LRnavLink>
                                </div>
                            )}
                    </div>


                </div>
            </div>
        </nav>
    );
};

export default NavbarPage;