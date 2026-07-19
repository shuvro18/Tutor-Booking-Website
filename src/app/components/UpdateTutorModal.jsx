"use client";

import { Pencil } from "lucide-react";
import { useState } from "react";


import React from 'react';
import { updateUser } from "../lib/actions";

const UpdateTutorModal = ({ id, user }) => {
    // console.log(user)

    const [isOpen, setIsOpen] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const user = Object.fromEntries(formData.entries());
        await updateUser(id, user)

        // সাবমিট হওয়ার পর মোডাল বন্ধ করতে চাইলে:
        setIsOpen(false);
    };
    return (
        <div className="p-4 flex justify-center">
            {/* ১. মোডাল খোলার জন্য বাটন */}

            <button onClick={() => setIsOpen(true)} className="p-1.5 text-green-500 hover:bg-green-50 dark:hover:bg-green-950/30 rounded-lg transition-colors" title="Edit">
                <Pencil className="w-4 h-4" />
            </button>

            {/* ২. মোডাল ওভারলে ও কন্টেইনার */}
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto">

                    {/* বাইরে ক্লিক করলে ব্যাকগ্রাউন্ড ওভারলে মোডাল বন্ধ করবে */}
                    <div
                        className="fixed inset-0"
                        onClick={() => setIsOpen(false)}
                    />

                    {/* মোডাল কার্ড */}
                    <div className="relative w-full max-w-3xl bg-white dark:bg-zinc-900 p-6 sm:p-8 rounded-2xl border border-gray-100 dark:border-zinc-800 shadow-2xl transition-all z-10 max-h-[90vh] overflow-y-auto custom-scrollbar">

                        {/* ক্লোজ (Cross) বাটন */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-zinc-200 p-2 rounded-full hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                        >
                            ✕
                        </button>

                        {/* Title */}
                        <div className="text-center mb-6">
                            <h2 className="text-2xl sm:text-3xl font-bold text-slate-800 dark:text-zinc-100">
                                Add New Tutor
                            </h2>
                            <p className="mt-2 text-sm text-gray-500 dark:text-zinc-400">
                                Fill up the form below to register a tutor on MediQueue.
                            </p>
                        </div>

                        {/* Form */}
                        <form onSubmit={handleSubmit} className="space-y-5">

                            {/* Tutor Name */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
                                    Tutor Name
                                </label>
                                <input
                                    type="text"
                                    name="tutorName"
                                    defaultValue={user.tutorName}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
                                />
                            </div>

                            {/* Photo URL */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
                                    Photo URL
                                </label>
                                <input
                                    type="url"
                                    name="photoUrl"
                                    defaultValue={user.photoUrl}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
                                />
                            </div>

                            {/* Subject / Category & Teaching Mode */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
                                        Subject / Category
                                    </label>
                                    <select
                                        name="subject"
                                        defaultValue={user.subject}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
                                    >
                                        <option value="" className="dark:bg-zinc-900 hidden">Select Subject</option>
                                        <option value="biology" className="dark:bg-zinc-900">Physics</option>
                                        <option value="chemistry" className="dark:bg-zinc-900">Chemistry</option>
                                        <option value="biochemistry" className="dark:bg-zinc-900">Math</option>
                                        <option value="pharmacology" className="dark:bg-zinc-900">Biology</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
                                        Teaching Mode
                                    </label>
                                    <select
                                        name="teachingMode"
                                        defaultValue={user.teachingMode}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-slate-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
                                    >
                                        <option value="" className="dark:bg-zinc-900 hidden">Select Mode</option>
                                        <option value="online" className="dark:bg-zinc-900">Online</option>
                                        <option value="offline" className="dark:bg-zinc-900">Offline</option>
                                        <option value="hybrid" className="dark:bg-zinc-900">Hybrid</option>
                                    </select>
                                </div>
                            </div>

                            {/* Available Days and Time */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
                                    Available Days and Time
                                </label>
                                <input
                                    type="text"
                                    name="availableTime"
                                    defaultValue={user.availableTime}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
                                />
                            </div>

                            {/* Hourly Fee & Total Slot */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
                                        Hourly Fee ($)
                                    </label>
                                    <input
                                        type="number"
                                        name="hourlyFee"
                                        defaultValue={user.hourlyFee}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
                                        Total Slot
                                    </label>
                                    <input
                                        type="number"
                                        name="totalSlot"
                                        defaultValue={user.totalSlot}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
                                    />
                                </div>
                            </div>

                            {/* Session Start Date */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
                                    Session Start Date
                                </label>
                                <input
                                    type="date"
                                    name="startDate"
                                    defaultValue={user.startDate}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all scheme-light dark:scheme-dark"
                                />
                            </div>

                            {/* Institution & Location */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
                                        Institution
                                    </label>
                                    <input
                                        type="text"
                                        name="institution"
                                        defaultValue={user.institution}                                        
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
                                        Location (Area/City)
                                    </label>
                                    <input
                                        type="text"
                                        name="location"
                                        defaultValue={user.location}
                                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all"
                                    />
                                </div>
                            </div>

                            {/* Experience */}
                            <div>
                                <label className="block text-sm font-semibold text-slate-700 dark:text-zinc-300 mb-1.5">
                                    Experience
                                </label>
                                <textarea
                                    name="experience"
                                    rows="3"
                                    defaultValue={user.experience}
                                    className="w-full px-4 py-2.5 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 text-slate-900 dark:text-zinc-100 placeholder-gray-400 dark:placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 dark:focus:ring-blue-400/20 focus:border-blue-500 dark:focus:border-blue-400 text-sm transition-all resize-none"
                                ></textarea>
                            </div>

                            {/* Buttons Row */}
                            <div className="pt-2 flex gap-3 justify-end">
                                <button
                                    type="button"
                                    onClick={() => setIsOpen(false)}
                                    className="px-5 py-2.5 border border-gray-200 dark:border-zinc-800 text-slate-700 dark:text-zinc-300 hover:bg-gray-100 dark:hover:bg-zinc-800 rounded-xl text-sm font-semibold transition-all"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl text-sm transition-all shadow-sm active:scale-95"
                                >
                                    Submit Tutor
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default UpdateTutorModal;