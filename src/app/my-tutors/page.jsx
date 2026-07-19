import React from 'react';
import { auth } from '../lib/auth';
import { headers } from 'next/headers';
import { getUserCollection } from '../lib/data';
import Link from 'next/link';
import { Trash2, Pencil } from 'lucide-react';

const UserAddedData = async () => {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user?.email
    // console.log(user);

    const userData = await getUserCollection(user);
    console.log(userData)


    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-6xl mx-auto bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl shadow-sm overflow-hidden p-6">

                {/* টেবিল হেডার / টাইটেল */}
                <div className="mb-6 flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div>
                        <h2 className="text-xl font-bold text-slate-800 dark:text-zinc-100">My Added Tutors</h2>
                        <p className="text-xs text-gray-500 dark:text-zinc-400 mt-1">Manage and update all the tutor slots you have registered.</p>
                    </div>
                    <Link href="/add-tutor" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-xl transition-all shadow-sm">
                        + Add New Tutor
                    </Link>
                </div>

                {/* ডাটা যদি থাকে (টেবিল ভিউ) */}
                {userData ? (
                    <div className="overflow-x-auto w-full">
                        <table className="min-w-full divide-y divide-gray-100 dark:divide-zinc-800 text-left text-sm">
                            <thead>
                                <tr className="text-gray-500 dark:text-zinc-400 font-medium bg-slate-50/50 dark:bg-zinc-800/30">
                                    <th className="px-4 py-4 font-semibold">Tutor Name</th>
                                    <th className="px-4 py-4 font-semibold">Subject</th>
                                    <th className="px-4 py-4 font-semibold">Available</th>
                                    <th className="px-4 py-4 font-semibold">Hourly Fee</th>
                                    <th className="px-4 py-4 font-semibold">Total Slot</th>
                                    <th className="px-4 py-4 font-semibold">Registration Date</th>
                                    <th className="px-4 py-4 font-semibold text-center">Action</th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-gray-100 dark:divide-zinc-800 text-slate-700 dark:text-zinc-300">
                                {userData.map(e =>

                                    <tr key={e._id} className="hover:bg-slate-50/30 dark:hover:bg-zinc-800/20 transition-colors">
                                        <td className="px-4 py-4 whitespace-nowrap font-medium text-slate-900 dark:text-zinc-100">
                                            {e.tutorName}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            {e.subject}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-xs text-gray-500 dark:text-zinc-400">
                                            {e.availableTime}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap font-medium">
                                            {e.hourlyFee}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-green-50 dark:bg-green-950/30 text-green-600 dark:text-green-400 border border-green-100 dark:border-green-900/30">
                                                {e.totalSlot}
                                            </span>
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap text-xs text-gray-500 dark:text-zinc-400">
                                            {e.startDate}
                                        </td>
                                        <td className="px-4 py-4 whitespace-nowrap">
                                            <div className="flex items-center justify-center gap-3">
                                                {/* ডিলিট বাটন */}
                                                <button className="p-1.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-950/30 rounded-lg transition-colors" title="Delete">
                                                    <Trash2 className="w-4 h-4" />
                                                </button>
                                                {/* এডিট বাটন */}
                                                <button className="p-1.5 text-green-500 hover:bg-green-50 dark:hover:bg-green-950/30 rounded-lg transition-colors" title="Edit">
                                                    <Pencil className="w-4 h-4" />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>

                                )}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    /* 🚫 ডাটা যদি না থাকে (অর্থপূর্ণ মেসেজ ও ইলাস্ট্রেশন সেকশন) */
                    <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
                        <div className="w-16 h-16 bg-blue-50 dark:bg-zinc-800 text-blue-500 dark:text-blue-400 rounded-2xl flex items-center justify-center mb-4 border border-blue-100 dark:border-zinc-700 shadow-sm">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                            </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-800 dark:text-zinc-200 mb-1">No Tutors Found</h3>
                        <p className="text-xs text-gray-500 dark:text-zinc-400 max-w-sm mb-5">
                            It looks like you have not added any tutor slots yet. Get started by creating your first tutor listing!
                        </p>
                        <Link href="/add-tutor" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-xl transition-all shadow-md">
                            Add Your First Tutor
                        </Link>
                    </div>
                )}

            </div>
        </div>
    );
};

export default UserAddedData;