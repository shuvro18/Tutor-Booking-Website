import React from 'react';
import { ShieldCheck, Calendar, CreditCard } from 'lucide-react';

const WhyChoose = () => {
  return (
    <section className=" py-16 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tight text-[#0a2540] sm:text-4xl">
            Why Choose MediQueue?
          </h2>
          <p className="mt-3 text-sm text-gray-500 max-w-xl mx-auto">
            The premier platform for structured academic mentorship.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">

          {/* Card 1: Verified Tutors */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-300">
            {/* Icon Container */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 mb-5">
              <ShieldCheck className="h-6 w-6 text-blue-600" />
            </div>
            {/* Title */}
            <h3 className="text-xl font-bold text-[#0a2540] dark:text-zinc-400 mb-3">
              Verified Tutors
            </h3>
            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Every educator undergoes a rigorous vetting process to ensure high-quality, professional standards.
            </p>
          </div>

          {/* Card 2: Easy Scheduling */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-300">
            {/* Icon Container */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 mb-5">
              <Calendar className="h-6 w-6 text-emerald-600" />
            </div>
            {/* Title */}
            <h3 className="text-xl font-bold text-[#0a2540]  dark:text-zinc-400 mb-3">
              Easy Scheduling
            </h3>
            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Our intuitive booking queue system allows you to manage sessions across different time zones seamlessly.
            </p>
          </div>

          {/* Card 3: Secure Payments */}
          <div className="flex flex-col items-center text-center p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm hover:shadow-md transition-all duration-300">
            {/* Icon Container */}
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 mb-5">
              <CreditCard className="h-6 w-6 text-amber-600" />
            </div>
            {/* Title */}
            <h3 className="text-xl font-bold text-[#0a2540] dark:text-zinc-400 mb-3">
              Secure Payments
            </h3>
            {/* Description */}
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Protected transactions with encrypted processing for total peace of mind during your learning journey.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;