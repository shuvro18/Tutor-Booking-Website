import React from 'react';

const HowItWorks = () => {
  return (
    <section className="py-16 px-4 bg-slate-50 dark:bg-zinc-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        
        {/* হেডার সেকশন */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            How MediQueue Works
          </h2>
          <p className="mt-3 text-base md:text-lg text-slate-500 dark:text-zinc-400">
            Your journey to medical excellence in four simple steps.
          </p>
        </div>

        {/* রেসপনসিভ গ্রিড কন্টেইনার */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* কার্ড ১: Search & Filter */}
          <div className="group bg-white dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center cursor-pointer">
            {/* আইকন */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            {/* টাইটেল */}
            <h3 className="text-xl font-bold text-slate-800 dark:text-zinc-100 mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
              Search & Filter
            </h3>
            {/* বর্ণনা */}
            <p className="text-sm leading-relaxed text-slate-500 dark:text-zinc-400">
              Find the perfect mentor based on specialization, availability, or rating.
            </p>
          </div>

          {/* কার্ড ২: Book a Session */}
          <div className="group bg-white dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center cursor-pointer">
            {/* আইকন */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-emerald-100 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            {/* টাইটেল */}
            <h3 className="text-xl font-bold text-slate-800 dark:text-zinc-100 mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
              Book a Session
            </h3>
            {/* বর্ণনা */}
            <p className="text-sm leading-relaxed text-slate-500 dark:text-zinc-400">
              Choose a time slot that fits your schedule and confirm your booking.
            </p>
          </div>

          {/* কার্ড ৩: Learn & Grow */}
          <div className="group bg-white dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center cursor-pointer">
            {/* আইকন */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-amber-100 dark:bg-amber-950/40 text-amber-500 dark:text-amber-400 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            {/* টাইটেল */}
            <h3 className="text-xl font-bold text-slate-800 dark:text-zinc-100 mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
              Learn & Grow
            </h3>
            {/* বর্ণনা */}
            <p className="text-sm leading-relaxed text-slate-500 dark:text-zinc-400">
              Connect with your tutor for a high-quality, personalized learning experience.
            </p>
          </div>

          {/* কার্ড ৪: Track Progress */}
          <div className="group bg-white dark:bg-zinc-900/60 border border-slate-100 dark:border-zinc-800/80 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col items-center text-center cursor-pointer">
            {/* আইকন */}
            <div className="w-14 h-14 rounded-full flex items-center justify-center mb-5 bg-indigo-100 dark:bg-indigo-950/40 text-indigo-600 dark:text-indigo-400 group-hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 002 2h2a2 2 0 002-2z" />
              </svg>
            </div>
            {/* টাইটেল */}
            <h3 className="text-xl font-bold text-slate-800 dark:text-zinc-100 mb-3 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-200">
              Track Progress
            </h3>
            {/* বর্ণনা */}
            <p className="text-sm leading-relaxed text-slate-500 dark:text-zinc-400">
              Receive feedback and monitor your academic growth over time.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;