// app/not-found.jsx
import Link from "next/link";
import { auth } from "./lib/auth";
import { headers } from "next/headers";

export default async function NotFound() {

    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-zinc-950 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 transition-colors duration-300">
            <div className="max-w-md w-full text-center space-y-6">

                {/* ৪MD আর্টওয়ার্ক / অ্যানিমেশন এরিয়া */}
                <div className="relative flex justify-center items-center">
                    <h1 className="text-9xl font-black text-blue-500/10 dark:text-blue-500/5 select-none tracking-widest">
                        404
                    </h1>
                    <div className="absolute font-bold text-4xl sm:text-5xl text-slate-800 dark:text-zinc-100 tracking-tight">
                        Oops!
                    </div>
                </div>

                {/* টেক্সট মেসেজ */}
                <div className="space-y-2">
                    <h2 className="text-xl font-bold text-slate-800 dark:text-zinc-200">
                        Page Not Found
                    </h2>
                    <p className="text-sm text-gray-500 dark:text-zinc-400 max-w-xs mx-auto">
                        We are sorry, the page you are looking for might have been deleted or you may have typed the wrong URL.
                    </p>
                </div>

                {/* অ্যাকশন বাটন */}
                <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center items-center">
                    <Link
                        href="/"
                        className="w-full sm:w-auto px-6 py-2.5 bg-blue-500 hover:bg-blue-600 text-white text-xs font-semibold rounded-xl shadow-md transition-all text-center"
                    >
                        Back to Home
                    </Link>

                    {/* যদি ইউজার টিউটর লিস্টে ফিরে যেতে চায় */}
                    <Link
                        href={`${session ? "/tutors" : "/login"}`}
                        className="w-full sm:w-auto px-6 py-2.5 bg-white dark:bg-zinc-900 text-slate-700 dark:text-zinc-300 border border-gray-200 dark:border-zinc-800 text-xs font-semibold rounded-xl hover:bg-slate-50 dark:hover:bg-zinc-800 transition-all text-center"
                    >
                        Browse Tutors
                    </Link>
                </div>

            </div>
        </div>
    );
}