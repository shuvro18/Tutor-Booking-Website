import React from 'react';
import Image from 'next/image';
import { auth } from '../lib/auth';
import { headers } from 'next/headers';
import { getBooking } from '../lib/data';

import { Trash } from 'lucide-react';

const MyBookedSession = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    });
    const userId = session.user.id;

    const bookedData = await getBooking(userId);
    console.log(bookedData.length)

    let state = "ha"


    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 py-10 px-4 md:px-8 transition-colors duration-300">
            <div className="max-w-6xl mx-auto space-y-8">

                {/* হেডার */}
                <div className="space-y-2">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                        My Learning Schedule
                    </h1>
                    <p className="text-slate-500 dark:text-zinc-400 text-sm md:text-base">
                        Manage and track your upcoming medical tutoring appointments.
                    </p>
                </div>

                {/* টেবিল কার্ড */}
                <div className="bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">

                            {/* টেবিল হেডার */}
                            <thead>
                                <tr className="bg-slate-50/50 dark:bg-zinc-800/50 border-b border-slate-100 dark:border-zinc-800 text-xs font-bold text-slate-400 dark:text-zinc-400 uppercase tracking-wider">
                                    <th className="py-4 px-6">Tutor Name</th>
                                    <th className="py-4 px-6">Student Name</th>
                                    <th className="py-4 px-6">Email</th>
                                    <th className="py-4 px-6">Status</th>
                                    <th className="py-4 px-6 text-right">Actions</th>
                                </tr>
                            </thead>

                            {/* টেবিল বডি */}
                            <tbody className="divide-y divide-slate-100 dark:divide-zinc-800/60 text-sm font-medium text-slate-700 dark:text-zinc-200">
                                {bookedData.map((item) => (
                                    <tr key={item._id} className="hover:bg-slate-50/50 dark:hover:bg-zinc-800/30 transition-colors">

                                        {/* টিউটর নেম ও অ্যাভাটার */}
                                        <td className="py-4 px-6 flex items-center gap-3">
                                            <Image src={item.tutorImage} height={100} width={100} alt='hello' className={`w-10 h-10 rounded-full font-bold flex items-center justify-center text-xs shrink-0 text-white ${item.avatarBg}`}>

                                            </Image>
                                            <span className="font-bold text-slate-900 dark:text-white">
                                                {item.tutorName}
                                            </span>
                                        </td>

                                        {/* স্টুডেন্ট নেম */}
                                        <td className="py-4 px-6 text-slate-600 dark:text-zinc-300">
                                            {item.name}
                                        </td>

                                        {/* ইমেইল */}
                                        <td className="py-4 px-6 text-slate-500 dark:text-zinc-400">
                                            {item.email}
                                        </td>

                                        {/* স্ট্যাটাস */}
                                        <td className="py-4 px-6">
                                            
                                                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 text-blue-600 dark:bg-blue-950/40 dark:text-blue-400 border border-blue-100 dark:border-blue-900/50">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                                                    BOOKED
                                                </span>
                                           
                                        </td>

                                        {/* অ্যাকশন বাটন */}
                                        <td className="py-6 px-6 text-right">

                                            <button className="text-rose-600 dark:text-rose-400 hover:text-rose-700 font-semibold text-sm transition-all hover:underline cursor-pointer">
                                               <Trash></Trash>
                                            </button>

                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </div>
    );
};


export default MyBookedSession;