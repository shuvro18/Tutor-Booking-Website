import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const SingleUser = ({ user }) => {
    console.log(user)
    return (
        <div className="flex justify-center items-center rounded-2xl  dark:bg-zinc-950">
            {/* মেইন কার্ড কন্টেইনার (এখানে group ক্লাসটি ব্যবহার করা হয়েছে হোভার ইফেক্ট কন্ট্রোল করার জন্য) */}
            <div className="group w-98.5 bg-slate-50 dark:bg-zinc-900 border  border-gray-100 dark:border-zinc-800 rounded-2xl p-5 shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 ease-in-out cursor-pointer">

                {/* ইমেজ বক্স (জুম ইফেক্টের জন্য overflow-hidden দেওয়া হয়েছে) */}
                <div className="overflow-hidden rounded-xl h-48 w-full mb-4">
                    <Image
                        height={300}
                        width={300}
                        src={user.photoUrl}  // আপনার ইমেজের সোর্স এখানে বসাবেন
                        alt={user.tutorName}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    />
                </div>

                {/* ইনফরমেশন সেকশন */}
                <div className="space-y-2">
                    {/* নাম (হোভার করলে কালার চেঞ্জ হবে) */}
                    <h3 className="text-xl font-bold text-black dark:text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
                        {user.tutorName}
                    </h3>
                    <p className="text-sm font-medium text-teal-600 bg-teal-50 inline-block px-3 py-1 rounded-full">
                        {user.subject}
                    </p>

                    <div className="pt-3 space-y-1.5 text-sm text-gray-600">
                        <p className="flex justify-between">
                            <span className="font-semibold">Available:</span>
                            <span>{user.availableTime}</span>
                        </p>
                        <p className="flex justify-between">
                            <span className="font-semibold">Session Start:</span>
                            <span>{user.startDate}</span>
                        </p>
                        <p className="flex justify-between items-center pt-1">
                            <span className="font-semibold">Fee:</span>
                            <span className="text-lg font-bold text-gray-800">{user.hourlyFee}</span>
                        </p>
                    </div>
                </div>

                {/* বুক সেশন বাটন (ক্লিক এবং হোভার অ্যানিমেশনসহ) */}
                <Link href={`tutors/${user._id}`}>
                    <button className="w-full bg-teal-600 text-white font-semibold py-3 rounded-xl mt-5 hover:bg-teal-700 active:scale-95 transition-all duration-200 shadow-md hover:shadow-teal-100">
                        Book Session
                    </button>
                </Link>

            </div>
        </div>
    );
};

export default SingleUser;