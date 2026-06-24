import Link from 'next/link';

const NavbarPage = () => {
    return (
        <nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white shadow-sm">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* মোবাইলে flex-col (সব নিচে নিচে বসবে) 
                  ট্যাবলেট ও ডেক্সটপে (md:) flex-row (সব পাশাপাশি বসবে)
                */}
                <div className="flex flex-col md:flex-row md:h-16 md:items-center md:justify-between py-4 md:py-0">

                    {/* ১. লোগো */}
                    <div className="shrink-0 text-center md:text-left mb-4 md:mb-0">
                        <Link href="/" className="text-2xl font-bold text-[#003366]">
                            MediQueue
                        </Link>
                    </div>

                    {/* ২. মেনু লিংকসমূহ */}
                    <div className="w-full md:w-auto mb-4 md:mb-0">
                        {/* মোবাইলে লিংকগুলো সেন্টারে থাকবে এবং নিচে নিচে বসবে, ট্যাবলেটে (md:) পাশাপাশি বসবে */}
                        <ul className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6">
                            <li>
                                <Link href="/" className="text-sm font-medium text-gray-600 hover:text-[#003366]">
                                    Home
                                </Link>
                            </li>
                            <li>
                                {/* অ্যাক্টিভ লিংক - ছবিতে যেমন নিচে আন্ডারলাইন আছে */}
                                <Link href="/tutors" className="relative text-sm font-semibold text-[#003366] md:py-1 md:after:absolute md:after:bottom-0 md:after:left-0 md:after:h-0.5 md:after:w-full md:after:bg-[#003366]">
                                    Tutors
                                </Link>
                            </li>
                            <li>
                                <Link href="/add-tutor" className="text-sm font-medium text-gray-600 hover:text-[#003366]">
                                    Add Tutor
                                </Link>
                            </li>
                            <li>
                                <Link href="/my-tutors" className="text-sm font-medium text-gray-600 hover:text-[#003366]">
                                    My Tutors
                                </Link>
                            </li>
                            <li>
                                <Link href="/booked-sessions" className="text-sm font-medium text-gray-600 hover:text-[#003366]">
                                    My Booked Sessions
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* ৩. ডানদিকের অ্যাকশন বাটনসমূহ */}
                    <div className="flex items-center justify-center gap-4 border-t border-gray-100 pt-4 md:pt-0 md:border-none">
                        <button className="text-gray-600 hover:text-[#003366] " aria-label="Toggle Theme">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
                            </svg>
                        </button>
                        <Link href="/login" className="text-sm font-medium text-gray-600 px-4 py-2 rounded-md hover:text-white hover:bg-[#002244]">
                            Login
                        </Link>
                        <Link href="/register" className="rounded-md text-gray-600 px-4 py-2 text-sm font-medium  transition-colors hover:text-white hover:bg-[#002244] whitespace-nowrap">
                            Register
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default NavbarPage;