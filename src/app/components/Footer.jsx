import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full text-gray-600 border-t border-gray-200 mt-auto">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">

                {/* মেইন গ্রিড কন্টেইনার */}
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-8">

                    {/* লোগো ও ডেসক্রিপশন সেকশন */}
                    <div className="lg:col-span-2 space-y-4">
                        <Link href="/" className="text-2xl font-bold text-[#003366]">
                            MediQueue
                        </Link>
                        <p className="text-sm text-gray-500 max-w-sm leading-relaxed">
                            Professional academic mentorship and queue management for medical students and tutors worldwide.
                        </p>
                    </div>

                    {/* লিংক কলাম ১: Platform */}
                    <div>
                        <h3 className="text-sm font-bold text-[#003366] tracking-wider uppercase mb-4">
                            Platform
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/tutors" className="group relative inline-block text-sm text-gray-600 hover:text-[#003366] transition-colors pb-1">
                                    Tutors
                                    {/* হোভার করলে বাম থেকে ডানে আন্ডারলাইন আসবে */}
                                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#003366] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/servicess" className="group relative inline-block text-sm text-gray-600 hover:text-[#003366] transition-colors pb-1">
                                    Learning Services
                                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#003366] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* লিংক কলাম ২: Support */}
                    <div>
                        <h3 className="text-sm font-bold text-[#003366] tracking-wider uppercase mb-4">
                            Support
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/contact" className="group relative inline-block text-sm text-gray-600 hover:text-[#003366] transition-colors pb-1">
                                    Contact Support
                                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#003366] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/help" className="group relative inline-block text-sm text-gray-600 hover:text-[#003366] transition-colors pb-1">
                                    Help Center
                                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#003366] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* লিংক কলাম ৩: Legal */}
                    <div>
                        <h3 className="text-sm font-bold text-[#003366] tracking-wider uppercase mb-4">
                            Legal
                        </h3>
                        <ul className="space-y-3">
                            <li>
                                <Link href="/privacy" className="group relative inline-block text-sm text-gray-600 hover:text-[#003366] transition-colors pb-1">
                                    Privacy Policy
                                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#003366] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                            <li>
                                <Link href="/terms" className="group relative inline-block text-sm text-gray-600 hover:text-[#003366] transition-colors pb-1">
                                    Terms of Service
                                    <span className="absolute bottom-0 left-0 h-0.5 w-0 bg-[#003366] transition-all duration-300 group-hover:w-full"></span>
                                </Link>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* নিচের কপিরাইট সেকশন */}
                <div className="mt-12 pt-6 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                        &copy; 2026 MediQueue. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Footer;