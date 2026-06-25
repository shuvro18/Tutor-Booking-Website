import Link from 'next/link';

const UnderConstruction = () => {
    return (
        <div className="min-h-screen bg-white text-gray-800 flex flex-col justify-between font-sans relative overflow-hidden">

            {/* ব্যাকগ্রাউন্ড রেডিয়াল গ্রাডিয়েন্ট ইফেক্ট (ঠিক ছবির মতো হালকা বৃত্তাকার শেড) */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(240,244,248,0.6)_0%,transparent_70%)] pointer-events-none"></div>

            {/* প্রধান কন্টেন্ট সেকশন */}
            <main className="flex-1 flex flex-col items-center justify-center px-4 py-16 text-center relative z-10 max-w-3xl mx-auto">

                {/* ১. ইলস্ট্রেশন / মেজারমেন্ট কম্পাস আইকন এরিয়া */}
                <div className="relative mb-6">
                    {/* মেইন বড় সার্কেল */}
                    <div className="w-40 h-40 rounded-full border border-gray-100 bg-gray-50 flex items-center justify-center shadow-sm relative">
                        {/* কম্পাস আইকন (SVG) */}
                        <svg className="w-16 h-16 text-[#002244]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l-6 6m0 0l6 6m-6-6h12a6 6 0 016 6v3" />
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v3m0 6v3m4.5-7.5l-2.121 2.121m-6.758 4.242l-2.121 2.121" />
                        </svg>

                        {/* উপরের ডানদিকের ছোট গ্রীন গ্র্যাজুয়েশন ক্যাপ ব্যাজ */}
                        <div className="absolute -top-1 -right-1 w-8 h-8 rounded-full bg-[#A3E635] flex items-center justify-center text-white shadow">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-5.824-3l-.06-.015a12.083 12.083 0 01.665-6.479L12 14z" />
                            </svg>
                        </div>

                        {/* নিচের বামদিকের ছোট অরেঞ্জ স্টেথিসকোপ ব্যাজ */}
                        <div className="absolute -bottom-1 -left-1 w-8 h-8 rounded-full bg-[#FDBA74] flex items-center justify-center text-white shadow">
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                        </div>
                    </div>
                </div>

                {/* ২. 'IN DEVELOPMENT' ব্যাজ */}
                <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-[#002244] text-white text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">
                    <span className="text-sm">🔧</span> IN DEVELOPMENT
                </div>

                {/* ৩. মেইন হেডিং শিরোনাম */}
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#002244] tracking-tight leading-tight max-w-2xl mb-4">
                    We are Preparing Your Next Learning Experience
                </h1>

                {/* ৪. সাবডেসক্রিপশন টেক্সট */}
                <p className="text-base text-gray-500 max-w-xl leading-relaxed mb-10">
                    This feature is currently being meticulously crafted by our clinical and educational experts to ensure the highest quality mentorship environment for medical professionals.
                </p>

                {/* ৫. ইমেইল সাবস্ক্রিপশন ফর্ম */}
                <div className="w-full max-w-md bg-white border border-gray-200 rounded-xl p-1.5 flex items-center shadow-sm focus-within:border-[#002244] transition-all mb-4">
                    <div className="flex items-center pl-3 text-gray-400">
                        {/* চিঠি বা ইনবক্স আইকন */}
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <input
                        type="email"
                        placeholder="Enter your email for updates"
                        className="w-full px-3 py-2 text-sm text-gray-700 bg-transparent focus:outline-none placeholder-gray-400"
                    />
                    <button className="bg-[#002244] text-white font-medium text-sm px-5 py-2.5 rounded-lg hover:bg-[#003366] transition-colors whitespace-nowrap">
                        Notify Me
                    </button>
                </div>

                {/* ৬. ছোট নোটিশ কাউন্টার */}
                <p className="text-xs text-gray-400 font-medium mb-10">
                    Join 1,200+ medical students waiting for early access.
                </p>

                {/* ৭. প্রোগ্রেস বার (৭৫% কমপ্লিট) */}
                <div className="w-full max-w-xs mb-12">
                    <div className="w-full bg-gray-100 h-1.5 rounded-full overflow-hidden">
                        {/* ৭৫% ফিলড স্টাইল */}
                        <div className="bg-[#002244] h-full w-[75%] rounded-full"></div>
                    </div>
                    <span className="text-xs font-bold text-[#002244] tracking-wider uppercase inline-block mt-3">
                        75% Complete
                    </span>
                </div>

                {/* ৮. ব্যাক টু হোম বাটন */}
                <Link
                    href="/"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 hover:text-[#002244] transition-colors group"
                >
                    <span className="transform transition-transform group-hover:-translate-x-1">←</span> Back to Home
                </Link>

            </main>
        </div>
    );
};

export default UnderConstruction;