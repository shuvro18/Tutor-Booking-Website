import React from 'react';

const GlobalLoading = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center bg-slate-50 dark:bg-zinc-950 transition-colors duration-300 px-4">
      
      {/* সেন্ট্রাল মিনিমাল লোডার কার্ড */}
      <div className="flex flex-col items-center gap-4 p-8 bg-white/50 dark:bg-zinc-900/50 backdrop-blur-md rounded-3xl border border-gray-100 dark:border-zinc-800 shadow-xl dark:shadow-zinc-950/50">
        
        {/* স্মুথ ডাবল-রিং স্পিনার */}
        <div className="relative w-12 h-12">
          {/* ব্যাকগ্রাউন্ড রিং */}
          <div className="w-12 h-12 rounded-full border-2 border-slate-200 dark:border-zinc-800"></div>
          {/* অ্যানিমেটেড রিং */}
          <div className="absolute top-0 left-0 w-12 h-12 rounded-full border-2 border-blue-500 border-t-transparent animate-spin"></div>
        </div>

        {/* টেক্সট অ্যানিমেশন */}
        <div className="text-center space-y-1">
          <p className="text-sm font-semibold text-slate-800 dark:text-zinc-200 tracking-wide">
            Loading...
          </p>
          <p className="text-xs text-gray-400 dark:text-zinc-500 font-medium">
            Please wait a moment
          </p>
        </div>

      </div>

    </div>
  );
};

export default GlobalLoading;