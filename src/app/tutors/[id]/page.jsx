
import BookButton from '@/app/components/BookButton';
import { auth } from '@/app/lib/auth';
import { getSingleTutor } from '@/app/lib/data';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';


const TutorDetails = async ({ params }) => {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const sessionUser = session.user;

    const { id } = await params;
    const user = await getSingleTutor(id);






    // const find = users.find(user => user._id == id);





    // availableTime: "Mon - Wed 4:00 PM - 6:00 PM"
    // experience: "Practicing physician offering comprehensive guidelines on clinical pathology."
    // hourlyFee: 52
    // institution: "Sher-e-Bangla Medical College"
    // location: "Barisal"
    // photoUrl: "https://images.unsplash.com/photo-1622902046580-2b47f47f0471?q=80&w=500&auto=format&fit=crop"
    // startDate: "2026-07-26"
    // subject: "biology"
    // teachingMode: "hybrid"
    // totalSlot: 23
    // tutorName:"Dr. Ronald Vance"
    // _id:"6a57eb426972601a9f1e2486"

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 py-10 px-4 md:px-8 transition-colors duration-300">
            <div className="max-w-7xl mx-auto">

                {/* মেইন গ্রিড লেআউট: ডেক্সটপে বামে ডিটেইলস, ডানে বুকিং সাইডবার */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* বামপাশের সেকশন (কল স্প্যান ২) */}
                    <div className="lg:col-span-2 space-y-6">

                        {/* ১. প্রোফাইল হেডার কার্ড */}
                        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2xl p-6 md:p-8 shadow-sm flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                            {/* মেন্টর ইমেজ */}
                            <div className="w-32 h-32 md:w-36 md:h-36 rounded-2xl overflow-hidden shrink-0 border border-slate-100 dark:border-zinc-700">
                                <Image
                                    height={300}
                                    width={300}
                                    src={user.photoUrl}
                                    alt={user.tutorName}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* প্রোফাইল টেক্সট */}
                            <div className="space-y-3 flex-1">
                                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                                    <h1 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white">
                                        {user.tutorName}
                                    </h1>
                                    <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/30 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/50 self-center sm:self-auto">
                                        Available Now
                                    </span>
                                </div>

                                <p className="text-lg font-semibold text-slate-700 dark:text-zinc-300">
                                    {user.subject}
                                </p>

                                <p className="text-sm text-slate-500 dark:text-zinc-400 flex items-center justify-center md:justify-start gap-1.5">
                                    <svg className="w-4 h-4 shrink-0 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                    </svg>
                                    {user.institution}
                                </p>
                            </div>
                        </div>


                        {/* ২. ইনফো ব্যাজ গ্রিড (Availability, Mode, Rates) */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                            {/* Availability */}
                            <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-5 rounded-2xl shadow-sm flex flex-col gap-2">
                                <span className="text-xs font-bold text-teal-600 dark:text-teal-400 tracking-wider uppercase flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                    </svg>
                                    Availability
                                </span>
                                <p className="text-lg font-bold text-slate-800 dark:text-zinc-100">{user.availableTime}</p>

                            </div>

                            {/* Mode & Location */}
                            <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-5 rounded-2xl shadow-sm flex flex-col gap-2">
                                <span className="text-xs font-bold text-indigo-600 dark:text-indigo-400 tracking-wider uppercase flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    Mode & Location
                                </span>
                                <p className="text-lg font-bold text-slate-800 dark:text-zinc-100">{user.teachingMode}</p>
                                <p className="text-xs text-slate-500 dark:text-zinc-400">{user.teachingMode === "hybrid" ? "Oline and Offline" : user.teachingMode === "online" ? "Online" : "Offline"}</p>
                            </div>

                            {/* Rates & Slots */}
                            <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 p-5 rounded-2xl shadow-sm flex flex-col gap-2">
                                <span className="text-xs font-bold text-amber-600 dark:text-amber-400 tracking-wider uppercase flex items-center gap-1.5">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    Rates & Slots
                                </span>
                                <p className="text-lg font-bold text-slate-800 dark:text-zinc-100">
                                    ${user.hourlyFee} <span className="text-sm font-normal text-slate-500">/ hr</span>
                                </p>

                                {/* টোটাল স্লট এবং রিমেইনিং স্লট প্রদর্শন */}
                                <div className="flex items-center justify-between pt-1 text-xs font-medium border-t border-slate-100 dark:border-zinc-800 mt-1">
                                    <div className="text-slate-500 dark:text-zinc-400">
                                        Total: <span className="font-bold text-slate-700 dark:text-zinc-200">{user.totalSlot}</span>
                                    </div>

                                    {/* রিমেইনিং স্লটের হিসাব: (totalSlot - bookedSlots) */}
                                    <div className="flex items-center gap-1">
                                        <span className="text-slate-500 dark:text-zinc-400">Remaining:</span>
                                        <span className={`font-bold px-2 py-0.5 rounded-full ${(user.totalSlot - (user.bookedSlots || 0)) > 0
                                                ? "bg-emerald-50 text-emerald-600 dark:bg-emerald-950/40 dark:text-emerald-400"
                                                : "bg-rose-50 text-rose-600 dark:bg-rose-950/40 dark:text-rose-400"
                                            }`}>
                                            {Math.max(0, user.totalSlot - (user.bookedSlots || 0))}
                                        </span>
                                    </div>
                                </div>
                            </div>

                        </div>


                        {/* ৩. About & Experience কার্ড */}
                        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2xl p-6 md:p-8 shadow-sm space-y-6">

                            {/* About সেকশন */}
                            <div className="space-y-3">
                                <h2 className="text-xl font-bold text-slate-800 dark:text-zinc-100 border-b border-slate-100 dark:border-zinc-800 pb-3">
                                    About the Tutor
                                </h2>
                                <p className="text-sm md:text-base leading-relaxed text-slate-600 dark:text-zinc-300">
                                    {user.experience}
                                </p>
                            </div>

                            {/* Experience & Education টাইমলাইন */}
                            <div className="space-y-4 pt-4">
                                <h2 className="text-xl font-bold text-slate-800 dark:text-zinc-100 pb-2">
                                    Experience & Education
                                </h2>

                                <div className="space-y-4 border-l-2 border-teal-500 dark:border-teal-600 pl-4 ml-1">

                                    {/* অভিজ্ঞতা ১ */}
                                    <div className="relative space-y-1">
                                        <span className="absolute -left-5.25 top-1.5 w-2 h-2 rounded-full bg-teal-500 dark:bg-teal-600 ring-4 ring-white dark:ring-zinc-900" />
                                        <h4 className="font-bold text-slate-800 dark:text-zinc-100 text-sm md:text-base">
                                            Senior Lecturer at {user.institution}
                                        </h4>
                                        <p className="text-xs text-slate-400 dark:text-zinc-500">
                                            2018 - Present
                                        </p>
                                    </div>

                                    {/* অভিজ্ঞতা ২ */}
                                    <div className="relative space-y-1">
                                        <span className="absolute -left-5.25 top-1.5 w-2 h-2 rounded-full bg-teal-500 dark:bg-teal-600 ring-4 ring-white dark:ring-zinc-900" />
                                        <h4 className="font-bold text-slate-800 dark:text-zinc-100 text-sm md:text-base">
                                            Clinical Fellow - Johns Hopkins Pathology
                                        </h4>
                                        <p className="text-xs text-slate-400 dark:text-zinc-500">
                                            2014 - 2018
                                        </p>
                                    </div>

                                    {/* অভিজ্ঞতা ৩ */}
                                    <div className="relative space-y-1">
                                        <span className="absolute -left-5.25 top-1.5 w-2 h-2 rounded-full bg-teal-500 dark:bg-teal-600 ring-4 ring-white dark:ring-zinc-900" />
                                        <h4 className="font-bold text-slate-800 dark:text-zinc-100 text-sm md:text-base">
                                            PhD in Immunobiology, Oxford University
                                        </h4>
                                        <p className="text-xs text-slate-400 dark:text-zinc-500">
                                            2011 - 2014
                                        </p>
                                    </div>

                                </div>
                            </div>

                        </div>

                    </div>


                    {/* ডানপাশের সেকশন: Reserve Session কার্ড */}
                    <div className="lg:col-span-1">
                        <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2xl p-6 shadow-md space-y-6 lg:sticky lg:top-8 transition-all">

                            <h3 className="text-xl font-extrabold text-slate-900 dark:text-white">
                                Reserve Your Session
                            </h3>

                            {/* বিলিং ব্রেকডাউন */}
                            <div className="space-y-4 text-sm text-slate-600 dark:text-zinc-300">
                                <div className="flex justify-between">
                                    <span>Hourly Rate</span>
                                    <span className="font-bold text-slate-800 dark:text-zinc-100">${user.hourlyFee}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Service Fee</span>
                                    <span className="font-bold text-slate-800 dark:text-zinc-100">$2</span>
                                </div>

                                <hr className="border-slate-100 dark:border-zinc-800" />

                                <div className="flex justify-between items-center">
                                    <span className="text-base font-bold text-slate-800 dark:text-zinc-100">Total Estimate</span>
                                    <span className="text-2xl font-black text-slate-900 dark:text-white">${user.hourlyFee + 2}</span>
                                </div>
                            </div>

                            {/* বুক বাটন */}
                            <BookButton tutor={user} user={sessionUser}></BookButton>

                            <p className="text-xs text-center text-slate-400 dark:text-zinc-500 leading-relaxed">
                                Flexible cancellation policy up to 24 hours before the session start time.
                            </p>

                            <hr className="border-slate-100 dark:border-zinc-800" />

                            {/* ভেরিফাইড ট্যাগ */}
                            <div className="flex items-center justify-center gap-1.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                </svg>
                                MediQueue Verified Tutor
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default TutorDetails;